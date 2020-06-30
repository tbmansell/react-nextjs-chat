import React from "react";

function PostEntry(post) {
    const id = post._id;
    return (
        <li key={id} className="list-group-item">
            <strong>@{post.username}</strong>
            <span>{post.body}</span>
            <div><sub>{new Date(post.date).toLocaleString()}</sub></div>
        </li>
    )
}

function PostListing({ posts }) {
    return (
        <ul className="list-group">
            {posts.map(post => PostEntry(post))}
        </ul>
    )
}

export default PostListing
