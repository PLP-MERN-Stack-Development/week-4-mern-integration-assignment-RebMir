import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/api";

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('/posts/${id}').then(res => setPost(res.data));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
    );
};

export default SinglePost;
