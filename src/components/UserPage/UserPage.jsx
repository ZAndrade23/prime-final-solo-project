import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import './UserPage.css';
function UserPage() {
  
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2 id="welcomeUser">Welcome, {user.username}! Congratulations on joining the AnimeUnited family!</h2>
      {/* <img alt="" src="../documentation/images/pics/illustration-city-anime-painting-wallpaper-preview.jpg"/>
      <img alt="" src="../documentation/images/pics/naruto-anime-uzamaki-jiraiya-naruto-shippuden-hd-wallpaper-preview.jpg"/> */}
      {/* <img alt="" src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"/> */}
      <img className="userPic-one" alt="" src="https://c4.wallpaperflare.com/wallpaper/682/435/620/naruto-anime-uzumaki-naruto-jiraiya-naruto-shippuuden-hd-wallpaper-preview.jpg"/>
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
     
      
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
