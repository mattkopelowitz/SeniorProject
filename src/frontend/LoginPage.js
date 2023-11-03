import React from 'react';
import AuthForm from './AuthForm';
import logo from '../files/logo.png';

const LoginPage = () => {

    const handleHomeClick = () => {
        // Navigate to the "/search" route when the signup button is clicked
        window.location.href = '/';
    };
  return (
    <div className='container'>
        <header className = "choice">
            <button className="beginningpage-button" onClick={handleHomeClick}>Back To Home</button>
        </header>
      <img src={logo} alt="logo"/>
      <h2 class='title'>Login Page</h2>
      <AuthForm formType="login" />
    </div>
  );
};

export default LoginPage;
