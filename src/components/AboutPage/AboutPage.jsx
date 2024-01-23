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
          On this app you are able to browse through top rated anime, see a brief description of them and determine if you want to add the show to the list.
          In this list you will be able to mark your shows as watched after completion and also the option to delete any anime you no longer wish to be on your list.
          Thank you for using AnimeUnited and may you cultivate the anime list of your dreams!!
        </p>
        <p>Thank you to my cohort for all the help through out the year. Thank you to my group work team(Chris Cantoni, J Read, Brock Nelson, Ben Rehmann)
           for all the outside knowledge and help throughout all our sessions. Thank you to our teacher Chris Black, for being able and willing to help when I have needed it and reached out. Thank you also to anyone that
           uses my web app for supporting my blossoming knowledge and experience.</p> 
       
        <ul>Technologies used:
          <li>Node, Express, React, Redux, Sagas, PostgresSQL, AnimeNewsNetork API, CSS, Passport</li>
        </ul>
      </div>
      <div>
      <img  className="aboutPic-one" src="https://c4.wallpaperflare.com/wallpaper/834/893/285/anime-naruto-itachi-uchiha-madara-uchiha-wallpaper-preview.jpg"/>
      </div>
    </div>
  );
}

export default AboutPage;
