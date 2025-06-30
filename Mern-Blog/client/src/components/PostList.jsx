import React, { useState, useEffect } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
    const [page, setPage] = useState(1);
    const { posts, total, loading, error, fetchPosts } = usePosts();

    const totalPages = Math.ceil(total / 10); // assuming 10 posts per page

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    return (
        <div>
        <h2>Blog Posts</h2>

        {loading && <p>Loading posts...</p>}

        {error && (
            <div style={{ color: "red" }}>
            <strong>Error:</strong> {error.response?.data?.message || error.message}
            </div>
        )}

        {!loading && posts.length === 0 && <p>No posts found.</p>}

        <ul>
            {posts.map((post) => (
            <li key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.content?.substring(0, 100)}...</p>
            </li>
            ))}
        </ul>

        {/* Simple Pagination */}
        {totalPages > 1 && (
            <div style={{ marginTop: "20px" }}>
            <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
                Previous
            </button>
            <span style={{ margin: "0 10px" }}>Page {page} of {totalPages}</span>
            <button onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
                Next
            </button>
            </div>
        )}
        </div>
    );
};

export default PostList;
