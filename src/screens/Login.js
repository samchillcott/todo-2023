import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a network delay of 1 second
    setTimeout(() => {
      // Mock response data
      const response = {
        status: 'success',
        data: {
          email,
        },
      };
      // Set cookie and redirect to home page if login is successful
      Cookies.set('user', { email });
      navigate('/');
    }, 1000);
  };

  return (
    <form onSubmit={ handleSubmit } className='login'>
      <input
        type="email"
        placeholder="Email"
        value={ email }
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        placeholder="Password"
        value={ password }
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login