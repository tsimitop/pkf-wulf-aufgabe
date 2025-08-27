import Fastify from "fastify";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import { join } from "path";

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
	origin: "*",
	methods: ["GET", "POST", "DELETE"]
});
await fastify.register(fastifyStatic, {
	root: join(process.cwd(), "public"),
	prefix: "/",
})

// In-memory widget storage
let widgets = [];
let idCounter = 1;

// Routes

// Test backend
fastify.get("/", async (request, reply) => {
  return { message: "Backend is running" };
});

// GET /widgets - list all widgets
fastify.get("/widgets", async (request, reply) => {
  return widgets;
});

// POST /widgets - create a new widget
fastify.post("/widgets", async (request, reply) => {
  const { location } = request.body;
  if (!location) {
    return reply.status(400).send({ error: "Location is required" });
  }

  const newWidget = { _id: idCounter.toString(), location, createdAt: new Date() };
  idCounter++;
  widgets.push(newWidget);
  return reply.status(201).send(newWidget);
});

// DELETE /widgets/:id - delete a widget
fastify.delete("/widgets/:id", async (request, reply) => {
  const { id } = request.params;
  widgets = widgets.filter(w => w._id !== id);
  return reply.status(204).send();
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
