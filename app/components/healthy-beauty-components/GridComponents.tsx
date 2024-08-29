import React from "react";
import Image from "next/image";

interface GridItem {
  question: string;
  answer: string;
  slug: string;
}

interface GridComponentProps {
  sectionTitle: string;
  sectionSubtitle: string;
  imageSrc: string;
  items: GridItem[];
  imageLeft?: boolean; // New prop to determine image position
}

const GridComponent: React.FC<GridComponentProps> = (
  { sectionTitle, sectionSubtitle, imageSrc, items, imageLeft = true },
  { condition }: any
) => {
  return (
    <div className="container mx-auto pt-20">
      <div className="relative">
        <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
          <span className="ml-5 md:ml-20 font-thin">{sectionTitle} /</span>{" "}
          {sectionSubtitle}
        </h2>
        <a
          href="#"
          className="absolute text-[#3557ff] font-sans mr-24"
          style={{
            top: "1rem",
            right: "1rem",
            fontSize: "1.125rem",
            fontWeight: 600,
          }}
        >
          View All
        </a>
        <div className="ml-5 md:ml-20 w-full md:w-[70vw] border-t border-gray-300 relative">
          <div className="absolute right-0 top-0 w-[30px] md:w-[40px] border-t-2 border-[#3557ff]"></div>
        </div>
      </div>

      <div
        className={`max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-32 items-center`}
      >
        {imageLeft ? (
          <>
            <div className="w-full md:order-1 md:col-start-1 md:col-end-2 flex items-center">
              <Image
                src={imageSrc}
                alt="Dynamic Image"
                className="rounded-lg"
                width={500}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="w-full md:order-2 md:col-start-2 md:col-end-3 mt-8 md:mt-0">
              <div className="space-y-14">
                {items.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-bold">{item.question}</h2>
                    <p className="text-gray-600">{item.answer}</p>
                    {index < items.length - 1 && (
                      <hr className="my-1 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full md:order-2 md:col-start-2 md:col-end-3 flex items-center">
              <Image
                src={imageSrc}
                alt="Dynamic Image"
                className="rounded-lg"
                width={500}
                height={350}
                layout="responsive"
              />
            </div>
            <div className="w-full  md:order-1 md:col-start-1 md:col-end-2 mt-8 md:mt-0">
              <div className="space-y-14">
                {items.map((item, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-bold">{item.question}</h2>
                    <p className="text-gray-600">{item.answer}</p>
                    {index < items.length - 1 && (
                      <hr className="my-1 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GridComponent;
