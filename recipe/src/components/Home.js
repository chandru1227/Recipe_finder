import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-500">
      <div className="absolute top-0 right-0 p-4">
        <Link to="/login" className="text-black font-bold mr-4 italic">
          Login
        </Link>
        <Link to="/signup" className="text-black font-bold mr-4 italic">
          Sign Up
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black mb-4 italic">
          Culinary Compass
        </h1>
        <h4 className="text-4xl font-bold text-black mb-4">
          Spice up your life with the vibrant flavors of South Indian cuisine!
        </h4>
        <p className="text-lg text-black mb-8">
          Elevate your home cooking with our curated recipes!
        </p>
        <Link to="/Login">
          <button className="bg-white text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200">
            Explore the Recipes! &rarr;
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
