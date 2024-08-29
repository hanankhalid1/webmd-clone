"use client";
import { MedicialConditionsData } from "@/constants/medicial-conditions-data";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
export default function BLogBanner() {
  return (
    <div>
      <div className="bg-[#fff9f5]">
        <div
          style={{
            backgroundImage: `url('https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/magazine/dashboard/2022/hero-desktop-2.jpg?resize=*:*')`,
            backgroundSize: "cover",
            backgroundPosition: "right",
            // height: "450px",
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
          <div className="bg-white rounded-md z-10 relative  p-10 lg:w-[45%] shadow-sm w-[100%] h-[70%] flex-col flex justify-center items-centen">
            <div className="text-start pl-7">
              <h1 className="text-[2.5rem] text-[#00157c] font-bold">
                WebMD Blogs
              </h1>
              <div className="mt-2">
                <p className="text-[#676767] text-[20px]">
                  Personal Stories. Expert Perspectives.
                </p>
              </div>
              <div className="my-5 flex items-center gap-3 flex-wrap">
                <button className="text-[#3557ff] font-bold rounded-sm py-2 px-4 hover:bg-[#d2d9ff] bg-[#edf0ff] flex items-center">
                  <MdKeyboardArrowRight className="font-bold text-2xl" />{" "}
                  Patient Blogs
                </button>
                <button className="text-[#3557ff] font-bold rounded-sm py-2 px-4 hover:bg-[#d2d9ff] bg-[#edf0ff] flex items-center">
                  <MdKeyboardArrowRight className="font-bold text-2xl" /> Expert
                  Blogs
                </button>
              </div>
            </div>
            <div
              className="absolute z-[-10] !bottom-[-40px] left-5 w-0 h-0
              border-l-[50px] border-l-transparent
              border-t-[75px] border-t-white
              border-r-[50px] border-r-transparent"
            ></div>
          </div>
          <div></div>
        </div>
      </div>
      {/* <div className="flex flex-wrap items-center  gap-7 mx-10 mt-2">
        {condition.tags.map((tag: any, index: any) => {
          return (
            <div key={index}>
              <Link
                className="text-[#3557ff] hover:bg-[#d2d9ff] p-2"
                href={tag?.slug}
              >
                {tag?.label}
              </Link>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
