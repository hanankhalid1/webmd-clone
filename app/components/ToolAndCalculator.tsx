import React from "react";
import InlineImageTextSection from "./InlineImageTextSection";

function ToolAndCalculator() {
  const topics = [
    "Cat Health Tool",
    "Dog Health Tool",
    "Due Date Calculator",
    "Fitness Calorie Counter",
    "Kids BMI",
    "Visual Pregnancy Timeline",
  ];

  const imageTextItems = [
    {
      imageUrl: "/bmi.png",
      text: "BMI Calculator",
    },
    {
      imageUrl: "/ovulationcalculator.png",
      text: "Ovulation Calculator",
    },
    {
      imageUrl: "/coldfluicon.png",
      text: "Cold And Flu Map",
    },
    {
      imageUrl: "/pillidentifier.png",
      text: "Pill Identifier",
    },
    {
      imageUrl: "/drugschecker.png",
      text: "Drugs Identifier Checker",
    },
  ];

  return (
    <>
      <InlineImageTextSection
        title="TOOLS, TRACKERS & CALCULATORS"
        items={imageTextItems}
      />
      <div className="py-10 mx-[5%]  px-5 lg:px-20">
        <hr className="border-gray-300 mb-8" />
        <div className="flex flex-wrap gap-4 justify-center lg:justify-between">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-slate-100 text-blue-500 rounded-full px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-blue-100"
            >
              {topic}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ToolAndCalculator;
