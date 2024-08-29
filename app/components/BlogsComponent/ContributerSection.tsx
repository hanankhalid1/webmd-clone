"use client";
import Image from "next/image";
import contributor1 from "/public/contributor1.jpg";
import contributor2 from "/public/contributor2.jpg";
import contributor3 from "/public/contributor3.jpg";
import contributor4 from "/public/contributor4.jpg";
import { MdArrowForward } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

const contributors = [
  {
    id: 1,
    image: contributor1,
    category: "Brain & Nervous System",
    name: "Misha Grayson Coleman",
    details: "Diagnosed since 2021",
    article: "Favorite Apps I Use Living With Myasthenia Gravis",
  },
  {
    id: 2,
    image: contributor2,
    category: "Ankylosing Spondylitis",
    name: "Lovaine Cohen",
    details: "Diagnosed since 2001",
    article: "10 Ways to Manage Your Ankylosing Spondylitis-Related Fatigue",
  },
  {
    id: 3,
    image: contributor3,
    category: "Skin Problems and Treatments",
    name: "J. Onyeka Obioha, MD",
    details: "Board-certified dermatologist",
    article: "How You Can Protect Your Skin This Summer",
  },
  {
    id: 4,
    image: contributor4,
    category: "Pain Management",
    name: "Anita Gupta, PharmD, DO",
    details: "Board-certified anesthesiologist and pain management physician",
    article: "Mind Over Matter",
  },
  {
    id: 5,
    image: contributor4,
    category: "Pain Management",
    name: "Anita Gupta, PharmD, DO",
    details: "Board-certified anesthesiologist and pain management physician",
    article: "Mind Over Matter",
  },
  // Add more contributors as needed
];

const ContributerSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value based on the current window size
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, contributors.length - cardsToShow)
    );
  };

  return (
    <div className="mx-[2%] py-10 px-5 lg:px-10">
      <div className="relative mb-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
            FEATURED PATIENT AND EXPERT CONTRIBUTORS
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="bg-white hover:bg-[#d2d9ff] text-secondary text-xl p-4 rounded-md flex justify-center items-center"
              disabled={currentIndex === 0}
            >
              <IoArrowBackOutline />
            </button>
            <button
              onClick={handleNext}
              className="bg-white hover:bg-[#d2d9ff] text-secondary text-xl p-4 rounded-md flex justify-center items-center"
              disabled={currentIndex === contributors.length - cardsToShow}
            >
              <MdArrowForward />
            </button>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 mt-2"></div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {contributors.map((contributor) => (
            <div
              key={contributor.id}
              className="min-w-full flex-shrink-0 bg-white rounded-lg group cursor-pointer overflow-hidden relative"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={contributor.image}
                  alt={contributor.name}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-125"
                />
              </div>
              <div className="p-4 h-fit text-center">
                <h3 className="text-sm font-bold group-hover:text-primary text-gray-900">
                  {contributor.name}
                </h3>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 mb-2">
                  {contributor.details}
                </p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="text-blue-600 text-md transition-transform duration-500 group-hover:scale group-hover:text-blue-700"
                  >
                    <MdArrowForward />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributerSection;
