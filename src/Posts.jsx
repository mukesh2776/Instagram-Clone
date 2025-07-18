import React, { useEffect, useState } from 'react'

function Posts() {
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
            fetch('http://localhost:3000/posts').
            then((data)=>data.json()).
            then((data=> setPosts(data))).
            catch((err=>console.log(err)))
    },[])
   
  return (
    <div className='d-flex justify-content-center'>
        {posts.length>0?(
            <div>
                {posts.map((post)=> (
                  <div className='my-3' key={post.id}> 
                      <div className='d-flex'>
                          <img className='dp rounded-circle' src={post.userProfile} alt="Profile_Pic" />
                          <h5>{post.username}</h5>
                      </div>
                      <img className='image' src={post.imageUrl}  alt="" />
                      <div>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                      </div>
                      <div>
                          <b>{post.likes} Likes</b>
                      </div>
                       <p>{post.caption}</p>
                  </div>       
                ))}
            </div>
        ):
        (
            <div>Loading...</div>
        )
    }
    </div>
  )
}

export default Posts


//json-server --watch db.json --port 3000