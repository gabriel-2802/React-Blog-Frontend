import React from 'react'
import '../styles/single-post.css'
import Image from '../assets/pexels-sheep-1846422.jpg'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import {useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SinglePost() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [post, setPost] = useState();

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:8000/post/find/" + id);
            setPost(res.data);
        }
        getPost();

    },[id]);

    
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={Image} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                {post?.title}
                <div className="singlePostEdit">
                    <EditNoteIcon className="singlePostIcon" />
                    <DeleteIcon className="singlePostIcon" />
                </div>

            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor"> Author: {post?.author} </span>
                <p className='singlePostDesc'> {post?.content} </p>
                <span className="singlePostDate"> Created at: {new Date(post?.date).toDateString()}</span>
                
            </div>

        </div>
      
    </div>
  )
}

export default SinglePost
