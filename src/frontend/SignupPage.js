import React from 'react';
import AuthForm from './AuthForm';
import logo from '../files/logo.png';

const SignupPage = () => {
    const handleHomeClick = () => {
        // Navigate to the "/search" route when the signup button is clicked
        window.location.href = '/';
    };
  return (
    <div class="container">
        <header className = "choice">
            <button className="beginningpage-button" onClick={handleHomeClick}>Back To Home</button>
        </header>
        <img src={logo} alt="logo"/>
      <h2>Sign Up Page</h2>
      <AuthForm formType="signup" />
    </div>
  );
};

export default SignupPage;
