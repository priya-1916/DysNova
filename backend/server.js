import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// import Score from "./models/Score.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware to verify JWT token
const authenticateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    req.user = user; // Attach user to request object
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// ✅ API to Save the Game Score
// app.post("/api/scores/save-score", authenticateUser, async (req, res) => {
//   try {
//     const { score } = req.body;
//     if (score === undefined) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }

//     const newScore = new Score({
//       userId: req.user._id,
//       username: req.user.email, // Save username for reference
//       score,
//     });

//     await newScore.save();
//     res.status(201).json({ message: "Score saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error", details: error.message });
//   }
// });

// // ✅ API to Fetch All Scores (For the Logged-in User)
// app.get("/api/scores", authenticateUser, async (req, res) => {
//   try {
//     const scores = await Score.find({ userId: req.user._id }).sort({ score: -1 });
//     res.json(scores);
//   } catch (error) {
//     res.status(500).json({ error: "Server error", details: error.message });
//   }
// });

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

// ✅ Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found. Please sign up!" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials!" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// ✅ Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));