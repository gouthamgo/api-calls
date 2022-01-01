import axios from "axios";
import React,{useState,useEffect} from "react";



function PostForm() {

const[userId,setUserId]= useState('');
const[title,setTitle]=useState('');
const[body,setBody]=useState('');

useEffect(() => console.log(userId), [userId]);
useEffect(() => console.log(title), [title]);

useEffect(() => console.log(body), [body]);


const handleSubmit= (evt) =>{
    evt.preventDefault();
    console.log(evt.target);
    axios.post("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response))
}


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label>UserId</label>
                    <input
                     type='text'
                     name='userId'
                     value={userId}
                     onChange={e => setUserId(e.target.value)}
                    
                    
                    ></input>
                </div>

                <div>
                <label>Title</label>
                    <input
                     type='text'
                     name='userId'
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                    
                    
                    ></input>
                </div>

                <div>
                <label>Body</label>
                    <input
                     type='text'
                     name='userId'
                     value={body}
                     onChange={e => setBody(e.target.value)}
                    
                    
                    ></input>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PostForm
