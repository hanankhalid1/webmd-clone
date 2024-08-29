import React from "react";

const Article2 = ({ condition }: any) => {
  return (
    <div className="container mx-auto pt-20 px-1 ">
      <div className="relative mb-6">
        <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
          {condition?.suggestionSection?.title}
        </h2>
        <div className="border-t border-gray-300 relative">
          <div className="absolute right-0 top-0 w-[70px] border-t-2 border-[#3557ff]"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-[30vw] mb-6 md:mb-0">
          <img
            src={condition?.suggestionSection?.suggestionImage}
            alt="Healthy Beauty"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-[40vw] pl-6 pr-6 bg-white flex flex-col justify-center space-y-8">
          {condition?.suggestionSection?.suggestions.map(
            (article: any, index: any) => (
              <div key={index} className="mt-5">
                <h3 className="text-xl font-bold mb-1">{article.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {article.description}
                </p>
                <hr className="my-2 border-gray-300" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Article2;
