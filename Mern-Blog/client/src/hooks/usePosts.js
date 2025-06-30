import { useEffect, useState } from "react";
import axios from "../axios";

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPosts = async (page = 1, search = "") => {
        try {
            setLoading(true);
            const res = await axios.get(`/api/posts?page=${page}&search=${search}`);
            setPosts(res.data.posts);
            setTotal(res.data.total);
        } catch (err) {
            console.error("Fetch error:", err.response?.data || err.message);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return { posts, total, loading, error, fetchPosts };
}
