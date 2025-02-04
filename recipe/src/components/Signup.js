import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
  });
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUpChanges = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (signUpData.password.length < 5) {
        toast.error("Password must be at least 5 characters long");
        return;
      }

      console.log('Sending signup request:', signUpData);
      const res = await axios.post("http://localhost:9023/signup", signUpData);
      console.log(res.data);
      toast.success("Account created successfully");

      // Set the signup success state to true
      setIsSignedUp(true);
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-yellow-500'>
      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6'>Sign Up</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='text-gray-600 font-semibold block mb-1'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={signUpData.email}
              onChange={handleSignUpChanges}
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
              value={signUpData.password}
              onChange={handleSignUpChanges}
              placeholder='Enter your password'
              required
              minLength={5}
              className='w-full h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600'
            />
          </div>
          <div className='text-center'>
            <button
              type='submit'
              className='bg-black text-white h-10 rounded-full w-full hover:bg-gray-800 transition duration-300'
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className='mt-4 flex items-center justify-center'>
          <span className='text-gray-600'>Already have an account? </span>
          <Link to="/login" className='text-purple-600 font-semibold underline'>Login</Link>
        </div>
        {isSignedUp && (
          <div className='mt-4 text-center'>
            <Link to="/cuisine" className='text-purple-600 font-semibold underline'>Go to Cuisine Page</Link>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
