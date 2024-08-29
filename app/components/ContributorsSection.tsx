import Image from "next/image";
import contributor1 from "/public/contributor1.jpg";
import contributor2 from "/public/contributor2.jpg";
import contributor3 from "/public/contributor3.jpg";
import contributor4 from "/public/contributor4.jpg";

const contributors = [
  {
    id: 1,
    image: contributor1,
    category: "Brain & Nervous System",
    name: "Misha Grayson Coleman",
    details: "Diagnosed since 2021",
    article: "Favorite Apps I Use Living With Myasthenia Gravis",
  },
  {
    id: 2,
    image: contributor2,
    category: "Ankylosing Spondylitis",
    name: "Lovaine Cohen",
    details: "Diagnosed since 2001",
    article: "10 Ways to Manage Your Ankylosing Spondylitis-Related Fatigue",
  },
  {
    id: 3,
    image: contributor3,
    category: "Skin Problems and Treatments",
    name: "J. Onyeka Obioha, MD",
    details: "Board-certified dermatologist",
    article: "How You Can Protect Your Skin This Summer",
  },
  {
    id: 4,
    image: contributor4,
    category: "Pain Management",
    name: "Anita Gupta, PharmD, DO",
    details: "Board-certified anesthesiologist and pain management physician",
    article: "Mind Over Matter",
  },
];

const ContributorsSection: React.FC = () => {
  return (
    <div className=" mx-[5%] py-10 px-5 lg:px-20">
      <div className="relative mb-6">
        <h2 className="text-lg font-bold mb-4 text-[#00157c] font-sans">
          Patient and Expert Contributors
        </h2>
        <a
          href="#"
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contributors.map((contributor) => (
          <div
            key={contributor.id}
            className="bg-white rounded-lg overflow-hidden relative group"
          >
            <div className="relative">
              <Image
                src={contributor.image}
                alt={contributor.name}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2 bg-white text-xs font-bold uppercase px-2 py-1 rounded text-black hover:text-blue-600">
                {contributor.category}
              </div>
            </div>
            <div className="p-4 h-48">
              {" "}
              {/* Fixed height for container */}
              <h3 className="text-lg font-bold text-gray-900">
                {contributor.name}
              </h3>
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-600 mb-2">
                {contributor.details}
              </p>
              <hr className="mb-2" />
              <p className="overflow-hidden text-ellipsis whitespace-nowrap transition-colors duration-500 group-hover:text-blue-600">
                {contributor.article}
              </p>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-blue-600 text-xl transition-transform duration-500 group-hover:scale-125 group-hover:text-blue-700"
                >
                  &rarr;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributorsSection;
