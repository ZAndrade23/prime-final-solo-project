import "./SearchResultsList.css";
import { SearchResult } from '../SearchResults/SearchResults';

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
    
      {results.map((result, id) => {
        return <SearchResult result={result.report_item_anime} key={id.report_item_id} animeId={result.report_item_id} />;
      })}
    </div>
  );
};

export default SearchResultsList;