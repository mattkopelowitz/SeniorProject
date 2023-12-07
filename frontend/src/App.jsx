import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Search from './pages/Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/loginregister' element={<Login />}/>
      <Route path='/search' element={<Search />}/>
    </Routes>
  )
}

export default App