import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect } from 'react';
// import AnimeListItem from '../AnimeListItem/AnimeListItem';
// import ListPage from '../ListPage/ListPage.jsx';
// function toggleStatus(id)  {
//     console.log('Status to change', id);
//     axios.put(`api/list/${id}`, {
//     }).then((response) =>{
//         console.log(`status updated`);
//     }).catch((error) => {
//         console.log(error);
//         alert(`could not update the status of ${id}`)
//     })
//   }
function listPage() {
    const details = useSelector(store => store.details);
    const list = useSelector(store => store.list);
    const dispatch= useDispatch();
    useEffect(() => {
        dispatch({ type: 'FETCH_LIST' });
      }, []);

      const removeAnime = (id) => {
        dispatch({type: 'REMOVE_ANIME', payload: id});
      }

      const toggleStatus = (id) => {
        dispatch({type: 'UPDATE_STATUS', payload: id});
        
      }
      
    return (
        <div>
            {JSON.stringify(list)}
            
            <main>
                {/* <ListPage> */}
                
            <table id='animeList'  > 
            {/* {key={list.report_item_id}}   */}
                            <thead>
                                <tr>
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Raiting</th>
                                    <th>Weighted</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                                <tbody>
                                    {list.map((list) =>{
                                        return(
                                            <tr>
                                    <td>{list.report_item_anime}</td>
                                    <td>{list.report_item_nb_votes}</td>
                                    <td>{list.report_item_nb_seen}</td>
                                    <td>{list.report_item_straight_average}</td>
                                    <td>{list.report_item_weighted_average}</td>
                                    {/* <td>{list.user_id}</td> */}
                                    <td>{list.status}</td>
                                    <td><button onClick={()=>removeAnime(list.id)}>DELETE ANIME</button></td>
                                    <td><button onClick={()=>toggleStatus(list.id)} >SWITCH STATUS</button></td>
                                            </tr>
                                        )
                                    }
                                    )}
                                    
                                </tbody>
                        </table>
                        
                        {/* <AnimeListItem>
                        </AnimeListItem> */}
                        {/* </ListPage> */}
            </main>
        </div>
        
    )
}

export default listPage;