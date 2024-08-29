import React from "react";

type AdvertismentTypes = {
  heading: string;
  image: string;
};

const SingleAdvertisment = ({ heading, image }: AdvertismentTypes) => {
  return (
    <div className="overflow-hidden mx-auto  bg-white w-full sm:max-w-[400px]  mb-4">
      <div className="group flex">
        <div className="relative overflow-hidden w-44 h-28 rounded-md flex-shrink-0">
          <img
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in group-hover:scale-110"
            src={image}
            alt={heading}
          />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h5 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 hover:cursor-pointer">
            {heading}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvertisment;
