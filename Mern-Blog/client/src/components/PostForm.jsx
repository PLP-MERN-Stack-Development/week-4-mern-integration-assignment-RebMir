import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function PostForm({ isEdit = false }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('/api/categories').then(res => setCategories(res.data));
        if (isEdit && id) {
        axios.get(`/api/posts/${id}`).then(res => {
            setTitle(res.data.title);
            setContent(res.data.content);
            setCategory(res.data.category?._id);
        });
        }
    }, [isEdit, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { title, content, category };
        if (isEdit) {
        await axios.put(`/api/posts/${id}`, data);
        } else {
        await axios.post('/api/posts', data);
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
        <h2 className="text-xl font-bold mb-4">{isEdit ? 'Edit' : 'New'} Post</h2>
        <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full p-2 mb-2 border rounded"
        />
        <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            placeholder="Content"
            required
            className="w-full p-2 mb-2 border rounded"
        />
        <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
            className="w-full p-2 mb-4 border rounded"
        >
            <option value="">Select category</option>
            {categories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
            ))}
        </select>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            {isEdit ? 'Update' : 'Create'}
        </button>
        </form>
    );
}
