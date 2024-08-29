import React from "react";
import DrugDetailHeader from "./drugDetailHeader";
import Navbar from "../../Navbar";
import Add from "../../add";
import DetailSection from "./detailSection";
import DrugInfo from "../drugInfo";
import { MightLikeItems, moreAboutDrugsItems, moreOnDrugs, } from "../drugSupplementData";
import YouMightAlsoLike from "./MightLike";
import DrugName from "./drugName";
import SurveyComponent from "./surveyComponent";
import Footer from "../../Footer";

 

const page = () => {
  return (
    <div>
      <Navbar />
      <Add />
      <DrugDetailHeader />
      <div className="flex flex-wrap lg:flex-nowrap px-4 py-8 justify-center lg:justify-start">
        <div className="w-full lg:w-2/3 max-w-4xl mx-auto lg:ml-16 lg:mr-0">
          <DetailSection />
          <YouMightAlsoLike items={MightLikeItems} />
          <DrugName />
          <SurveyComponent />
        </div>
        <DrugInfo
          moreOnDrugs={moreOnDrugs}
          moreOnDrugsHeading="MORE ON DRUGS & MEDICATIONS"
           moreAboutDrugsHeading="More About Drugs and Medications"
           moreAboutDrugs={moreAboutDrugsItems}
        />
      </div>
      <Footer/>
    </div>
  );
};

export default page;
