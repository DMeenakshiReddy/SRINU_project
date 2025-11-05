import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"; // <--- You forgot this line
import User from "./models/User.js";
import Shape from "./models/ShapeModel.js";

dotenv.config(); // <--- This now works

const app = express();
app.use(express.json());
app.use(cors());

// ✅ MongoDB Connection (Atlas)
const MONGO_URI =
  "mongodb+srv://rahulgupta:231fa04862@cluster16.f4qysbe.mongodb.net/Srinu?retryWrites=true&w=majority&appName=Cluster16";

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "mySecretKey";

// 🧩 Signup Route
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required" });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🧩 Login Route
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// 🧩 Save Shape Route
app.post("/api/save-shape", async (req, res) => {
  const { userEmail, bust, waist, hips, shoulders, result } = req.body;

  if (!userEmail)
    return res.status(400).json({ message: "User email is required" });

  try {
    const newShape = new Shape({
      userEmail,
      bust,
      waist,
      hips,
      shoulders,
      result,
    });

    await newShape.save();
    res.status(201).json({ message: "✅ Shape saved successfully!" });
  } catch (error) {
    console.error("Save Shape Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🧩 Get Results Route
app.get("/api/get-results/:userEmail", async (req, res) => {
  try {
    const { userEmail } = req.params;
    const results = await Shape.find({ userEmail }).sort({ date: -1 });
    res.json(results);
  } catch (error) {
    console.error("Fetch Results Error:", error);
    res.status(500).json({ message: "Error fetching results" });
  }
});

// ✅ Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
