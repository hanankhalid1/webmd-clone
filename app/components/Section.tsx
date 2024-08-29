import React from "react";
import Image from "next/image";

interface SpecialSectionProps {
  title: string;
  items: {
    imageUrl: string;
    smallHeading?: string;
    mainHeading: string;
    paragraphContent: string;
  }[];
}

const Section: React.FC<SpecialSectionProps> = ({ title, items }) => {
  return (
    <div className="py-10 px-5 mx-[5%] lg:px-20 ">
      <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
        {title}
      </h2>
      <hr className="border-gray-300 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={item.imageUrl}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="pt-6 pr-6 pb-6 pl-1">
              {item.smallHeading && (
                <div className="text-sm text-gray-500 mb-1">
                  {item.smallHeading}
                </div>
              )}
              <div className="text-xl font-bold mb-2">{item.mainHeading}</div>
              <p className="text-gray-700">{item.paragraphContent}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
