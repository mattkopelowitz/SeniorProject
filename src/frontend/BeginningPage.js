import React from 'react';
import logo from '../files/logo.png';
import AuthForm from "./AuthForm";
function GatorAdvisor() {
  const handleLoginClick = () => {
    // Navigate to the "/search" route when the login button is clicked
    window.location.href = '/login';
  };

  const handleSignupClick = () => {
    // Navigate to the "/search" route when the signup button is clicked
    window.location.href = '/signup';
  };

  return (
    <div className="container">
      <img src={logo} alt="logo"/>
      <h1 className="title">Gator Advisor</h1>
      <div className="choice">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
      </div>
      <AuthForm formType="/" />
    </div>
  );
}

export default GatorAdvisor;
