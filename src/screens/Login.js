import axios from 'axios';
import React, { useState } from 'react'

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Math.random().toString(36).slice(2, 17);
      document.cookie = `token=${token}; path=/`;
      setAuthenticated(true)
    } catch (error) {
      console.error(error);
    }
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