"use client";
import React, { useState } from "react";
import { CiBookmark } from "react-icons/ci";

const DrugDetailsHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Uses");

  const tabs = [
    "Uses",
    "Side Effects",
    "Warnings",
    "Precautions",
    "Interactions",
    "Overdose",
    "Images",
    "Reviews (1888)",
  ];

  return (
    <div
      className="relative w-full bg-cover bg-center mb-[50px] md:mb-[100px] lg:mb-[50px] sm:mb-[100px]"
      style={{
        backgroundImage: "url('/drugs-background.jpg')",
        height: "200px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-primary text-2xl sm:text-3xl md:text-[3.3125rem] font-bold leading-normal mt-2 capitalize text-center">
          Abilify - Uses, Side Effects, and More
        </h1>
        <p className="text-lg text-center mt-2">
          GENERIC NAME(S): ARIPIPRAZOLE
        </p>
        <div className="rounded-full bg-white p-1 m-6 hover:bg-blue-200">
          <CiBookmark
            className="text-blue-500 h-6 w-6 cursor-pointer"
            style={{
              filter: 'drop-shadow(0 0 1px)',
            }}
          />
        </div>
      </div>
      <div className="absolute top-[75%] left-1/2 transform -translate-x-1/2 w-full px-12 py-4 border-1">
        <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-x-auto">
          <ul className="flex justify-between w-full">
            {tabs.map((tab) => (
              <li
                key={tab}
                className={`flex-1 justify-center  items-center text-center lg:px-2 hover:bg-blue-600 hover:text-white rounded-sm cursor-pointer w-full lg:py-5 md:py-2 sm:py-2 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-black border border-gray-200 hover:bg-blue-600"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DrugDetailsHeader;
