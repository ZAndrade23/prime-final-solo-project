import { useDispatch, useSelector } from 'react-redux';
import React, {useState} from 'react';
import axios from 'axios';

function Search(){

    // const dispatch = useDispatch();
    let [searchTerm, setSearchTerm] = useState('');
    let [searchResults, setSearchResults] = useState([]);
  
    function sendSearch(e) {
        e.preventDefault();
        console.log(searchTerm);
        axios.get(`/api/details/${searchTerm}`)
        .then((response) => {
            console.log(response.data);
            setSearchResults(response.data);
            setSearchTerm("");
        }).catch((err) => {
            console.log('search error', err);
            alert('Something went wrong!');
        })
    }
    

    return( 
        <div>
<form>
                <input placeholder="Search Anime" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button onClick={sendSearch}>Click me to search</button>
            </form>
            <div className="searchDisplay">
                {searchResults.map(() => {
                    return (
                        <table>
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
                                    <td>{report_item_anime}</td>
                                    <td>{report_item_nb_votes}</td>
                                    <td>{report_item_nb_seen}</td>
                                    <td>{report_item_straight_average}</td>
                                    <td>{report_item_weighted_average}</td>
                                    </tr>
                                </tbody>
                        </table>
                           
                        
                        
                                
                             
                                    
                                
                        
               ) })}
            </div>
        </div>
    )}

    export default Search;