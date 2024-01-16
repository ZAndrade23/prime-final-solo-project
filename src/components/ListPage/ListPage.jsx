import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
// import AnimeListItem from '../AnimeListItem/AnimeListItem';
// import ListPage from '../ListPage/ListPage.jsx';
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
                                    <td><button onClick={()=>removeAnime(list.id)}>DELETE ANIME</button></td>
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