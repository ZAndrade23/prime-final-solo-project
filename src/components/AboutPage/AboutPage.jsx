import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="container">
      <div className="about">
        {/* <h1>This about page is for anyone to read!</h1> */}
        <p>AnimeUnited is a web app intended for the purpose of tracking anime you like, are interested in, or have been recommended.
          On this app you are able to browse through top rated anime, see a brief description of them and determine if you want to add the show to your list.
          In this list you will be able to keep track of shows you have or havent watched and also delete any anime you no longer wish to be on your list.
          Thank you for using AnimeUnited and may you cultivate the anime list of your dreams!!
        </p>
        <p>Thank you to the taaffeite cohort for all the help through out the year. Thank you to my group work team members
           for all the outside knowledge and help throughout all our group work sessions. Thank you to our teacher Chris Black, for being able and willing to help when I have needed it and reached out. Thank you also to anyone that
           uses my web app for supporting my blossoming knowledge and experience.</p> 
       
        <ul>Technologies used:
          <li>Node, Express, React, Redux, Sagas, PostgresSQL, AnimeNewsNetwork API, CSS, Passport, MUI</li>
        </ul>
      </div>
      <div>
      <img  className="aboutPic-one" src="https://c4.wallpaperflare.com/wallpaper/834/893/285/anime-naruto-itachi-uchiha-madara-uchiha-wallpaper-preview.jpg"/>
      </div>
    </div>
  );
}

export default AboutPage;
