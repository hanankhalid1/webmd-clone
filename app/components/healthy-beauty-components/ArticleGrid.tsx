import React from "react";
import { HealthyBeautyData } from "@/constants/wellbeing-data";
export interface Article {
  title: string;
  description: string;
  link?: string;
  highlight?: boolean;
}

const ArticleGrid = ({ condition }: any) => {
  return (
    <>
      <div className="container mx-auto px-4 pt-9 ">
        <div className="container mx-auto mt-10 px-1">
          <div className="relative mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
              News
            </h2>
            <div className="border-t border-gray-300 relative">
              <div className="absolute right-0 top-0 w-[70px] border-t-2 border-[#3557ff]"></div>
            </div>
          </div>
        </div>
        {/* <ArticleGrid /> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {condition?.newssection?.map((article: any, index: any) => (
            <div
              key={index}
              className="p-9   rounded-lg bg-white h-70 flex flex-col justify-between"
            >
              <div>
                <h2
                  className={`text-2xl font-bold hover:text-blue-700 ${
                    article.title ? "text-black" : "text-black"
                  }`}
                >
                  {article.title}
                </h2>
                <p className="text-gray-600 text-xl mt-2">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleGrid;
