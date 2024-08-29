"use client";
import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaStethoscope } from "react-icons/fa";
export default function HeroSection({ textb }: { textb?: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in", location);
  };
  return (
    <div>
      <div
        className={`flex justify-center items-center ${
          textb ? "min-h-15" : "min-h-20"
        }   ${textb ? "text-black" : "text-white"} md:p-20 p-3`}
      >
        <div className="flex flex-col gap-5 justify-center text-center w-full">
          <h3 className="text-[21px]">
            8 million+ Physician Ratings & Reviews
          </h3>
          <h1 className="text-[46px]">Find Doctors and Dentists Near You</h1>
          <div className="flex justify-center">
            <div className="!w-[80%]">
              <form
                //   onSubmit={handleSearch}
                className="flex flex-col md:flex-row justify-center items-center mb-4"
              >
                <div className="relative w-full md:w-auto flex-1 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Primary Care Physician"
                    //   value={searchTerm}
                    //   onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-6 w-full pl-12 rounded-l-[4px] border border-gray-300 outline-none text-black"
                  />
                  <FaStethoscope
                    className="absolute left-3 top-[27px] text-sky-300"
                    size={15}
                  />
                </div>
                <div className="relative w-full flex-wrap md:w-full flex-1 mb-4 md:mb-0">
                  <input
                    type="text"
                    placeholder="Faisalabad, PB 38000"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-6 w-full pl-14 pr-20 flex text-black rounded-r-sm border border-dashed border-gray-300 outline-none"
                  />
                  <FaMapMarkerAlt
                    className="absolute left-3 top-[27px] text-sky-300"
                    size={15}
                  />
                  <button
                    type="submit"
                    className="absolute hover:bg-darkblue m-1 right-0 gap-2 top-0 bottom-0 bg-[#00588c] text-white p-3 rounded-sm flex items-center justify-center"
                  >
                    <FaSearch className="ml-2" size={20} /> Search
                  </button>
                </div>
              </form>
              <p className={`text-lg  ${textb ? "text-black" : "text-white"}`}>
                You can also search by physician, practice, or hospital name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
