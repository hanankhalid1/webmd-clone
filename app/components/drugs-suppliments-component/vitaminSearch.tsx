"use client";
import React, { useRef } from "react";

const VitaminsSearch: React.FC = () => {
  // Data for the component
  const pageData = {
    heading: "Vitamins & Supplements",
    description:
      "Your trusted source of information for Vitamins and Supplements",
    inputPlaceholder: "Enter vitamin name to search",
    backgroundImage: "/vitaminSearch.jpg", // Ensure this path is correct
    links: [
      { text: "Search Vitamins by Letter", href: "#" },
      { text: "Search Vitamins by Condition", href: "#" },
    ],
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  };

  // Reference for the letters container
  const lettersContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (lettersContainerRef.current) {
      lettersContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (lettersContainerRef.current) {
      lettersContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full bg-cover bg-center mb-32"
      style={{
        backgroundImage: `url('${pageData.backgroundImage}')`,
        height: "300px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-[3.3125rem] font-bold leading-normal mt-2 capitalize text-center">
          {pageData.heading}
        </h1>
        <p className="text-base sm:text-lg text-[#1b1b1b] mt-2 text-center">
          {pageData.description}
        </p>
      </div>
      <div
        className="absolute w-full flex justify-center"
        style={{ top: "100%" }}
      >
        <div className="bg-[#c1ebda] p-4 rounded-lg inline-block shadow-lg transform -translate-y-1/2 w-11/12 max-w-xl md:max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder={pageData.inputPlaceholder}
              className="w-full px-4 py-2 md:py-4 pr-10 border border-gray-300 focus:border-gray-400 focus:outline-none"
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
                d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="mt-4 flex justify-between items-center space-x-4">
            <a href="#" className="text-[#1b1b1b] text-sm md:text-base">
              {pageData.links[0].text}
            </a>
            <a
              href="#"
              className="text-blue-700 text-sm md:text-base hover:text-blue-500"
            >
              {pageData.links[1].text}
            </a>
          </div>
          <div className="relative flex items-center w-full mt-2">
            <button
              onClick={scrollLeft}
              className="p-2 text-blue-700 hover:text-blue-500"
            >
              &lt;
            </button>
            <div
              className="flex overflow-hidden mx-2"
              ref={lettersContainerRef}
              style={{ scrollBehavior: "smooth", width: "calc(100% - 4rem)" }} // Adjust width to fit container
            >
              {pageData.letters.map((letter) => (
                <a
                  key={letter}
                  href="#"
                  className="text-black bg-white text-sm md:text-base hover:text-blue-500 mx-1 py-1 px-2 rounded"
                >
                  {letter}
                </a>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="p-2 text-blue-700 hover:text-blue-500"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VitaminsSearch;
