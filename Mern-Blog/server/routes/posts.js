import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();

// GET all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET single post
router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id).populate('category');
    res.json(post);
});

// CREATE post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
});

// UPDATE post
router.put('/:id', async (req, res) => {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPost);
});

// DELETE post
router.delete('/:id', async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
});

export default router;
