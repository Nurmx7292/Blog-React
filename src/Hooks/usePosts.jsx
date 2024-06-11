import { useMemo } from 'react'

function usePosts(posts,sortValue,searchValue){
    const sortedSearchedPosts = useMemo(()=>{
        return posts.sort((a,b)=> a[sortValue].localeCompare(b[sortValue]))
        .filter(post=>post.title.toLowerCase().includes(searchValue.toLowerCase())||post.body.toLowerCase().includes(searchValue.toLowerCase()))
       },[sortValue,posts,searchValue])
    return sortedSearchedPosts
}
export const hey = 1;

export default usePosts