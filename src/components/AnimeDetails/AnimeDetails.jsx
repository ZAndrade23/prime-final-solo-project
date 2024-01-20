import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import './AnimeDetails.css';

function AnimeDetails() {
    const dispatch= useDispatch();
const details = useSelector(store => store.details);
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
            <h1>Anime Details</h1>
            <div>
                {/* <h2>{animeId}</h2> */}
                
                    <button onClick={handleClick}> Return To Anime Page</button>
                    <Paper elevation={20} id="anime-details">
                        <table id='animeDetails' key={details.report_item_id} >
                            <thead>
                                <tr>
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Rating</th>
                                    <th>Weighted</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                    <td>{details.report_item_anime}</td>
                                    <td>{details.report_item_nb_votes}</td>
                                    <td>{details.report_item_nb_seen}</td>
                                    <td>{details.report_item_straight_average}</td>
                                    <td>{details.report_item_weighted_average}</td>
                                    </tr>
                                </tbody>
                        </table>
                        </Paper>
                <button onClick={clickHandler}>Add To List</button>
               
            </div>
            <img  className="detailsPic-one"alt="" src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"/>
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