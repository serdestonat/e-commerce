import { useState } from "react";
import axios from "axios";
import Image from "next/image";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for your search functionality
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products?q=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    }
  };

  return (
    <div className="searchbar">
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>
        <Image
          src="/search-icon.png"
          alt="search"
          height={25}
          width={25}
        ></Image>
      </button>

      {results.length > 0 && (
        <ul>
          {results.map((result) => (
            <li key={result.id}>{result.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
