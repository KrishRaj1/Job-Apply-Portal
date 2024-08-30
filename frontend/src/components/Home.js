import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='text-center mb-4'>Home</div>
      <button 
        onClick={handleClick} 
        className='bg-gray-500 p-3 text-white rounded'
      >
        Enter your details
      </button>
    </div>
  );
};

export default Home