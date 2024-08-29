import React from "react";
import TopBar from "../components/doctor/TopBar";
import HeroSection from "../components/doctor/HeroSection";
import DoctorCard from "../components/doctor/DoctorCard";
import BannerSection from "../components/doctor/BannerSection";
import Footer from "../components/Footer";
import SepicialistComponent from "../components/doctor/SepicialistComponent";
import Doctorlastcomponent from "../components/doctor/Doctorlastcomponent";

export default function FindDoctor() {
  return (
    <div>
      <div className="bg-darkblue">
        <TopBar />
        <HeroSection />
      </div>
      <DoctorCard />
      <BannerSection />
      <div className="bg-bodyColor">
        <SepicialistComponent />
      </div>
      <div className="bg-darkblue ">
        <HeroSection />
      </div>
      <div className="bg-bodyColor pb-10">
        <Doctorlastcomponent />
      </div>
      <Footer />
    </div>
  );
}
