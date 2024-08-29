import React from "react";
import DrugsSearch from "@/app/components/drugs-suppliments-component/drugSearch";
import IconGrid from "@/app/components/drugs-suppliments-component/iconGrid";
import Navbar from "@/app/components/Navbar";

import TopMedications from "@/app/components/drugs-suppliments-component/topMedication";
import { articles, medications } from "@/app/components/drugs-suppliments-component/medicationData";
import Footer from "@/app/components/Footer";

import FindDoctor from "@/public/images/drugs-supliments/findDoctor";
import PillIdentifier from "@/public/images/drugs-supliments/pillIdentifier";
import DrugIntraction from "@/public/images/drugs-supliments/drugIntraction";
import FindVitamins from "@/public/images/drugs-supliments/findVitamins";
import DrugNews from "@/app/components/drugs-suppliments-component/drugNews";
import DrugInfo from "@/app/components/drugs-suppliments-component/drugInfo";

const icons = [
  {
    src: <PillIdentifier color="#3557FF" />,
    alt: "Pill Identifier",
    label: "Pill Identifier",
    color: "#00157c",
    bgColor: "white",
  },
  {
    src: <DrugIntraction color="#3557FF" />,
    alt: "Drugs Interaction Checker",
    label: "Drugs Interaction Checker",
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
    src: <FindDoctor />,
    alt: "Find a Doctor",
    label: "Find a Doctor",
    color: "#00157c",
    bgColor: "white",
  },
];
const moreOnDrugs = [
  { id: 1, title: "Drug Recalls: What Do They Mean?" },
  { id: 2, title: "Choosing an OTC Pain Reliever: What to Consider" },
  { id: 3, title: "Is Your Medication Making You Tired?" },
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
      <DrugsSearch />
      <div className="flex flex-wrap lg:flex-nowrap px-4 py-8 justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-0">
          <IconGrid icons={icons} />
          <TopMedications
            title="Top Searched Medications"
            items={medications.map((item) => ({ name: item.name, slug: item.slug }))}
            bgColor="#edf0ff"
          />
        </div>
        <DrugInfo
          moreOnDrugs={moreOnDrugs}
          recommendedForYou={recommendedForYou}
          moreOnDrugsHeading="MORE ON DRUGS & MEDICATIONS"
          recommendedForYouHeading="Recommended for You"
        />
      </div>
      <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-0 items-center">
        <DrugNews heading="Latest Drug News" articles={articles} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
