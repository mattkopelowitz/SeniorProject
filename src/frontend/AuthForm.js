import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../backend/AuthService';
import { useUser } from '../backend/UserContext';
import SearchPage from './SearchPage';

const AuthForm = ({ formType }) => {
  const handleSigninClick = () => {
    window.location.href = '/search';
  };
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Get the navigate function


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = 'http://localhost:3001'; // Set the base URL for your backend

      if (formType === 'login') {
        const { user, token } = await login(formData, API_BASE_URL); // Pass the base URL
        dispatch({ type: 'LOGIN', user, token });
      } else {
        const { user, token } = await signup(formData, API_BASE_URL); // Pass the base URL
        dispatch({ type: 'LOGIN', user, token });
      }
      // Redirect or provide feedback as needed
      navigate('/search');
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle login or signup errors
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      {/* Additional fields for signup */}
      {formType === 'signup' && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      )}
      <button type="submit" onClick={handleSigninClick}>
        {formType === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
     </div>
  );
};

export default AuthForm;
