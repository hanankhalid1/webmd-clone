import React from "react";
import Image from "next/image";

type Article = {
  title: string;
  imageSrc: string;
  link: string;
};

const articles: Article[] = [
  {
    title: "Mental Health",
    imageSrc: "/mental-health.png",
    link: "#",
  },
  {
    title: "Diet & Weight Management",
    imageSrc: "/diet-weight.png",
    link: "#",
  },
  {
    title: "Healthy Aging",
    imageSrc: "/healthy-aging.png",
    link: "#",
  },
  {
    title: "Sex & Relationships",
    imageSrc: "/sex-relationships.png",
    link: "#",
  },
  {
    title: "Fitness & Exercise",
    imageSrc: "/fitness-exercise.png",
    link: "#",
  },
];

const LivingHealthySection: React.FC = () => {
  return (
    <section className="bg-white mx-[5%] py-8">
      <div className="container mx-auto px-4">
        <div className="relative mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[#00157c] font-sans">
            Living Healthy
          </h2>
          <a
            href="#"
            className="absolute text-[#3557ff] font-sans"
            style={{ top: '1rem', right: 0, fontSize: '1.125rem', fontWeight: 600 }}
          >
            View All
          </a>
          <div className="border-t border-gray-300 relative">
            <div className="absolute right-0 top-0 w-[70px] border-t-2 border-[#3557ff]"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="group relative block rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative overflow-hidden w-full h-80 rounded-md flex-shrink-0">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75">
                <h3 className="text-white text-2xl font-bold">{article.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Divider Line */}
        <div className="mt-6 border-t border-gray-300"></div>
      </div>
    </section>
  );
};

export default LivingHealthySection;
