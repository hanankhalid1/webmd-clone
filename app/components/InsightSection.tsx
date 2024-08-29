import React from "react";
import Image from "next/image";

const InsightsSection = () => {
  return (
    <div className="bg-[#000625] text-white p-6 md:p-12 pb-28">
      {/* Top row for expert insights */}
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="flex items-center">
          <Image
            src="/whyte-image.png"
            alt="John Whyte, MD"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="ml-4 text-center md:text-left mt-4 md:mt-0">
            <p className="text-base font-semibold">Expert Insights From</p>
            <p className="text-xl font-bold">John Whyte, MD</p>
            <p className="text-base font-sans">WebMD Chief Medical Officer</p>
          </div>
        </div>
        <div className="hidden md:block flex-grow border-t border-gray-500 ml-4 mr-20"></div>
      </div>

      {/* Bottom row split into two columns */}
      <div className="flex flex-col md:flex-row">
        {/* Left column for main image and description */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="relative mb-4 w-full">
            <Image
              src="/market_thumb.jpg"
              alt="The Race To Get Drugs To Market"
              layout="responsive"
              width={600}
              height={400}
              className="rounded-md"
            />
            <button className="absolute top-0 right-0 py-3 px-4 bg-blue-500 text-white">
              ▶
            </button>
          </div>
          <p className="mt-2 text-2xl md:text-3xl font-bold text-center md:text-left leading-tight">
            The Race To Get Drugs To Market
          </p>
        </div>

        {/* Vertical divider line */}
        <div className="hidden md:block w-px bg-gray-400 mx-6 self-stretch"></div>

        {/* Right column for articles list */}
        <div className="md:w-1/2 flex flex-col mt-6 md:mt-0 space-y-6">
          {[
            {
              title: "ASCO President Defines Annual Goals Of Cancer Organization",
              image: "/oncology_patient.jpg",
            },
            {
              title: "Change Makers: Joe Kiani On Home-Based Care",
              image: "/counter_watch.jpg",
            },
            {
              title: "Promoting Social Connection During An Epidemic Of Loneliness",
              image: "/support_group.jpg",
            },
            {
              title: "Battling Bias And Inequality In Women's Healthcare",
              image: "/men_thumb.jpg",
            },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="relative w-24 h-16 md:w-36 md:h-24">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <button className="absolute top-0 right-0 bg-blue-500 text-white p-1">
                  ▶
                </button>
              </div>
              <p className="text-sm md:text-lg font-semibold leading-tight w-40 md:w-56 lg:w-96">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSection;
