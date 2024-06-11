import React from 'react'
import "../App.css"
import { Post } from './Post'

export const PostList = ({posts,delPost}) => {
  return (
    <div className='post-list'>
        <h1>Posts List</h1>
        {posts.map(post=>{
            return <Post {...post} key={post.id} delPost={delPost}/>
        })}
    </div>
  )
}
