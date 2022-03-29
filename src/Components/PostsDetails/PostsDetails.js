import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostsDetails = (props) => {
    const {postId}=useParams()
    const [post, setPost] =useState([])
    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } , [postId])
    return (
        <div>
            <h1>I am posts Details:  {postId}</h1>
            <h3>Id: {post.id}</h3>
            <h3>Title: {post.title}</h3>
            <h3>Body: {post.body}</h3>
        </div>
    );
};

export default PostsDetails;