import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./user.model.js";

const app = express();
app.use(express.json());

// Signup route
app.post("/signup", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User.create({ name, email, password: hashedPassword });
		await user.save();
		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});

// Login route
app.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ message: "Invalid credentials" });
		}
		const token = jwt.sign({ userId: user._id }, "secretKey", {
			expiresIn: "1h",
		});
		res.json({ token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Server error" });
	}
});

// Protected route
app.get("/protected", (req, res) => {
	// Verify token
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];
	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	jwt.verify(token, "secretKey", (error, decoded) => {
		if (error) {
			return res.status(403).json({ message: "Token expired or invalid" });
		}
		// Token is valid, can access protected resource
		res.json({ message: "Protected resource accessed successfully" });
	});
});

app.listen(3000, () => {
	console.log("Server started on port 3000");
});
