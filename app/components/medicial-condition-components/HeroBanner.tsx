"use client";
import { MedicialConditionsData } from "@/constants/medicial-conditions-data";
import Link from "next/link";
import React from "react";

export default function HeroBanner({ condition }: any) {
  return (
    <div>
      <div className="bg-[#fff9f5]">
        <div
          style={{
            backgroundImage: `url('${condition.bg_image}')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            height: "450px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "start",
            transition: "background-color 0.3s ease",
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingBottom: "50px",
            paddingTop: "50px",
            flexWrap: "wrap-reverse",
          }}
        >
          <div className="bg-white z-10 relative rounded-sm p-10 lg:w-[35%] w-[100%] h-[70%] flex-col flex justify-center items-center">
            <h1 className="text-[2rem] text-[#00157c] font-bold text-center lg:text-left">
              {condition?.title}
            </h1>
            <div className="mt-3">
              <p className="text-[#676767] text-[18px] text-center lg:text-left">
                {condition.short_description}
              </p>
            </div>
            <div className="absolute z-[-10] bottom-[-40px] left-5 w-0 h-0 border-l-[50px] border-l-transparent border-t-[75px] border-t-white border-r-[50px] border-r-transparent"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-center  py-4">
        <div className="grid md:grid-cols-5 grid-cols-3 lg:grid-cols-8 gap-3 max-w-screen-xl">
          {condition.tags.map((tag: any, index: any) => {
            return (
              <div key={index}>
                <Link
                  className="text-[#3557ff] hover:bg-[#d2d9ff] p-2 block text-center"
                  href={tag?.slug}
                >
                  {tag?.label}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
