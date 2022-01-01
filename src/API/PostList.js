import React,{useState} from "react";
import axios from 'axios';
import { useEffect } from "react/cjs/react.development";

function PostList() {


   const[post,setPost]=useState([]);

   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => setPost(response.data)
    // set the data to the api response data 
    )
},[])
    return (
        <div>
            <h1>List of Posts</h1>
            {post.map(post => <div key={post.id}>{post.body}</div>)}
        </div>
    )
}

export default PostList
