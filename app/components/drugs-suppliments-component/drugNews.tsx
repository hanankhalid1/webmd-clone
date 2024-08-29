import React from "react";

interface Article {
  title: string;
  source: string;
}

interface DrugNewsProps {
  heading: string;
  articles: Article[];
}

const DrugNews: React.FC<DrugNewsProps> = ({ heading, articles }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="mx-auto py-8 px-4 mt-4 lg:mx-4 justify-start">
        <div className="text-center flex justify-center">
          <h2
            className="inline-block items-center mb-8 text-[#1b1b1b] font-sourceSansPro font-bold text-2xl leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal px-2"
            style={{
              background: "linear-gradient(180deg, #f8f8f8 60%, #d2d9ff 40%)",
              display: "inline",
              padding: "0 10px",
            }}
          >
            {heading}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-full">
          {articles.map((article, index) => (
            <div key={index} className="flex flex-col">
              <a
                href="#"
                className="text-lg font-semibold text-gray-800 hover:text-blue-500"
              >
                {article.title}
              </a>
              <p className="text-sm text-gray-500 mt-2">{article.source}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="flex items-center justify-center px-6 py-5 bg-blue-500 text-white font-semibold rounded shadow-md hover:bg-blue-100 focus:outline-none hover:text-blue-500 focus:ring-1 focus:ring-blue-200 focus:ring-opacity-75">
            View All
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
    </div>
  );
};

export default DrugNews;
