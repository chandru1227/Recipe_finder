import React, { useState, useEffect } from 'react';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Cuisine from './components/Cuisine';
import Andhra from './components/Andhra';
import Karnataka from './components/Karnataka';
import 'bootstrap/dist/css/bootstrap.min.css';
import TN from './components/TN';
import Kerala from './components/Kerala';
import Telangana from './components/Telangana';
import Udupi from './components/Udupi';
import Login from './components/Login';
import Signup from './components/Signup';
import AddRecipe from './components/AddRecipe';
import DishList from './components/DishList';
import Adminlog from './components/Adminlog';

function App() {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await fetch('http://localhost:9023/api/dishes');
      const data = await response.json();
      setDishes(data);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleAddDish = (newDish) => {
    setDishes(prevDishes => [...prevDishes, newDish]);
  };

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/Cuisine',
      element: <Cuisine />,
    },
    {
      path: '/Andhra',
      element: <Andhra />,
    },
    {
      path: '/Karnataka',
      element: <Karnataka />,
    },
    {
      path: '/TN',
      element: <TN />,
    },
    {
      path: '/Kerala',
      element: <Kerala />,
    },
    {
      path: '/Telangana',
      element: <Telangana />,
    },
    {
      path: '/Udupi',
      element: <Udupi />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Signup',
      element: <Signup />,
    },
    {
      path: '/AddRecipe',
      element: <AddRecipe onAdd={handleAddDish} />,
    },
    {
      path: '/DishList',
      element: <DishList dishes={dishes} />,
    },
    {
      path: '/Adminlog',
      element: <Adminlog/>,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
