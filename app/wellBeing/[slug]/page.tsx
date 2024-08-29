"use client";
import React from "react";
import { HealthyBeautyData } from "@/constants/wellbeing-data";
import Article2 from "@/app/components/healthy-beauty-components/Article2";
import ArticleGrid from "@/app/components/healthy-beauty-components/ArticleGrid";
import DoctorSearchComponent from "@/app/components/healthy-beauty-components/DoctorSearchComponent";
import Hero from "@/app/components/healthy-beauty-components/Hero";
import ImageArticle from "@/app/components/healthy-beauty-components/ImageArticle";
import Navbar from "@/app/components/Navbar";
import TrendingTopics from "@/app/components/healthy-beauty-components/TrendingTopics";
import { useParams } from "next/navigation";

import { useState } from "react";
const healthyBeauty = () => {
  const { slug } = useParams();
  const [condition, setCondition] = useState<any>(null);

  const data = HealthyBeautyData.find((condition) => {
    return condition.slug === slug;
  });

  // console.log("data", data);

  return (
    <>
      <Navbar />
      {/* <TagsComponents condition={data} /> */}
      <Hero condition={data} />
      <div className="bg-[#F8F8F8]">
        <ArticleGrid condition={data} />
        <div className="flex items-center justify-center ">
          <Article2 condition={data} />
        </div>
        <TrendingTopics condition={data} />
        <DoctorSearchComponent />
        <ImageArticle condition={data} />
      </div>
      <br />
      <br />
    </>
  );
};

export default healthyBeauty;
