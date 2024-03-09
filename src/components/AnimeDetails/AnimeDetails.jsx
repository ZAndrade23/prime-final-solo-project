import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './AnimeDetails.css';
import Button from '@mui/material/Button';

function AnimeDetails() {
    const dispatch= useDispatch();
const details = useSelector(store => store.details);
console.log("details",details);
const list = useSelector(store => store.list);
const { animeId } = useParams();

useEffect(() => {
    dispatch({ type: 'FETCH_ANIME' });
    dispatch({type: 'FETCH_ANIME_ID', payload: animeId});
  }, [animeId]);

const history =useHistory();

  const handleClick = () => {
    dispatch({type: 'CLEAR_DETAILS'});
    history.push('/info');
  }
  const clickHandler = () => {
    dispatch({type: 'ADD_LIST_ITEM', payload: { user_id: list.user_id , report_item_id: details.report_item_id  } });
    history.push(`/list`);
  }
  return (
    <div className="container">
        <main>
            <h1 className="h1-detailTitle">Anime Details</h1>
            <div>
                    <Button id="returnBtn" variant="contained" onClick={handleClick}> Return To Anime Page</Button>
                    <Paper elevation={20} id="anime-details">
                        <table id='animeDetails' key={details.report_item_id} >
                            <thead>
                                <tr>
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Rating</th>
                                    <th>Weighted</th>
                                    <th>Add To List </th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                    <td>{details.report_item_anime}</td>
                                    <td>{details.report_item_nb_votes}</td>
                                    <td>{details.report_item_nb_seen}</td>
                                    <td>{details.report_item_straight_average}</td>
                                    <td>{details.report_item_weighted_average}</td>
                                    <td> <Button id="addBtn" variant="contained" onClick={clickHandler}>Add</Button></td>
                                    </tr>
                                </tbody>
                        </table>
                        </Paper>
            </div>
        <div className="content">
                    <img className="animeImage"  src={details.animeImage}/>
                <div className="detailsContent">
                    <h1 className="h1-details">Genres:</h1>
            <h2 className="h2-details">{details.animeGenres}</h2>
            <h1 className="h1-details">Themes:</h1>
            <h2 className="h2-details"> {details.animeThemes}</h2>
            <h1 className="h1-details">Plot Summary:</h1>
            <h2 className="h2-details"> {details.animePlotSummary}</h2>
            <h1 className="h1-details">Running time:</h1>
            <h2 className="h2-details"> {details.animeRunTime} minutes</h2>
            <h1 className="h1-details">Episode count:</h1>
            <h2 className="h2-details"> {details.animeEpisodes}</h2>
            </div>
        </div>
        </main>
    </div>
    )
 }
;

export default AnimeDetails;