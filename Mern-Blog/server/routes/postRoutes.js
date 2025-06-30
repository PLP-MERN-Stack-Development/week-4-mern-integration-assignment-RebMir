import express from "express";
import Post from "../models/post.js"; // ✅ Correct model name
const Router = express.Router();

Router.get("/", async (req, res) => {
    try {
        const { page = 1, search = "" } = req.query;
        const limit = 10;
        const query = { title: new RegExp(search, "i") };

        const posts = await Post.find(query)
        .skip((page - 1) * limit)
        .limit(limit);

        const total = await Post.countDocuments(query);
        
        res.json({ posts, total });
    } catch (error) {
        console.error("API /posts error:", error.message);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
});

export default Router;
