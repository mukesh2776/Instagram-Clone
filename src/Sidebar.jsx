import React from 'react'
import { useNavigate } from 'react-router'

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
        <div className='d-flex flex-column gap-3'>
            <img className='logo-text' src="https://instagram-backend-8y7y.onrender.com/assets/Instagram_text.png"/>
            <div><i className="bi bi-house-door-fill"></i>Home</div>
            <div><i className="bi bi-search"></i>Search</div>
            <div><i className="bi bi-compass"></i>Explore</div>
            <div><i className="bi bi-play-btn"></i>Reels</div>
            <div><i className="bi bi-chat-dots-fill"></i>Messages</div>
            <div><i className="bi bi-heart"></i>Notifications</div>
            <div><i className="bi bi-plus-square"></i>Create</div>
            <div><i className="bi bi-person-circle" onClick={()=>{
              navigate('/profile')
            }}></i>Profile</div>
        </div>
        <div  className='position-fixed bottom-0 mb-3 d-flex flex-column gap-3'>
          <div><i className="bi bi-threads"></i>Threads</div>
          <div><i className="bi bi-list"></i>More</div>
        </div>
    </div>
    
  )
}

export default Sidebar
