import React from 'react';
function GatorAdvisor() {
  const handleLoginClick = () => {
    // Navigate to the "/search" route when the login button is clicked
    window.location.href = '/search';
  };

  const handleSignupClick = () => {
    // Navigate to the "/search" route when the signup button is clicked
    window.location.href = '/search';
  };

  return (
    <div className="container">
      <h1 className="title">Gator Advisor</h1>
      <div className="choice">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <button className="signup-button" onClick={handleSignupClick}>Sign Up</button>
      </div>
    </div>
  );
}

export default GatorAdvisor;
