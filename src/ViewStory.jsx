import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate} from 'react-router'

function ViewStory() {
  const { id,tot } = useParams();
  const [story, setStory] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/stories/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStory(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  if(id > tot || id<=0){
       navigate('/');
  }

  return (
    <div>
      {story ? (
        <div className='d-flex justify-content-center align-items-center'>
          <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i  className="bi bi-arrow-left-circle"></i></Link>
          < img src={story.imageUrl} alt="Image" className='vh-100' />
          <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle"></i></Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ViewStory
