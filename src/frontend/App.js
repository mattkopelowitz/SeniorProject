import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ResultsPage from './ResultsPage';
import GatorAdvisor from './BeginningPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GatorAdvisor/>} />
        <Route path = "/search" element ={<SearchPage/>}/>
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
