


import React from 'react';

const ADHDSupport: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg  flex-1">
      <div className="flex flex-col items-center">
        <img src="/images/medicial-conditions-pageimages/adhdsupport.png" alt="Social" className="mb-4" />
        <h2 className="text-xl font-bold mb-2">ADHD Support</h2>
        <p className="mb-4 text-center">
          Find your WebMD Facebook community to learn, share and connect.
        </p>
        <p className="mb-4 text-center">
          Join a community for adults living with ADHD and for parents of a child with ADHD. You'll find support, practical tips and the latest news.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Join Group on Facebook
        </button>
      </div>
    </div>
  );
}

export default ADHDSupport;
