import React from 'react';
import { useNavigate } from 'react-router-dom';

const AfterSubmitSucsses = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <div className="flex  items-center justify-center h-screen">
        <div className="border border-black p-10 m-2">
          <h2>Application Submitted Successfully!</h2>
          <button onClick={() => navigate("/")} className='bg-gray-500 p-3'>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AfterSubmitSucsses;
