import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Signup from './pages/signup'
import SearchByPostal from './pages/SearchByPostal'
import SearchByCity from './pages/SearchByCity'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/search/by-city/:city' element={<SearchByCity />}/>
      <Route path='/search/by-postal/:postal_code' element={<SearchByPostal />}/>
    </Routes>
  )
}

export default App