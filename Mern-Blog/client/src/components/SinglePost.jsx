import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/api/posts/${id}`).then(res => setPost(res.data));
    }, [id]);

    if (!post) return <p>Loading…</p>;

    return (
        <article className="p-4 border rounded">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
        <p className="text-gray-700 mb-2">{post.content}</p>
        <p className="text-sm text-gray-500">Category: {post.category?.name}</p>
        <Link to={`/edit/${post._id}`} className="text-blue-500 hover:underline">Edit</Link>
        </article>
    );
}
