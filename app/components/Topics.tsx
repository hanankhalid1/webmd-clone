import React from "react";

interface HealthTopicsProps {
  topicName: string;
  topics: string[];
  viewAllLink: string;
}

const Topics: React.FC<HealthTopicsProps> = ({
  topicName,
  topics,
  viewAllLink,
}) => {
  return (
    <section className="bg-white mx-[5%] py-8">
      <div className="container mx-auto px-4">
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
            {topicName}
          </h2>
          <a
            href={viewAllLink}
            className="absolute text-[#3557ff] font-sans"
            style={{
              top: "1rem",
              right: 0,
              fontSize: "1.125rem",
              fontWeight: 600,
            }}
          >
            View All
          </a>
          <div className="border-t border-gray-300 relative">
            <div className="absolute right-0 top-0 w-[70px] border-t-2 border-[#3557ff]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#edf0ff] p-4 rounded-md">
          {topics.map((topic, index) => (
            <a
              key={index}
              href="#"
              className="py-2 text-lg text-[#2a2a2a] hover:text-[#0011c0] transition-colors duration-200 flex items-center"
            >
              <span className="mr-2">→</span>
              {topic}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Topics;
