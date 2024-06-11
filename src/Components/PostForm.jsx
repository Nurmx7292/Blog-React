import React, { useRef } from 'react'

export const PostForm = ({onSubmit}) => {
  let title = useRef()
  let body = useRef()
  function onAdd(e){
     e.preventDefault()
    onSubmit({title:title.current.value,body:body.current.value,id:Date.now()})
    title.current.value = "";
    body.current.value = "";
  }
  return (
    <form className='post-form' onSubmit={(e)=>onAdd(e)}>
      <input type="text" ref={title} placeholder='Title' required/>
      <input type="text" ref={body} placeholder='Body' required/>
      <button type='submit'>Add post</button>
    </form>
  )
}