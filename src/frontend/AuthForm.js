import React, { useState } from 'react';
import { login, signup } from '../backend/AuthService';
import { useUser } from '../backend/UserContext';

const AuthForm = ({ formType }) => {
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({ username: '', password: '' });

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
    } catch (error) {
      console.error('Authentication error:', error);
      // Handle login or signup errors
    }
  };

  return (
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
      <button type="submit">
        {formType === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
