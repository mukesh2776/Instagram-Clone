import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Profile() {
    const [profile,setProfile] = useState(null);
    const [followers,setFollowers] = useState([]);
    const [unfollowed,setUnFollowed] = useState(0);
    useEffect(()=>{
      axios.get('http://localhost:3000/profile').
      then(data=>{setProfile(data.data); console.log(data)}).
      catch((err)=> console.log(err))

      axios.get('http://localhost:3000/followers').
      then(data=> setFollowers(data.data)).
      catch((err)=> console.log(err))
    },[unfollowed])
    function HandleOnChange(e){
        setProfile(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const HandleUpdate=async()=>{
        axios.put("http://localhost:3000/profile",profile).
        then(console.log("updated")).
        catch((err)=> console.log(err))
    }
    const handlefollow=async(id)=>{
        axios.delete(`http://localhost:3000/followers/${id}`).
        then( setUnFollowed(!unfollowed)).
        then(alert("Unfollowed")).catch(err=>console.log(err))
       
    }
  return (
    <div className='m-5'>
        {profile? (
            <div>
                <img src={profile.userProfile} alt="userprofile" className='rounded-circle m-5 profile'/>
                <h5>{profile.username}</h5> 
                <input type="text" 
                value={profile.username}
                name='username'
                className='form-control my-4'
                onChange={HandleOnChange} />

                <input type="text"
                name='userProfile'
                value={profile.userProfile}
                className='form-control'
                onChange={HandleOnChange}/>

                <button className='btn btn-primary my-4' onClick={HandleUpdate}>Update</button>
            </div>
            
              
        ):(
            <div>Loading...</div>
        )}
        {followers.length>0?(
            followers.map(follower =>(
                <div key={follower.id} className='d-flex my-2'>
                    {follower.username}
                     <button className='btn btn-secondary ms-auto' onClick={()=>{handlefollow(follower.id)}}>unfollow</button>
                </div>
                
                
            ))
        ):(
            <div>Followers Loading...</div>
        )}
    </div>
  );

}

export default Profile