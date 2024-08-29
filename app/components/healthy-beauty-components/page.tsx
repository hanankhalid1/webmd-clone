import React from "react";
import Hero from "./Hero";
import Navbar from "../Navbar";
import GridComponent from "./GridComponents";
import ArticleGrid from "./ArticleGrid";
import Article2 from "./Article2";
import TrendingTopics from "../TrendingTopics";
import DoctorSearchComponent from "./DoctorSearchComponent";
import ImageArticle from "./ImageArticle";
import Footer from "../Footer";
const page = () => {
  return (
    <>
      <div className="bg-[#F8F8F8] mt-0 ">
        <Hero />
        <ArticleGrid />
        <div className="flex items-center justify-center">
          <Article2 />
        </div>
        <TrendingTopics />
        <DoctorSearchComponent />
        <ImageArticle />
      </div>
      <br />
      <Footer />
      <br />
    </>
  );
};

export default page;
