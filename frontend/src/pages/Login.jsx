import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import Navigation from '../components/Navigation';

const Login = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const [loading, setLoading] = useState(false);

  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:5555/auth/login', {
        username: loginUsername,
        password: loginPassword,
      });

      console.log('Login response:', response.data);


      // if there was ever an error for logging in, it will clear up now that it worked
      setLoginError('');
    } catch (error) {
      console.error('Login failed:', error);
      setLoginError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (!signupEmail.endsWith('@ufl.edu')) {
        setSignupError('Invalid email. Please use a valid "@ufl.edu" email address.');
        setLoading(false);
        return;
      }
      const response = await axios.post('http://localhost:5555/auth/register', {
        username: signupUsername,
        password: signupPassword,
        email: signupEmail,
      });

      console.log('Registration response:', response.data);
      setSignupError('');
    } catch (error) {
      console.error('Registration failed:', error);

      setSignupError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-blue-900">
      <div className="flex justify-between items-center">
        <Navigation />
      </div>
      <div className="my-4 flex justify-center items-center flex-col">
        {/*Below is the Log in form*/}
        <form onSubmit={handleLogin} className="flex flex-col items-center">
          <label>
            Username:
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              className="border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              className="border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white"
            />
          </label>
          <button
            type="submit"
            className="bg-white border-2 border-orange-950 rounded-3xl hover:bg-blue-300 hover:text-orange-600 hover:border-orange-600"
          >
            {loading ? <Spinner /> : 'Log In'}
          </button>

          {loginError && <p className="text-red-500 mt-2">{loginError}</p>}
        </form>

        {/* Below is the Signup Form */}
        <form onSubmit={handleSignup} className="flex flex-col items-center mt-4">
          <label>
            Username:
            <input
              type="text"
              value={signupUsername}
              onChange={(e) => setSignupUsername(e.target.value)}
              className="border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              className="border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              className="border-2 border-orange-600 bg-blue-300 text-black rounded-2xl px-2 mr-2 w-96 hover:bg-blue-400 hover:border-white"
            />
          </label>
          <button
            type="submit"
            className="bg-white border-2 border-orange-950 rounded-3xl hover:bg-blue-300 hover:text-orange-600 hover:border-orange-600"
          >
            {loading ? <Spinner /> : 'Sign Up'}
          </button>

          {signupError && <p className="text-red-500 mt-2">{signupError}</p>}
        </form>
      </div>
    </div>
  );
}

export default Login;