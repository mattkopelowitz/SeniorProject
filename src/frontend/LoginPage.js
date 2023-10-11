import React from 'react';
import AuthForm from './AuthForm';

const LoginPage = () => {
  return (
    <div>
      <h2>Login Page</h2>
      <AuthForm formType="login" />
    </div>
  );
};

export default LoginPage;
