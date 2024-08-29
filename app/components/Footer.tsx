"use client";
import React, { useState } from "react";
import { SlSocialInstagram } from "react-icons/sl";
import { BsFacebook } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa6";

const Footer: React.FC = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkHover = (link: string) => {
    setActiveLink(link);
  };

  return (
    <footer className="bg-[#000625] text-white py-10 pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="max-w-md mb-8 md:mb-0">
            <h3 className="text-xl font-bold">
              Sign up for our free Good Health Newsletter
            </h3>
            <p className="text-sm">
              Get wellness tips to help you live happier and healthier
            </p>
            <div className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 w-full sm:w-64 rounded-md text-black mb-2 sm:mb-0 sm:mr-2"
              />
              <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-4">
              By clicking Subscribe, I agree to the WebMD{" "}
              <a href="#" className="underline">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              and understand that I may opt out of WebMD subscriptions at any
              time.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end mt-10 md:mt-0">
            <div className="flex items-center space-x-4 mb-4">
              <a href="#" onMouseEnter={() => handleLinkHover("facebook")}>
                <BsFacebook className="w-6 h-6" />
              </a>
              <a href="#" onMouseEnter={() => handleLinkHover("twitter")}>
                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="#" onMouseEnter={() => handleLinkHover("instagram")}>
                <SlSocialInstagram className="w-6 h-6" />
              </a>
              <a href="#" onMouseEnter={() => handleLinkHover("tiktok")}>
                <FaTiktok className="w-6 h-6" />
              </a>
              <a href="#" onMouseEnter={() => handleLinkHover("pinterest")}>
                <img src="/pinterst.svg" alt="Pinterest" className="w-6 h-6" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#">
                <img
                  src="/ios-dwnld.png"
                  alt="App Store"
                  className="w-24 h-8"
                />
              </a>
              <a href="#">
                <img
                  src="/android-dwnld.png"
                  alt="Google Play"
                  className="w-24 h-8"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-start space-x-8 font-sans mb-8 md:mb-0">
          <a
            href="#"
            className={`pt-1 pb-1  mb-3 text-base block md:inline-block ${
              activeLink === "policies"
                ? "bg-[#d2d9ff] text-blue-600 rounded-md"
                : ""
            }`}
            onMouseEnter={() => handleLinkHover("policies")}
          >
            Policies
          </a>
          <a
            href="#"
            className={`pt-1 pb-1 mb-3 text-base block md:inline-block ${
              activeLink === "about"
                ? "bg-[#d2d9ff] text-blue-600 rounded-md"
                : ""
            }`}
            onMouseEnter={() => handleLinkHover("about")}
          >
            About
          </a>
          <a
            href="#"
            className={`pt-1 pb-1 mb-3 text-base block md:inline-block ${
              activeLink === "advertisers"
                ? "bg-[#d2d9ff] text-blue-600 rounded-md"
                : ""
            }`}
            onMouseEnter={() => handleLinkHover("advertisers")}
          >
            For Advertisers
          </a>
        </div>

        <div className="text-xs text-center md:text-left mb-4 md:mb-0">
          <a href="#" className="text-xs hover:underline block mb-2">
            Privacy Policy
          </a>
          <a href="#" className="text-xs hover:underline block mb-2">
            Cookie Policy
          </a>
          <a href="#" className="text-xs hover:underline block mb-2">
            Editorial Policy
          </a>
          <a href="#" className="text-xs hover:underline block mb-2">
            Advertising Policy
          </a>
          <a href="#" className="text-xs hover:underline block mb-2">
            Correction Policy
          </a>
          <a href="#" className="text-xs hover:underline block mb-2">
            Terms of Use
          </a>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <a href="#" className="h-10 w-28">
            <img
              src="/seal.svg"
              alt="TRUSTe Certified Privacy"
              className="h-full w-full object-contain"
            />
          </a>
          <a href="#" className="h-10 w-28">
            <img
              src="/tag-registered.png"
              alt="TAG Registered"
              className="h-full w-full object-contain"
            />
          </a>
          <a href="#" className="h-10 w-28">
            <img
              src="/ad-choice.png"
              alt="AdChoices"
              className="h-full w-full object-contain"
            />
          </a>
        </div>

        <div className="text-xs text-center mt-4">
          © 2005 - 2024 WebMD LLC, an{" "}
          <a href="#" className="underline">
            Internet Brands
          </a>{" "}
          company. All rights reserved. WebMD does not provide medical advice,
          diagnosis or treatment.{" "}
          <a href="#" className="underline">
            See additional information.
          </a>
        </div>

        <div className="flex justify-center items-center mt-4">
          <a href="#" className="">
            <img
              src="/webmd-logo-white.svg"
              alt="WebMD Logo"
              className="h-8 w-24 object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
