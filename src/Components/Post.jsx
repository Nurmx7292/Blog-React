import React from 'react'
import '../App.css'
import Button from "./UI/Button/Button"
export const Post = ({title,body,id,delPost}) => {

  return (
    <div className='post'>
        <h3 style={{flex:1,alignSelf:"center"}}>{id}. {title}</h3>
        <p style={{flex:3}}>{body}</p>
        <Button id={id} delPost={delPost}>Delete</Button>
    </div>
  )
}
