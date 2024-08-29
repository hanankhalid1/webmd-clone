import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  name: string;
  side1: string;
  side2: string;
}

const SearchedPills: React.FC<{ data: CardProps[] }> = ({ data }) => {
  return (
    <div>
      <div className="text-center flex justify-center">
        <h2
          className="inline-block items-center mt-16 mb-8 text-[#1b1b1b] font-sourceSansPro font-bold text-2xl leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal px-2"
          style={{
            background: "linear-gradient(180deg, #f8f8f8 60%, #d2d9ff 40%)",
            display: "inline",
            padding: "0 10px",
          }}
        >
          Commonly Searched Pills
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  items-center text-center gap-x-5 gap-y-4 px-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative bg-gray-100 h-28 w-full">
              <Image
                src={item.image}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-2 flex-grow text-center">
              <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
              <p className="text-sm">Side 1: {item.side1}</p>
              <p className="text-sm">Side 2: {item.side2}</p>
            </div>
            <div className="p-2">
              <button className="bg-transparent border border-blue-500 text-blue-500 rounded-md py-1 px-2 w-full hover:bg-blue-500 hover:text-white transition text-sm">
                View Free Coupon
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-100 focus:outline-none hover:text-blue-500 focus:ring-1 focus:ring-blue-200 focus:ring-opacity-75">
          View More
          <svg
            className="ml-2 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      
    </div>
  );
};

export default SearchedPills;
