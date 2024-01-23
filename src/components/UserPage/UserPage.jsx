import React , {useState} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import './UserPage.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';
import { Link } from 'react-router-dom';
function UserPage() {
  const [results, setResults] = useState([]);
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
     
      <h2 id="welcomeUser">Welcome, {user.username}! Congratulations on joining the AnimeUnited family!</h2>
      {/* <img alt="" src="../documentation/images/pics/illustration-city-anime-painting-wallpaper-preview.jpg"/>
      <img alt="" src="../documentation/images/pics/naruto-anime-uzamaki-jiraiya-naruto-shippuden-hd-wallpaper-preview.jpg"/> */}
      {/* <img alt="" src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"/> */}
      {/* <img className="userPic-one" alt="" src="https://c4.wallpaperflare.com/wallpaper/682/435/620/naruto-anime-uzumaki-naruto-jiraiya-naruto-shippuuden-hd-wallpaper-preview.jpg"/> */}
      {/* <p>Your ID is: {user.id}</p> */}
      {/* <LogOutButton className="btn" /> */}
      <br/><br/><br/><br/><br/><br/><br/>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <h2 id="allAnime-link">Look up an anime you're curious about or
      <Link to="/info" >
      
      
        <a href="/info"> click here </a> 
      
      </Link>
      to explore...
      </h2>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
