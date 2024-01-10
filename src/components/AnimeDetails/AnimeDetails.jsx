import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function AnimeDetails() {
    const dispatch= useDispatch();
const details = useSelector(store => store.details);
const { animeId } = useParams();

useEffect(() => {
    dispatch({ type: 'FETCH_ANIME' });
    dispatch({type: 'FETCH_ANIME_ID', payload: animeId});
  }, [animeId]);

  return (
    <div>
        <main>
            <h1>Anime Details</h1>
            <div>
                <h2>{animeId}</h2>
                
                    
                        <table key={details.report_item_id} >
                            <thead>
                                <tr>
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Raiting</th>
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
                    )
                
            </div>
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