import express from 'express';
import Category from '../models/Category.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
});

router.post('/', async (req, res) => {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(201).json(newCategory);
});

export default router;
