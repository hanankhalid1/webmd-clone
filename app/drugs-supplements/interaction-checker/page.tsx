import React from "react";
import DrugsInteractionChecker from "@/app/components/drugs-suppliments-component/drugInteraction";
import IconGrid from "@/app/components/drugs-suppliments-component/iconGrid";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import FindDoctor from "@/public/images/drugs-supliments/findDoctor";
import FindDrug from "@/app/components/drugs-suppliments-component/findDrug";
import FindVitamins from "@/public/images/drugs-supliments/findVitamins";
import LatestNews from "@/public/images/drugs-supliments/latestNews";
import PillIdentifier from "@/public/images/drugs-supliments/pillIdentifier";
import CollapsibleSection from "@/app/components/drugs-suppliments-component/CollapsibleSection";
import DrugInfo from "@/app/components/drugs-suppliments-component/drugInfo";
import {
  moreOnDrugs,
  recommendedForYou,
  sections,
} from "@/app/components/drugs-suppliments-component/drugSupplementData";

const icons = [
  {
    src: <FindDrug />,
    alt: "Find a Drug",
    label: "Find a Drug",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <FindVitamins />,
    alt: "Find Vitamins",
    label: "Find Vitamins",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <LatestNews />,
    alt: "Latest News",
    label: "Latest Drug News",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <PillIdentifier color="#3557FF" />,
    alt: "Pill Identifier",
    label: "Pill Identifier",
    color: "#00157c",
    bgColor: "white",
  },

  {
    src: <FindDoctor />,
    alt: "Find a Doctor",
    label: "Find a Doctor",
    color: "#00157c",
    bgColor: "white",
  },
];

const page = () => {
  return (
    <div>
      <Navbar />
      <DrugsInteractionChecker />
      <div className="flex flex-wrap lg:flex-nowrap px-4 py-8 justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-16">
          <IconGrid icons={icons} heading="Drugs & Medications Resources" />
          <div className="mt-20">
            <div className=" justify-center items-center text-center">
              <h2
                className="inline-block items-center mt-16 mb-2 text-[#1b1b1b] font-sourceSansPro font-bold text-2xl leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal px-2"
                style={{
                  background:
                    "linear-gradient(180deg, #f8f8f8 60%, #d2d9ff 40%)",
                  display: "inline",
                  padding: "0 10px",
                }}
              >
                Drug Interactions: What You Need to Know
              </h2>
              <div className="text-center mb-8">
                <p className="text-gray-500">
                  By <span className="text-blue-500">Evan Starkman</span>
                </p>
                <p className="text-gray-500">
                  Medically Reviewed by{" "}
                  <span className="text-blue-500">Joshua Conrad, PharmD</span>
                </p>
              </div>
              <div className="border-b border-gray-300"></div>
            </div>
            {sections.map((section, index) => (
              <CollapsibleSection
                key={index}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
        <DrugInfo
          moreOnDrugs={moreOnDrugs}
          recommendedForYou={recommendedForYou}
          moreOnDrugsHeading="MORE ON DRUGS & MEDICATIONS"
          recommendedForYouHeading="Recommended for You"
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
