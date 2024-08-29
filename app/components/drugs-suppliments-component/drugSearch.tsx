import React from "react";

const DrugsSearch: React.FC = () => {
  // Define an array of links
  const links = [
    { text: "Search Medications by Letter", href: "#" },
    { text: "Search Medications by Condition", href: "#" },
    { text: "Find Off-Market Medications", href: "#" },
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center mb-32"
      style={{
        backgroundImage: "url('/drugs-background.jpg')",
        height: "300px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-[3.3125rem] font-bold leading-normal mt-2 capitalize text-center">
          Drugs & Medications A-Z
        </h1>
        <p className="text-base sm:text-lg text-[#1b1b1b] mt-2 text-center">
          Your trusted source of information for prescription drugs and
          medications
        </p>
      </div>
      <div
        className="absolute w-full flex justify-center"
        style={{ top: "100%" }}
      >
        <div className="bg-blue-100 p-4 rounded-lg inline-block shadow-lg transform -translate-y-1/2 w-11/12 max-w-xl md:max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Enter medication name to search"
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
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-blue-700 text-sm md:text-base hover:text-blue-500"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugsSearch;
