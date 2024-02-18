import React from 'react'
import '../styles/single-post.css'
import Image from '../assets/pexels-sheep-1846422.jpg'
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src={Image} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <EditNoteIcon className="singlePostIcon" />
                    <DeleteIcon className="singlePostIcon" />
                </div>

            </h1>
            <div className="singlePostInfo">
                <p className='singlePostDesc'> fdjhbfduhbfduhbdfuhbfduhbuhdbufhdbudfjfdhfjdhfdjfdjdfhdfjhdfjdfhfdjh </p>
                <span className="singlePostDate">1 hour ago</span>
                
            </div>

        </div>
      
    </div>
  )
}

export default SinglePost
