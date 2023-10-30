import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../backend/AuthService';
import { useUser } from '../backend/UserContext';

const AuthForm = ({ formType }) => {
  const { dispatch } = useUser();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate(); // Get the navigate function
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE_URL = 'http://localhost:3001'; // Set the base URL for your backend

      if (formType === 'login') {
        const { user, token } = await login(formData, API_BASE_URL); // Pass the base URL
        console.log(user)
        dispatch({ type: 'LOGIN', user, token });
        navigate('/search');
      } else {
        try {
          const { user, token } = await signup(formData, API_BASE_URL);
          dispatch({ type: 'LOGIN', user, token });
          navigate('/search');
        } catch (signupError) {
          console.error('Sign-up error:', signupError);
          if (signupError.response && signupError.response.status === 409) {
            setError('Username taken. Please choose a different username.');
          } else {
            setError('An error occurred during sign-up. Please try again.');
          }
        }
      }
      // Redirect or provide feedback as needed
      
    } catch (error) {
      setError('Invalid username or password. Please try again.');
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
      <button type="submit">
        {formType === 'login' ? 'Log In' : 'Sign Up'}
      </button>
    </form>
    {error && <p className="error-message">{error}</p>}
     </div>
  );
};

export default AuthForm;
