import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Stories() {
  const navigate=useNavigate();
  let tot=0;
  const [Stories,setStories] = useState([]);
  useEffect(()=>{
        fetch('http://localhost:3000/stories').
        then((data)=> data.json()).
        then((data)=> setStories(data)).
        catch((err)=> console.log(err))
     })
 
  
  return (
    <div className='story d-flex'>
      <div className='d-none'>
          {tot=Stories.length}
        </div>
      {Stories.length>0?(
        Stories.map((story)=>(
          <div key={story.id} className='mx-1' onClick={()=>{
            navigate(`story/${story.id}/${tot}`)

          }}>
            <div className='gradient-border'>
                 <img src={story.userProfile} alt="" className='story-dp rounded-circle' />
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{story.username}</p>
          </div>
        ))
      ) :(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Stories