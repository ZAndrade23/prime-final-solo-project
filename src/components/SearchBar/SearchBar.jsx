import React, {useState} from 'react';
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
     fetch('http://localhost:3000/api/anime')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((anime) => {
            console.log(anime);
          return (
            value &&
            anime &&
            anime.report_item_anime &&
            anime.report_item_anime.toLowerCase().includes(value)
          );
        });
        setResults(results);
        console.log(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;