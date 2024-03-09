import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './InfoPage.css';
import { useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';

function InfoPage() {
  const [results, setResults] = useState([]);
  const history= useHistory();
  const dispatch = useDispatch();
  const anime= useSelector(store => store.anime);
  useEffect(() => {
    dispatch({ type: 'FETCH_ANIME' });
  },[]);
  const handleClick = (anime) => () => {
    console.log(anime);
  // Dispatch to redux and navigate to the details page and then select selected anime
  dispatch({type: 'SET_DETAILS', payload: anime});  
  history.push(`/details/${anime.report_item_id}`);
  };
  return (
    <div className="container">
      <h1 className="h1-topAnime">Top Rated Anime</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      <Paper elevation={20} id="anime-display">
        <table  id='animeItems'  key = {anime.report_item_id}>
          <thead>
            <tr>
              <th>Anime</th>
              <th>Votes</th>
              <th>Seen</th>
              <th>Rating</th>
              <th>Weighted Rating</th>
              <th></th>
            </tr>
          </thead>
            {anime.map(anime => { return(
              <tbody onClick={handleClick(anime)}>
               <tr>
              <td>{anime.report_item_anime}</td>
              <td>{anime.report_item_nb_votes}</td>
              <td>{anime.report_item_nb_seen}</td>
              <td>{anime.report_item_straight_average}</td>
              <td>{anime.report_item_weighted_average}</td>
              </tr>
            </tbody>
             )
            })}
          </table>
      </Paper>
      <img className="infoPic-two" src="https://c4.wallpaperflare.com/wallpaper/916/657/97/anime-your-name-hd-wallpaper-preview.jpg "/>
    </div>
  );
}

export default InfoPage;
