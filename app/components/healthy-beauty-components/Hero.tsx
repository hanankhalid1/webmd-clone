import React from "react";
import GridComponent from "./GridComponents";
import { HealthyBeautyData } from "@/constants/wellbeing-data";
import TagsComponents from "./TagsComponents";

const Hero = ({ condition }: { condition?: any }) => {
  console.log("conditioninhero", condition);
  return (
    <>
      <div
        className="relative w-full bg-cover bg-no-repeat bg-center "
        style={{
          backgroundImage: `url('${condition?.bg_image}')`,
          // backgroundSize: "100% auto",
          minHeight: "600px",
          backgroundSize: "cover",
          backgroundPosition: "right",

          flexWrap: "wrap-reverse",
        }}
      >
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="relative z-10 w-full md:w-1/2 lg:w-2/5 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg md:mt-20 md:h-60">
              <h1 className="text-4xl font-bold text-[#74491C]">
                {condition?.title}
              </h1>
              <br />
              <p className="text-gray-600 mt-2 text-xl">
                {condition?.short_description}
              </p>
            </div>
          </div>
        </div>
        {/* <TagsComponents /> */}
      </div>
      <div className="flex justify-center  items-center bg-[#F8F8F8] container  mx-auto  px-1 ">
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-wrap gap-4">
          {condition?.tags?.map((topic: any, index: any) => (
            <div
              key={index}
              className=" text-blue-500 rounded-full px-6 py-3 cursor-pointer transition-colors duration-200 hover:bg-blue-100 m-2"
            >
              {topic?.label}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F8F8F8] mx-auto ">
        {condition?.faqsec?.map((data: any, index: any) => (
          <GridComponent
            key={index}
            sectionTitle={data.number}
            sectionSubtitle={data.title}
            imageSrc={data.fimage}
            items={data.qlist}
            imageLeft={index % 2 === 0} // Image on left for odd indexes, right for even
          />
        ))}
        <br />
      </div>
    </>
  );
};

export default Hero;
