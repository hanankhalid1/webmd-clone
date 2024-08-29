
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { menuItems } from "./menuItems";

type Menu = "conditions" | "drugs" | "wellbeing" | "more";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<Menu | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMouseEnter = (menu: Menu) => {
    setDropdownOpen(menu);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

  return (
    <nav className="bg-[#00157c] text-white p-4 flex items-center justify-between font-sans">
      <div className="flex items-center space-x-4">
        <div className="font-bold text-2xl lg:text-3xl">WebMD</div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars />
        </button>
        <div className="hidden md:flex ml-4 space-x-2 lg:space-x-10">
          {Object.keys(menuItems).map(
            (menu) =>
              menu !== "more" && (
                <div
                  className="relative group"
                  key={menu}
                  onMouseEnter={() => handleMouseEnter(menu as Menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="font-sans focus:outline-none hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-xs md:text-sm lg:text-lg flex items-center whitespace-nowrap">
                    {menu.charAt(0).toUpperCase() +
                      menu.slice(1).replace("-", " ")}
                    <svg
                      className="ml-1 lg:ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  {dropdownOpen === menu && (
                    <div
                      className={`absolute  bg-white text-black rounded-md shadow-lg z-50 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-100 p-4 grid ${
                        menu === "conditions"
                          ? "grid-cols-4 w-[50vw]"
                          : menu === "wellbeing"
                          ? "grid-cols-2 w-[35vw] bg-red-500 p-4"
                          : menu === "drugs"
                          ? "grid-cols-1 w-[15vw]"
                          : "grid-cols-1 w-[50vw]"
                      }`}
                      onMouseEnter={() => handleMouseEnter(menu as Menu)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {menuItems[menu as Menu].map((item: any, index: any) => (
                        <div
                          key={index}
                          className="flex flex-col space-y-2 whitespace-nowrap"
                        >
                          <Link
                            href={item.slug}
                            className="font-sans block px-4 py-2 hover:text-blue-700"
                          >
                            {item.name}
                          </Link>
                          {index < menuItems[menu as Menu].length - 1 && (
                            <hr className="my-1 border-gray-300" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
          )}
        </div>
        <div className="hidden md:flex space-x-2 lg:space-x-10">
          <Link
            href="/symptom-checker"
            className="font-sans hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-xs md:text-sm lg:text-lg whitespace-nowrap"
          >
            Symptom Checker
          </Link>
          <Link
            href="/find-doctor"
            className="font-sans hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-xs md:text-sm lg:text-lg whitespace-nowrap"
          >
            Find a Doctor
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("more")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="font-sans focus:outline-none hover:bg-white hover:text-[#00157c] px-2 py-1 rounded-md text-xs md:text-sm lg:text-lg flex items-center whitespace-nowrap">
              More
              <svg
                className="ml-1 lg:ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropdownOpen === "more" && (
              <div
                className="absolute  w-[15vw] bg-white text-black rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-100 p-4 grid grid-cols-1 whitespace-nowrap"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                {menuItems["more"].map((item: any, index: any) => (
                  <div
                    key={index}
                    className="flex flex-col space-y-2 whitespace-nowrap"
                  >
                    <Link
                      href={item.slug}
                      className="font-sans block px-4 py-2 hover:text-blue-700"
                    >
                      {item.name}
                    </Link>
                    {index < menuItems["more"].length - 1 && (
                      <hr className="my-1 border-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center space-x-2 lg:space-x-4 mr-4 lg:mr-20">
        <Link
          href="/subscribe"
          className="font-sans flex items-center hover:bg-white hover:text-[#00157c] px-2 lg:px-3 py-1 rounded-md border border-white text-xs md:text-sm lg:text-lg whitespace-nowrap"
        >
          <FiMail className="mr-1 lg:mr-2" />
          Subscribe
        </Link>
        <Link
          href="/login"
          className="font-sans hover:bg-white hover:text-[#00157c] px-2 lg:px-3 py-1 rounded-md text-xs md:text-sm lg:text-lg whitespace-nowrap"
        >
          Log In
        </Link>
        <FaSearch className="text-white cursor-pointer" />
      </div>

      {/* Sidebar for smaller screens */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="fixed left-0 top-0 h-full w-full bg-white text-black p-4 shadow-lg z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="font-bold text-2xl">WebMD</div>
              <button onClick={() => setSidebarOpen(false)}>
                <FaTimes className="text-xl" />
              </button>
            </div>
            <div className="space-y-6">
              {Object.keys(menuItems).map((menu) => (
                <div key={menu}>
                  <button
                    className="font-sans focus:outline-none hover:bg-gray-200 px-3 py-1 rounded-md text-base md:text-lg w-full text-left flex items-center justify-between whitespace-nowrap"
                    onClick={() =>
                      setDropdownOpen(
                        dropdownOpen === menu ? null : (menu as Menu)
                      )
                    }
                  >
                    {menu.charAt(0).toUpperCase() +
                      menu.slice(1).replace("-", " ")}
                  </button>
                  {dropdownOpen === menu && (
                    <div className="mt-2 pl-4 whitespace-nowrap">
                      {menuItems[menu as Menu].map((item: any, index: any) => (
                        <Link
                          key={index}
                          href={item.slug}
                          className="font-sans block px-4 py-2 hover:bg-gray-100 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/symptom-checker"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg whitespace-nowrap"
              >
                Symptom Checker
              </Link>
              <Link
                href="/find-doctor"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg whitespace-nowrap"
              >
                Find a Doctor
              </Link>
              <Link
                href="/subscribe"
                className="font-sans flex items-center hover:bg-gray-100 px-3 py-2 rounded-md border border-gray-300 text-base md:text-lg whitespace-nowrap"
              >
                <FiMail className="mr-2" />
                Subscribe
              </Link>
              <Link
                href="/login"
                className="font-sans block px-3 py-2 hover:bg-gray-100 rounded-md text-base md:text-lg whitespace-nowrap"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




