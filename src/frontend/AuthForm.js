import React from 'react';

const AuthForm = ({ formType }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/search';
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* Additional fields for signup */}
      {formType === 'signup' && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{formType === 'login' ? 'Log In' : 'Sign Up'}</button>
    </form>
  );
};

export default AuthForm;
