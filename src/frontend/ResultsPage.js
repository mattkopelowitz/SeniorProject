import React, { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar';
import logo from '../files/logo.png';

function ResultsPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get('searchTerm');
  const [results, setResults] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 }); // Default price range

  useEffect(() => {
    // Fetch and set the search results based on the searchTerm and priceRange
    if (searchTerm) {
      fetch(`/api/search?term=${searchTerm}&minPrice=${priceRange.min}&maxPrice=${priceRange.max}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [searchTerm, priceRange]);

  // Function to handle changes in the price range slider
  const handlePriceRangeChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: parseFloat(value), // Ensure the values are numbers
    });
  };

  const handleGoHome = () => {
    // Navigate to the "/search" route when the signup button is clicked
    window.location.href = '/search';
  };

  let logoStyle = {position: 'absolute', top: '-50px'};

  return (
    <div class="container">
      <img style={logoStyle} src={logo} alt="logo"/>
      <NavigationBar/>
      <h2>Search Results for "{searchTerm}":</h2>
      
      {/* Add a price range slider */}
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <input
          type="range"
          id="minPrice"
          name="min"
          min="0"
          max="100"
          step="1"
          value={priceRange.min}
          onChange={handlePriceRangeChange}
        />
        <span>{priceRange.min}</span>
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <input
          type="range"
          id="maxPrice"
          name="max"
          min="0"
          max="100"
          step="1"
          value={priceRange.max}
          onChange={handlePriceRangeChange}
        />
        <span>{priceRange.max}</span>
      </div>
      
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result._id}>{result.name}</li>
          ))}
        </ul>
      )}
      <div>
        <button onClick={handleGoHome}>Home</button>
      </div>
    </div>
  );
}

export default ResultsPage;
