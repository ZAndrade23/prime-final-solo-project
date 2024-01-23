import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import SearchBar from '../SearchBar/SearchBar';
import SearchResultsList from '../SearchResultsList/SearchResultsList';


import { useHistory } from 'react-router-dom';
function listPage(props) {
    const [results, setResults] = useState([]);
    const details = useSelector(store => store.details);
    const list = useSelector(store => store.list);
    const dispatch= useDispatch();
    const history= useHistory();
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
        
        
        
        <div className="container">
             {/* <img className="listPic-two" src="https://c4.wallpaperflare.com/wallpaper/705/826/351/digital-digital-art-artwork-illustration-ricodz-hd-wallpaper-preview.jpg"/> */}
            <h1 className="h1-listTitle">AnimeUnited List</h1>
            <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
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
                                    <th>Rating</th>
                                    <th>Weighted</th>
                                    <th>Status</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                                <tbody>
                                    {list.map((list) =>{
                                        return(
                                            <tr >
                                    <td>{list.report_item_anime}</td>
                                    <td>{list.report_item_nb_votes}</td>
                                    <td>{list.report_item_nb_seen}</td>
                                    <td >{list.report_item_straight_average}</td>
                                    <td>{list.report_item_weighted_average}</td> 
                                    {/* <td>{list.user_id}</td> */}
                                    <td>{list.status}</td>
                                    <td><Button variant="contained" id='btn1'onClick={()=>toggleStatus(list.id)} >SWITCH STATUS</Button></td>
                                    <td><Button variant="contained" startIcon={<DeleteIcon />} id='btn2'onClick={()=>removeAnime(list.id)}>DELETE ANIME</Button></td>
                                    
                                            </tr>
                                        )
                                    }
                                    )}
                                    
                                </tbody>
                        </table>
                        
                        
            </main>
        </Paper>
        <img className="listPic-one" src="https://c4.wallpaperflare.com/wallpaper/803/347/759/anime-natural-light-landscape-forest-studio-ghibli-hd-wallpaper-preview.jpg"/>
        </div>
        
    )
}


export default listPage;