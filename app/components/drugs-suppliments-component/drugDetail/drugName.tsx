// components/DrugSearch.tsx
"use client"
import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

const DrugName: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <div className=" rounded-md shadow-md bg-white">
        <div className="flex">
          <button className="w-[25%] py-3 text-center f text-[#1b1b1b] bg-[#edf0ff] rounded-tl-md font-bold rounded-md">Search Drugs</button>
          <button className="w-[25%] py-3 text-center font-bold rounded-md text-[#1b1b1b] bg-white hover:bg-[#edf0ff]">Related Drugs</button>
          <div className="w-[46%]"></div>
        </div>
        <div className="p-6 bg-[#edf0ff]">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter drug name"
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-md focus:outline-none"
            />
            <div className="absolute top-0 right-0 mt-3 mr-3 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 8.75h.008v.008h-.008v-.008zM21 21l-4.35-4.35a8.25 8.25 0 111.414-1.414L21 21z" />
              </svg>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <div className="flex flex-wrap mt-2 items-center space-x-2">
              <span className="text-gray-500">Common Searches</span>
              <span className="text-gray-300">|</span>
              {['Adderall', 'Celexa', 'Cipro', 'Cymbalta', 'Flexeril', 'Hydrocodone', 'Prilosec', 'Prozac'].map((drug, index) => (
                <React.Fragment key={drug}>
                  <a href="#" className="text-blue-600 hover:underline">
                    {drug}
                  </a>
                  {index < 7 && <span className="text-gray-300">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button
              className="flex items-center px-5 py-2 text-sm text-blue-600 bg-white border border-gray-300 rounded-md hover:bg-blue-600 hover:text-white transition-colors"
              onClick={toggleShowMore}
            >
              Show More
              <span className="ml-2">
                {showMore ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
          </div>
          {showMore && (
            <div className="mt-4 space-y-2">
              {['Lisinopril', 'Metformin', 'Omeprazole', 'Gabapentin', 'Amoxicillin'].map((drug) => (
                <a key={drug} href="#" className="block text-blue-600 hover:underline">
                  {drug}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrugName;
