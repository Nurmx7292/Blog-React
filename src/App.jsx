import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { PostList } from './Components/PostList'
import { PostForm } from './Components/PostForm'
import axios from 'axios'
import { Modal } from './Components/UI/MyModal/Modal'
import usePosts from "./Hooks/usePosts"

function App() {
  const [posts,setPosts] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [sortValue,setSortValue] = useState("title");
  const [modalIsOpen,setModalIsOpen] = useState(false)
  const [searchValue,setSearchValue] = useState("");
  const sortedSearchedPosts = usePosts(posts,sortValue,searchValue)
  function addPost(post){
    setPosts(prev=>[...prev,post])
  }
  function delPost(id){
    console.log(2)
    setPosts(prev=>prev.filter(x=>x.id!=id))
  }
  async function fetchApi(){
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPosts(posts.data)
    setIsLoading(false)
  }
  useEffect(()=>{
    fetchApi()
  },[])

  return (
   <div className="app">
    <button onClick={()=>setModalIsOpen(true)} className='add-post-btn'>Add Task</button>
    {modalIsOpen ? (<Modal onClick={()=>setModalIsOpen(false)}><PostForm onSubmit={addPost}/></Modal> ) : ("") }
    <select className='select' onChange={(e)=>setSortValue(e.target.value)}>
      <option defaultValue disabled>Sort</option>
      <option value="title">Title</option>
      <option value="body">Body</option>
    </select>
    <input className='input' type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    {isLoading ? <h1>Loading...</h1> : (sortedSearchedPosts.length!=0 ? <PostList posts={sortedSearchedPosts} delPost={delPost}/> : <h1>No such post</h1>)}
   </div>
  )
}

export default App
