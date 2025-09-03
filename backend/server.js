import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { join } from "path";
import { connectDB, Widget } from "./mongo.js";
import 'dotenv/config';
import { fetchWeatherApi } from "openmeteo";
// import { error } from "console";

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "DELETE"]
});
await fastify.register(fastifyStatic, {
	root: join(process.cwd(), "public"),
	prefix: "/",
})

await connectDB();

fastify.get("/", async (request, reply) => {
  return { message: "Backend is running" };
});

fastify.get("/widgets", async (request, reply) => {
  const widgets = await Widget.find();
  return { widgets };
//   return Widget.find();
});

fastify.post("/widgets", async (request, reply) => {
	const { name, lat, lon } = request.body;

	if (!lat || !lon ) {
		return reply.code(400).send({ error: "latitude and longitude required to fetch weather api" });
	}

	const params = {
		latitude: Number(lat),
		longitude: Number(lon),
		current_weather: true
	};

	const url = "https://api.open-meteo.com/v1/forecast";

	try {
		const responses = await fetchWeatherApi(url, params);
		const response = responses[0];

		const current = response.current();
		const temperature = current.variables(0).value();
		const widget = new Widget({ 
			city: name,
			location: `${lat},${lon}`,
			temperature,
		});

		const elevation = response.elevation();
		const timezone = response.timezone();
		const daily = response.daily();
		const hourly = response.hourly();

		console.log(`Current is: ${current}`);
		await widget.save();
		return { widget };
	} catch (err) {
		console.error(err);
		return reply.code(500).send({ error: "Failed to fetch weather api" });
	}
});

// DELETE /widgets/:id - delete a widget
fastify.delete("/widgets/:id", async (request, reply) => {
  const { id } = request.params;
  await Widget.findByIdAndDelete(id);
  return reply.status(204).send();
//   return { success: true };
});

// Start server
const PORT = process.env.PORT || 5000;
fastify.listen({ port: PORT, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Backend running at ${address}`);
});

