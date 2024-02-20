import React from 'react'
import '../styles/posts.css'
import Post from './Post'

function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map((post) => {
        return <Post post={post}/>
      })}
    </div>
  )
}

export default Posts
