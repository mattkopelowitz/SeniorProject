import React from 'react';
import logo from '/src/assets/logo.png';

const Navigation = () => {
  return (
    <div className='flex justify-between items-center w-full'>
        <a href="/"><img src={logo} height="200" width = "200"/></a>
        <h1 className='text-center font-bold text-orange-300 text-7xl italic font-serif'>Gator Advisor</h1>
        <div className='flex gap-x-2'>
            <a href = "/search"><button href="/" className='bg-orange-300 hover:bg-orange-600 font-bold px-20 py-2 rounded'>Search</button></a>
            <a href = "/loginregister"><button href="/" className='bg-orange-300 hover:bg-orange-600 font-bold px-20 py-2 rounded'>Login/Register</button></a>
        </div>
    </div>
  )
}

export default Navigation