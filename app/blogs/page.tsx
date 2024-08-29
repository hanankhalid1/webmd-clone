import React from "react";
import Navbar from "../components/Navbar";
import BLogBanner from "../components/BlogsComponent/BlogBanner";
import ContributerSection from "../components/BlogsComponent/ContributerSection";

export default function Blog() {
  return (
    <div className="bg-bodyColor">
      <Navbar />
      <BLogBanner />
      <ContributerSection />
    </div>
  );
}
