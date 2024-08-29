"use client";
import React, { useState } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="bg-white mx-[5%]  py-8">
      <div className="container mx-auto px-4">
        {/* Heading and Top Divider Line */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
            TODAY&apos;S TOP STORIES
          </h2>
          <div className="border-t border-gray-300"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-6">
          <div
            className="relative overflow-hidden rounded-md w-full md:w-5/12"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative overflow-hidden w-full h-0 pb-[56.25%] rounded-md flex-shrink-0">
              <Image
                src="/heroSection.jpg"
                alt="Fireworks"
                layout="fill"
                objectFit="cover"
                className={`transform transition-transform duration-300 ease-in ${
                  isHovered ? "scale-110" : ""
                }`}
              />
            </div>
          </div>
          <div className="w-full md:w-7/12 mt-4 md:mt-0">
            <h3
              className="text-black font-extrabold text-4xl hover:cursor-pointer hover:text-blue-800 transition-colors duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Unexpected Causes Of Lung Damage
            </h3>
            <p className="text-gray-700 mt-2 text-xl">
              From fireworks to hot tubs and carpets, learn about some
              surprising things that can damage your lungs plus find out what
              steps you can take to avoid issues.
            </p>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="mt-6 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;
