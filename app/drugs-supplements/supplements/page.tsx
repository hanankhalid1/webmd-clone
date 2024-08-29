import IconGrid from "@/app/components/drugs-suppliments-component/iconGrid";
import { medications, supplements } from "@/app/components/drugs-suppliments-component/medicationData";
import TopMedications from "@/app/components/drugs-suppliments-component/topMedication";
import VitaminsSearch from "@/app/components/drugs-suppliments-component/vitaminSearch";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import DrugIntraction from "@/public/images/drugs-supliments/drugIntraction";
import FindDoctor from "@/public/images/drugs-supliments/findDoctor";
import FindMedication from "@/public/images/drugs-supliments/findMedication";
import PillIdentifier from "@/public/images/drugs-supliments/pillIdentifier";
import React from "react";
import DrugInfo from "@/app/components/drugs-suppliments-component/drugInfo";

const icons = [
  {
    src: <PillIdentifier color="#39B08C" />,
    alt: "Pill Identifier",
    label: "Pill Identifier",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <DrugIntraction color="#39B08C"/>,
    alt: "Drugs Interaction Checker",
    label: "Drugs Interaction Checker",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <FindMedication />,
    alt: "Find Medications",
    label: "Find Medications",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <FindDoctor color="#39B08C" />,
    alt: "Find a Doctor",
    label: "Find a Doctor",
    color: "#00157c",
    bgColor: "white",
  },
];

const moreOnDrugs = [
  { id: 1, title: "What to Know Before You Take Herbal Supplements" },
  { id: 2, title: "Vitamins and Minerals: How Much Should You Take?" },
  { id: 3, title: "Signs You’re Low on Vitamin B12" },
];

const recommendedForYou = [
  { id: 1, title: "Is Your Medication Causing Dry Eye?" },
  { id: 2, title: "Erectile Dysfunction Meds: Make Them Work Better" },
  { id: 3, title: "What Medicines Can Make Your Blood Sugar Spike?" },
];


const page = () => {
  return (
    <div>
      <Navbar />
      <VitaminsSearch />
      <div className="flex flex-wrap lg:flex-nowrap px-4 py-8 justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-0">
          <IconGrid icons={icons} />
          <TopMedications
            title="Top Searched Medications"
            items={medications.map((item) => ({ name: item.name }))}
            bgColor="#edfbf7"
          />
        </div>
        <DrugInfo
          moreOnDrugs={moreOnDrugs}
          recommendedForYou={recommendedForYou}
          moreOnDrugsHeading="MORE ON VITAMINS & SUPPLEMENTS"
          recommendedForYouHeading="Recommended for You"
        />
      </div>
      <Footer />
    </div>
  );
};

export default page;
