import React from 'react';
import AuthForm from './AuthForm';
import logo from '../files/logo.png';

const LoginPage = () => {
  return (
    <div className='container'>
      <img src={logo} alt="logo"/>
      <h2 class='title'>Login Page</h2>
      <AuthForm formType="login" />
    </div>
  );
};

export default LoginPage;
