import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
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
                {/* <h2>{animeId}</h2> */}
                
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
            {/* <img  Name="detailsPic-one"classalt="" src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"/> */}
        </main>
        
    </div>

//     <div>
// <main>
// <h1>Anime Details</h1>
  
//   <section className="Details">
    
//         <div  key={details.report_item_id} >
//             {details.map(detail=> (
//                 <div>
//           <h1>{animeId}</h1>
//           <h3>{detail.report_item_anime}</h3>
//           <h3>{detail.report_item_nb_votes}</h3>
//               <h3>{detail.report_item_nb_seen}</h3>
//               <h3>{detail.report_item_straight_average}</h3>
//               <h3>{detail.report_item_weighted_average}</h3>
//           {/* <img src={details.poster} alt={details.title}/>
//           <h5>{details.description}</h5> */}
//           </div>
//           ))}
//         </div>
        
      
//   </section>
// </main>
//     </div>

)
        }
;


export default AnimeDetails;