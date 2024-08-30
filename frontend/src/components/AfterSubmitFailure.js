import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AfterSubmitFailure = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className="border border-black p-10 text-center m-2">
        <h2>Application Submission Failed. Please try again.</h2>
        <div className="mt-4">
          <button 
            onClick={() => navigate("/form")} 
            className='bg-gray-500 p-3 text-white rounded'
          >
            Try Again
          </button>
        </div>
        <div className="mt-2">
          <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default AfterSubmitFailure;
