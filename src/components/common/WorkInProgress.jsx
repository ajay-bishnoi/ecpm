import React, { useState, useEffect } from 'react';

function WorkInProgressPopup() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="fixed !z-[100] top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Work in Progress</h2>
            <p>This Page is currently under development.</p>
            <button 
              onClick={() => setShowPopup(false)} 
              className="px-4 py-2 mt-4 bg-gray-300 text-gray-700 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkInProgressPopup;
