import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import postRoutes from './routes/postRoutes.js';
import categoryRoutes from './routes/categories.js';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;
if (!jwtSecret) {
    console.error('JWT_SECRET is not defined in .env file');
    process.exit(1);
}
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
