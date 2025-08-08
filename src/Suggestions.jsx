import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestions() {
  const [profile,setProfile] = useState(null);
  const [Suggestions,setSuggestions]=useState([]);
  useEffect(()=>{
      fetch("https://instagram-backend-8y7y.onrender.com/profile").
      then(data=> data.json()).
      then(data=> setProfile(data)).
      catch(err=> console.log(err))
      fetch("https://instagram-backend-8y7y.onrender.com/suggestions").
      then(data=> data.json()).
      then(data=> setSuggestions(data)).
      catch(err=> console.log(err))
  },[])
   const handlefollow = async(id,username)=>{
    axios.post('https://instagram-backend-8y7y.onrender.com/followers',{"id":id,"username":username}).
    then(alert('followed')).
    catch(err=> console.log(err))
   }
  

  return (
    <div>
      <div className='m-4 w-85 suggestion'>
          {profile ?
          <div className='d-flex'>
            <img className='dp rounded-circle' src={`https://instagram-backend-8y7y.onrender.com/assets/${profile.userProfile}`}alt="Profile_Pic" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>switch</small>
          </div>:
          <p>Loading...</p>
          }
          <div className='d-flex'>
            <p>Suggested for you</p>
            <b className='ms-auto'>See All</b>
          </div>
          {Suggestions.length>0 ?(
            <div>
              {Suggestions.map((suggestion)=>(
                <div key={suggestion.id}>
                  <div className='d-flex'>
                    <img className='dp rounded-circle' src={`https://instagram-backend-8y7y.onrender.com/assets/${suggestion.userProfile} `} alt="" />
                    <h5>{suggestion.username}</h5>
                   <a className='ms-auto text-primary suggestion-follow' onClick={()=>{handlefollow(suggestion.id,suggestion.username)}}>Follow</a>
                  </div>
                </div>
              ))}
            </div>
          ):(
            <div>
              Loading...
            </div>
          )}

          
      </div>
     
      

    </div>
      
  )
}

export default Suggestions
