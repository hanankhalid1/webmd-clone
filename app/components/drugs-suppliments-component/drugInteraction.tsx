import React from "react";

const DrugsInteractionChecker: React.FC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center mb-[180px] md:mb-[100px] lg:mb-[100px] sm:mb-[100px]"
      style={{
        backgroundImage: "url('/drugs-background.jpg')",
        height: "200px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-[3.3125rem] font-bold leading-normal mt-2 capitalize text-center">
          Drugs Interaction Checker
        </h1>
      </div>
      <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="bg-[#d2d9ff] p-4 rounded-lg flex items-center space-x-2 shadow-lg">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Enter two or more drugs"
              className="w-full px-4 py-2 md:py-4 pr-12 border border-gray-300 focus:border-gray-400 focus:outline-none rounded-lg"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
              />
            </svg>
          </div>
        </div>
        <p className="text-xs text-center mt-4">
          DISCLAIMER: The information contained herein should NOT be used as a
          substitute for the advice of an appropriately qualified and licensed
          physician or other health care provider.{" "}
          <a href="#" className="text-blue-500">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default DrugsInteractionChecker;
