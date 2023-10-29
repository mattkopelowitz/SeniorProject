import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import logo from '../files/logo.png';

import './App.css';

function SearchPage() {

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

  let logoStyle = {width: '200px', display: 'flex', margin: '0 20% 0 0'};

  return (
    <div className="App">
      <header className="App-header">
        <div className="logoHeader">
      <img style={logoStyle} src={logo} alt="logo"/>
        {/* <h1>GatorAdvisor</h1> */}
       <NavigationBar/>
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

export default SearchPage;
