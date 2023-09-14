import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import GatorAdvisor from './BeginningPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GatorAdvisor/>} />
        <Route path = "/search" element ={<SearchPage/>}/>
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
