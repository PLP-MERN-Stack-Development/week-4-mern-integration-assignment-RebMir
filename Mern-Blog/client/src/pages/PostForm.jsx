import { useState, useEffect } from "react";
import axios from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        if (id) {
            axios.get(`/posts/${id}`)
                .then(response => {
                    setTitle(response.data.title);
                    setContent(response.data.content);
                })
                .catch(error => console.error("Error fetching post:", error));
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            await axios.put('/posts/${id}', { title, content });
        } else {
            await axios.post('/posts', { title, content });
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" />
            <button type="submit">{id ? "Update" : "Create"} Post</button>
        </form>
    );
};


export default PostForm;