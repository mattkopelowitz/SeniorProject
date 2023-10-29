import React from 'react';
import AuthForm from './AuthForm';
import logo from '../files/logo.png';

const SignupPage = () => {
  return (
    <div class="container">
      <img src={logo} alt="logo"/>
      <h2>Sign Up Page</h2>
      <AuthForm formType="signup" />
    </div>
  );
};

export default SignupPage;
