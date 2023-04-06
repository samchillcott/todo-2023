import axios from 'axios';
import React, { useState } from 'react'

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post('/api/login', { email, password });

      // // Set cookie with unique identifier
      // document.cookie = `token=${response.data.token}; path=/`;

      // // Redirect to todos page
      // window.location.href = '/todos';
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