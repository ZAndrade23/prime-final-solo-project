import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './ListPage.css'
function listPage(props) {
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
        <Paper elevation={20} id="list-form">
            
            {/* {JSON.stringify(list)} */}
            
            <main>
                
                
            {/* </main> */}
            <table id='animeList' key={list.report_item_id} > 
              
                             <thead>
                                <tr >
                                    <th>Anime</th>
                                    <th>Votes</th>
                                    <th>Seen</th>
                                    <th>Raiting</th>
                                    <th>Weighted</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th></th>
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
                                    <td><button id='btn1'onClick={()=>toggleStatus(list.id)} >SWITCH STATUS</button></td>
                                    <td><button id='btn2'onClick={()=>removeAnime(list.id)}>DELETE ANIME</button></td>
                                    
                                            </tr>
                                        )
                                    }
                                    )}
                                    
                                </tbody>
                        </table>
                        
                        
            </main>
        </Paper>
        </div>
        
    )
}


export default listPage;