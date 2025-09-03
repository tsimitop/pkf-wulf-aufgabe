import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/weatherApp";

export async function connectDB() {
	try {
		await mongoose.connect(MONGO_URI);
		console.log("MongoDB connected.");
	} catch (error) {
		console.log("MongoDB unable to connect.");
	}
}

const widgetSchema = new mongoose.Schema({
	city: { type: String },
	location: { type: String, required: true},
	temperature: { type: Number},
	createdAt: { type: Date, default: Date.now},
});

export const Widget = mongoose.model("Widget", widgetSchema);
