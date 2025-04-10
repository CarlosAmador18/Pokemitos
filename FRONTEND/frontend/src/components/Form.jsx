import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ACCESS_TOKEN,REFRESH_TOKEN} from'../constants';
import api from '../api';
import '../styles/Form.css';

function Form({route, method}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const name = method === 'login' ? 'Sign In' : 'Sign Up';

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await api.post(route, {username,password})
      if (method === 'login') {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        navigate('/');  } 
        else {
        navigate('/login');
      }
    } catch (error) {
      console.error(error); 
    }
}

return (
  <div classname = 'bg-gray-100 min-h-screen flex items-center justify-center' >
    <form onSubmit={handleSubmit} className='flex items-center flex-col h-dvh justify-center gap-5'>
      <h1 className=''>{name}</h1>
      <input 
        className='text-gray-200 rounded p-3 w-fit mb-4 focus:border-amber-700 border-amber-400'
        value={username}
        type='text'
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        required 
        />

        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
          className='text-gray-200 rounded p-3 w-fit mb-4 focus:border-amber-700 border-amber-400 focus:placeholder:text-fuchsia-600'
          />

        <button className='p-2 border-amber-300 rounded cursor-pointer'>{name}</button>

        {method === "login" ? (
          <a className='' href='/register'>Go to Register</a>
        ) : (
          <a className='' href='/login'>Go to Login</a>
        )
      }
    </form>
    </div>

    
)}

export default Form;