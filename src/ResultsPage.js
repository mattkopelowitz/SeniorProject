import React, { useEffect, useState } from 'react';

function ResultsPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const searchTerm = searchParams.get('searchTerm');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch and set the search results based on the searchTerm
    if (searchTerm) {
      fetch(`/api/search?term=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setResults(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}":</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result._id}>{result.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsPage;
