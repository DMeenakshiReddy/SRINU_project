import mongoose from "mongoose";

const shapeSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  bust: { type: Number, required: true },
  waist: { type: Number, required: true },
  hips: { type: Number, required: true },
  shoulders: { type: Number, required: true },
  result: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Shape = mongoose.model("Shape", shapeSchema);

export default Shape;
