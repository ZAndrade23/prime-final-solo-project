import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './InfoPage.css';
import { useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history= useHistory();
  const dispatch = useDispatch();
  const anime= useSelector(store => store.anime);
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIME' });
  },[]);
  const handleClick = (anime) => () => {
    console.log(anime);
  // Dispatch to redux and navigate to the details page and then select elected movie not all movies
  dispatch({type: 'SET_DETAILS', payload: anime});  
  history.push(`/details/${anime.report_item_id}`);
  };
  return (
    <div className="container">
      {/* <p>Info Page</p> */}
      <h1>Top Rated Anime</h1>
      <Paper elevation={20} id="anime-display">
      {anime.map(anime => {
        return (
        <table  id='animeItems' onClick={handleClick(anime)} key = {anime.report_item_id}>
          <thead>
            <tr>
              {/* <th>Rank</th> */}
              <th>Anime</th>
              <th>Votes</th>
              <th>Seen</th>
              <th>Rating</th>
              <th>Weighted Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{anime.report_item_anime}</td>
              <td>{anime.report_item_nb_votes}</td>
              <td>{anime.report_item_nb_seen}</td>
              <td>{anime.report_item_straight_average}</td>
              <td>{anime.report_item_weighted_average}</td>
            </tr>
          </tbody>
          </table>
        // <h3>{anime.report_item_anime}</h3>
        // {/* <h3>{anime.report_item_anime_href}</h3> */}
        // <h3>{anime.report_item_nb_votes}</h3>
        // <h3>{anime.report_item_nb_seen}</h3>
        // <h3>{anime.report_item_straight_average}</h3>
        // <h3>{anime.report_item_weighted_average}</h3>
        // </div>
        )
      })}
      </Paper>
    </div>
  );
}

export default InfoPage;
