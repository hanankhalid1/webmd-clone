import React from "react";
import Image from "next/image";

interface InlineImageTextSectionProps {
  title: string;
  items: {
    imageUrl: string;
    text: string;
  }[];
}

const InlineImageTextSection: React.FC<InlineImageTextSectionProps> = ({
  title,
  items,
}) => {
  return (
    <div className="py-10 px-5 mx-[5%] lg:px-20 ">
      <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
        {title}
      </h2>
      <hr className="border-gray-300 mb-8" />
      <div className="flex flex-wrap justify-center lg:justify-around">
        {items.map((item, index) => (
          <div key={index} className="text-center m-2 lg:m-4">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto mb-2">
              <Image
                src={item.imageUrl}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-colors duration-200 hover:text-blue-500"
              />
            </div>
            <div className="text-lg font-sans sm:text-lg md:text-xl font-semibold transition-colors duration-200 hover:text-blue-500">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InlineImageTextSection;
