import "./SearchResults.css";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


// function SearchResult() {
    
//     const anime= useSelector(store => store.anime);
   
// }


export const SearchResult = ({ result, animeId }) => {
    const  history = useHistory();
    const  dispatch = useDispatch();
    const handleClick = (anime) => () => {
       
        console.log(anime);
      // Dispatch to redux and navigate to the details page and then select elected movie not all movies
      dispatch({type: 'SET_DETAILS', payload: anime});  
      history.push(`/details/${animeId}`);
      };
  return (
    <div
      className="search-result"
      onClick={handleClick(result)}
    //   onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
export default SearchResult;