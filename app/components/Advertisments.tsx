import React from "react";
import SingleAdvertisment from "./singleAdvert";

const SingleAdvertisment_image = [
  {
    heading: "Tips for Grilling Safely",
    image: "/1advert.jpg",
  },
  {
    heading: "Why Consistency is Key in a Diabetes Regimen",
    image: "/2advert.jpg",
  },
  {
    heading: "How Does Psoriasis Affect Your Health?",
    image: "/3advert.jpg",
  },
];

const Advertisment = () => {
  return (
    <section className="bg-white mx-[5%] ">
      <div className="container mx-auto px-2">
        <div className="flex flex-wrap justify-between py-10">
          {SingleAdvertisment_image.map((advert, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 flex justify-center mb-4"
            >
              <SingleAdvertisment
                heading={advert.heading}
                image={advert.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
