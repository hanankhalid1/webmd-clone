"use client";
import React, { useState } from "react";
import Image from "next/image";

const HealthNews = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="bg-white mx-[5%] py-8">
      <div className="container mx-auto px-4">
        {/* Heading and Top Divider Line */}
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">HEALTH NEWS</h2>
          <a
            href="#"
            className="absolute text-[#3557ff] font-sans"
            style={{ top: '1rem', right: 0, fontSize: '1.125rem', fontWeight: 600 }}
          >
            View All
          </a>
          <div className="border-t border-gray-300 relative">
            <div className="absolute right-0 top-0 w-[70px] border-t-2 border-[#3557ff]"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center sm:space-x-6">
          <div className="w-11/12 sm:w-5/12" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="relative overflow-hidden rounded-md w-full h-[300px]">
              <Image
                src="/health-news.jpg"
                alt="COVID-19 Indicator"
                layout="fill"
                objectFit="cover"
                className={`transition-transform duration-500 transform ${isHovered ? 'scale-110' : ''}`}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <h3 className="text-black font-extrabold text-2xl sm:text-3xl lg:text-4xl hover:cursor-pointer hover:text-blue-800 transition-colors duration-300">
              A Key Indicator Of COVID Just Spiked In The Western U.S.
            </h3>
            <p className="text-gray-700 mt-2 text-md sm:text-lg lg:text-xl">
              COVID-19 cases have increased nationally this summer, and data from wastewater monitoring now indicates that there may be an additional increase in cases occurring in the Western U.S.
            </p>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center pt-4 space-y-4 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 lg:border-r lg:border-gray-400 lg:pr-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center lg:text-left hover:text-blue-600 hover:cursor-pointer transition-colors duration-300">
              Three Subtle Ways Climate Change Degrades Your Mental Health
            </h2>
          </div>
          <div className="hidden lg:block h-6 w-px mx-4"></div>
          <div className="flex-1 lg:border-r lg:border-gray-500 lg:px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center lg:text-left hover:text-blue-600 hover:cursor-pointer transition-colors duration-300">
              Six Families Offer Ideas to Manage Teen Social Media Use
            </h2>
          </div>
          <div className="hidden lg:block h-6 w-px mx-4"></div>
          <div className="flex-1 lg:pl-4">
            <h2 className="text-xl sm:text-2xl font-bold text-center lg:text-left hover:text-blue-600 hover:cursor-pointer transition-colors duration-300">
              Walk Your Back Pain Away? Here&apos;s What To Know
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthNews;
