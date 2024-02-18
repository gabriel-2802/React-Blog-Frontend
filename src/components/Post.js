import React from 'react'
import '../styles/post.css'
import Image from '../assets/pexels-sheep-1846422.jpg'

function Post() {
  return (
    <div className='post'>
        <img src={Image} alt='' className='postImg' />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat"> Statements </span>
            </div>
            <span className="postTitle"> Lorem ipsum dolor sit amet. </span>
            <hr />
            <span className="postDate"> 1 hour ago </span>
        </div>
    </div>
  )
}

export default Post
