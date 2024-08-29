"use client";
import React, { useState } from "react";
import Image from "next/image";

const ImageArticle = ({ condition }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm, "in", location);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
  };
  return (
    <>
      <div className="container mx-auto pt-20 px-1 ">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2">
            <Image
              src={condition?.imageSection?.sectionImage}
              alt="Healthy Beauty"
              width={800}
              height={400}
              className="rounded-lg shadow-lg w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-6 rounded-lg text-center md:w-1/2 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-4">
              {condition?.imageSection?.title}
            </h2>
            <p className="mb-4">
              Get wellness tips to help you live happier and healthier
            </p>
            <form onSubmit={handleSubscribe} className="flex justify-center">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-l-lg border border-gray-300"
              />
              <button
                type="submit"
                className="bg-gray-600 text-white p-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4">
              By clicking Subscribe, I agree to the WebMD{" "}
              <a href="#" className="text-blue-600">
                Terms & Conditions
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>{" "}
              and understand that I may opt out of WebMD subscriptions at any
              time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageArticle;
