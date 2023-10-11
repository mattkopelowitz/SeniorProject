import React, { useState } from 'react';

function NavigationBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Construct the search results URL and navigate
    const searchUrl = `/results?searchTerm=${searchTerm}`;
    
    // Manually navigate to the results page
    window.location.href = searchUrl;
  };

  return (
    <div className="navbar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default NavigationBar;
