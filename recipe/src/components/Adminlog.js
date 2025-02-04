import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSignInChanges = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = signInData;

    if (email === 'admin@gmail.com' && password === 'admin') {
      toast.success('Login successful!');
      navigate('/AddRecipe'); 
    } else {
      toast.error('Invalid email or password!');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-yellow-500'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6'>Login</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='text-gray-600 font-semibold block mb-1'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={signInData.email}
              onChange={handleSignInChanges}
              placeholder='Enter your email'
              required
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div>
            <label htmlFor='password' className='text-gray-600 font-semibold block mb-1'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password'
              value={signInData.password}
              onChange={handleSignInChanges}
              required
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-black text-white h-10 rounded-full w-full hover:bg-gray-800 transition duration-300'
            >
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 flex flex-col items-center justify-center'>
          
          
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
