import React, { useState } from 'react';
import './App.css';

function App() {

  //handles when you select a category as true or false
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  //categories to specify the search with 
  const categories = [
    'Price Range',
    'Open Hours',
    'Business Type',
  ];

  //function that shows a pop-up when you select a category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowPopup(true);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>GatorAdvisor</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </header>
      <div className="categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index}>
               <button onClick={() => handleCategoryClick(category)}>{category}</button>
            </li>
          ))}
        </ul>
      </div>
      {showPopup && (
        <div className="popup">
          <h3>{selectedCategory} Options</h3>
          {/* Add options and selection logic for the selected category */}
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
