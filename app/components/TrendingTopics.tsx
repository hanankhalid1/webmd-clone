import React from "react";

const topics = [
  "Allergies",
  "Alzheimer’s",
  "Cancer",
  "Cataracts",
  "Gastroenteritis",
  "Healthy Seniors",
  "Hypertension",
  "Lupus",
  "Migraines",
  "Nutrition And Healthy Eating",
];

const TrendingTopics: React.FC = () => {
  return (
    <div className="py-8 mx-[5%] px-5 lg:px-20">
      <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
        TRENDING TOPICS
      </h2>
      <hr className="border-gray-300 mb-4" />
      <div className="flex flex-wrap gap-4">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-slate-100 text-blue-500 rounded-full px-6 py-3 cursor-pointer transition-colors duration-200 hover:bg-blue-100 m-2"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopics;
