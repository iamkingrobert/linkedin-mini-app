import CreateIcon from '@mui/icons-material/Create';
import React, { useEffect, useState } from 'react'
import './Feed.css'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BusinessCenterIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase/compat/app';
import { db } from './firebase';



function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy("timestamp", "desc").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    ))

  }, [])
// Preventing Auto Reload App On Submit
  const sendPost = e => {
    e.preventDefault();

    
    db.collection('posts').add({
      name: "King Robert",
      description: "Junior Frontend Software Developer",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className='feed'>
    <div className='feed__inputContainer'>
    <div className='feed__input'>
    <CreateIcon/>
    <form>
        <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
        <button onClick={sendPost} type='submit'>Send</button>
    </form>
    </div>
    {/* Input Option Components */}
    <div className='feed__inputOptions'>
      <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
      <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
      <InputOption Icon={BusinessCenterIcon} title="Job" color="#C0CBCD"/>
      <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
    </div>
    </div>
    {/* Post Component */}
    {posts.map(({id, data: {name, description, message, photoUrl}}) => (
      <Post key={id}
        name={name}
        description={description}
        message={message}
        photoUrl={photoUrl}
      /> 
    ))}
    </div>
  )
}

export default Feed