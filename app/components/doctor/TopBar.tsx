"use client";
import Logo from "@/public/logos/logo";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
export default function TopBar() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (navItem: any) => {
    setHoveredNavItem(navItem);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleDropdownToggle = (navItem: any) => {
    setOpenDropdown(openDropdown === navItem ? null : navItem);
  };

  return (
    <>
      <header className="text-white body-font border-white border-b-[1px]">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="mr-4 cursor-pointer text-3xl flex gap-5 items-start">
            <RxHamburgerMenu
              className="lg:hidden flex"
              onClick={toggleSidebar}
            />
            <Link
              href={"/"}
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            >
              <Logo />
            </Link>
          </div>
          <nav className="hidden lg:flex md:ml-auto  flex-wrap gap-6 items-center text-base justify-center">
            <div
              className="text-sm cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("specialty")}
              onMouseLeave={handleMouseLeave}
            >
              Find Providers by Specialty
              {hoveredNavItem === "specialty" && (
                <ul className="absolute z-10 bg-white rounded-md mt-[-16px] text-black py-2 w-[250px] shadow-lg">
                  <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                    Find Providers by Specialty
                    {/* <span className="block absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-500"></span> */}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Internal Medicine
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Cardiovascular Disease
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Family Medicine
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Neurology</li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Gastroenterology
                  </li>
                  <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                    <Link href={"/"}>View All</Link>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="text-sm cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("procedure")}
              onMouseLeave={handleMouseLeave}
            >
              Find Providers by Procedure
              {hoveredNavItem === "procedure" && (
                <ul className="absolute z-10 bg-white rounded-md mt-[-16px] text-black py-2 w-[250px] shadow-lg">
                  <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                    Find Providers by Procedure
                    {/* <span className="block absolute bottom-0 left-0 w-full h-[2px] bg-black transition-all duration-500"></span> */}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    TMS Transcranial Magnetic Stimulation
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Ketamine Infusion Therapy
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Colonoscopy</li>
                  <li className="px-4 py-2 hover:bg-gray-200">ADHD Testing</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Hernia Repair</li>
                  <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                    <Link href={"/"}>View All</Link>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="text-sm cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("condition")}
              onMouseLeave={handleMouseLeave}
            >
              Find Providers by Condition
              {hoveredNavItem === "condition" && (
                <ul className="absolute z-10 bg-white rounded-md mt-[-16px] text-black py-2 w-[250px] shadow-lg">
                  <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                    Find Providers by Condition
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">HIV Infection</li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Chronic Fatigue Syndrome
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">Osteoporosis</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Autism</li>
                  <li className="px-4 py-2 hover:bg-gray-200">Lymphedema</li>
                  <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                    <Link href={"/"}>View All</Link>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="text-sm cursor-pointer"
              onMouseEnter={() => handleMouseEnter("providers")}
              onMouseLeave={handleMouseLeave}
            >
              Find All Providers
              {hoveredNavItem === "providers" && (
                <ul className="absolute z-10 bg-white rounded-md mt-[-16px] text-black py-2 w-[200px] shadow-lg">
                  <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                    Find All Providers
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200">By Location</li>
                  <li className="px-4 py-2 hover:bg-gray-200">
                    Newly Added Providers
                  </li>
                </ul>
              )}
            </div>
            <div className="text-sm flex items-center gap-2 cursor-pointer">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 1V4H17V19H5.00378C3.89709 19 3 18.1029 3 16.9962V2.99744C3 1.89429 3.89429 1 4.99744 1H14ZM5.00378 18H16V5H5C4.63385 5 4.29517 4.89441 4 4.7226V16.9962C4 17.5497 4.45032 18 5.00378 18ZM13 2H5C4.44861 2 4 2.44861 4 3C4 3.55139 4.44861 4 5 4H13V2ZM11 10H13C13.5523 10 14 10.4477 14 11C14 11.5522 13.5523 12 13 12H11V14C11 14.5522 10.5523 15 10 15C9.44769 15 9 14.5522 9 14V12H7C6.44769 12 6 11.5522 6 11C6 10.4477 6.44769 10 7 10H9V8C9 7.44769 9.44769 7 10 7C10.5523 7 11 7.44769 11 8V10Z"
                  fill="white"
                ></path>
              </svg>
              <span className="hover:underline">LIST YOUR PRACTICE</span>
            </div>
          </nav>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <IoClose size={30} onClick={toggleSidebar} />
        </div>
        <nav className="flex flex-col gap-10 items-start p-4">
          <div
            className="text-sm cursor-pointer relative w-full"
            onClick={() => handleDropdownToggle("specialty")}
          >
            <span className="flex items-center gap-2">
              Find Providers by Specialty
              <IoIosArrowDown
                className={`${
                  openDropdown === "specialty" &&
                  "rotate-180 transition duration-150"
                }`}
              />
            </span>
            {openDropdown === "specialty" && (
              <ul className="bg-white rounded-md text-black py-2 w-full shadow-lg">
                <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                  Find Providers by Specialty
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Internal Medicine
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Cardiovascular Disease
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">Family Medicine</li>
                <li className="px-4 py-2 hover:bg-gray-200">Neurology</li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Gastroenterology
                </li>
                <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                  <Link href={"/"}>View All</Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className="text-sm cursor-pointer relative w-full"
            onClick={() => handleDropdownToggle("procedure")}
          >
            <span className="flex items-center gap-2">
              Find Providers by Procedure{" "}
              <IoIosArrowDown
                className={`${
                  openDropdown === "procedure" &&
                  "rotate-180 transition duration-150"
                }`}
              />
            </span>

            {openDropdown === "procedure" && (
              <ul className="bg-white rounded-md text-black py-2 w-full shadow-lg">
                <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                  Find Providers by Procedure
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  TMS Transcranial Magnetic Stimulation
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Ketamine Infusion Therapy
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">Colonoscopy</li>
                <li className="px-4 py-2 hover:bg-gray-200">ADHD Testing</li>
                <li className="px-4 py-2 hover:bg-gray-200">Hernia Repair</li>
                <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                  <Link href={"/"}>View All</Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className="text-sm cursor-pointer relative w-full"
            onClick={() => handleDropdownToggle("condition")}
          >
            {/* Find Providers by Condition */}
            <span className="flex items-center gap-2">
              Find Providers by Condition
              <IoIosArrowDown
                className={`${
                  openDropdown === "condition" &&
                  "rotate-180 transition duration-150"
                }`}
              />
            </span>
            {openDropdown === "condition" && (
              <ul className="bg-white rounded-md text-black py-2 w-full shadow-lg">
                <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                  Find Providers by Condition
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">HIV Infection</li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Chronic Fatigue Syndrome
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">Osteoporosis</li>
                <li className="px-4 py-2 hover:bg-gray-200">Autism</li>
                <li className="px-4 py-2 hover:bg-gray-200">Lymphedema</li>
                <li className="px-4 text-secondary py-2 mt-1 hover:bg-gray-200">
                  <Link href={"/"}>View All</Link>
                </li>
              </ul>
            )}
          </div>
          <div
            className="text-sm cursor-pointer relative w-full"
            onClick={() => handleDropdownToggle("providers")}
          >
            {/* Find All Providers */}
            <span className="flex items-center gap-2">
              Find All Providers
              <IoIosArrowDown
                className={`${
                  openDropdown === "providers" &&
                  "rotate-180 transition duration-150"
                }`}
              />
            </span>
            {openDropdown === "providers" && (
              <ul className="bg-white rounded-md text-black py-2 w-full shadow-lg">
                <li className="px-4 py-2 mb-1 font-bold text-[14px] text-textcolor relative">
                  Find All Providers
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">By Location</li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  Newly Added Providers
                </li>
              </ul>
            )}
          </div>
          <div className="text-sm flex items-center gap-2 cursor-pointer w-full">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 1V4H17V19H5.00378C3.89709 19 3 18.1029 3 16.9962V2.99744C3 1.89429 3.89429 1 4.99744 1H14ZM5.00378 18H16V5H5C4.63385 5 4.29517 4.89441 4 4.7226V16.9962C4 17.5497 4.45032 18 5.00378 18ZM13 2H5C4.44861 2 4 2.44861 4 3C4 3.55139 4.44861 4 5 4H13V2ZM11 10H13C13.5523 10 14 10.4477 14 11C14 11.5522 13.5523 12 13 12H11V14C11 14.5522 10.5523 15 10 15C9.44769 15 9 14.5522 9 14V12H7C6.44769 12 6 11.5522 6 11C6 10.4477 6.44769 10 7 10H9V8C9 7.44769 9.44769 7 10 7C10.5523 7 11 7.44769 11 8V10Z"
                fill="black"
              ></path>
            </svg>
            <span className="hover:underline">LIST YOUR PRACTICE</span>
          </div>
        </nav>
      </div>
    </>
  );
}
