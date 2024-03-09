import "./SearchResults.css";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const SearchResult = ({ result, animeId }) => {
    const  history = useHistory();
    const  dispatch = useDispatch();
    const handleClick = (anime) => () => {
       
        console.log(anime);
      dispatch({type: 'SET_DETAILS', payload: anime});  
      history.push(`/details/${animeId}`);
      };
  return (
    <div
      className="search-result"
      onClick={handleClick(result)}
    >
      {result}
    </div>
  );
};
export default SearchResult;