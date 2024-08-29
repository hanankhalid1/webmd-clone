import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Specialtylist = [
  {
    title: "Dentist",
    slug: "/",
  },
  {
    title: "Dermatologist",
    slug: "/",
  },
  {
    title: "Endocrinologist",
    slug: "/",
  },
  {
    title: "Gastroenterologist",
    slug: "/",
  },
  {
    title: "Neurologist",
    slug: "/",
  },
  {
    title: "Obstetrician",
    slug: "/",
  },
  {
    title: "Ophthalmologist",
    slug: "/",
  },
  {
    title: "Pediatrician",
    slug: "/",
  },
  {
    title: "Primary Care Physician",
    slug: "/",
  },
  {
    title: "Psychiatrist",
    slug: "/",
  },
];

const Procedure = [
  {
    title: "Acupuncture",
    slug: "/",
  },
  {
    title: "ADD/ADHD Testing",
    slug: "/",
  },
  {
    title: "Colonoscopy",
    slug: "/",
  },
  {
    title: "Hernia Repair",
    slug: "/",
  },
  {
    title: "Hysterectomy",
    slug: "/",
  },
  {
    title: "Ketamine Infusion Therapy",
    slug: "/",
  },
  {
    title: "Medical Marijuana Consult",
    slug: "/",
  },
  {
    title: "Natural and Homeopathic",
    slug: "/",
  },
  {
    title: "Treatments",
    slug: "/",
  },
  {
    title: "Stem Cell Therapy",
    slug: "/",
  },
  {
    title: "Vasectomy",
    slug: "/",
  },
];

const Condition = [
  {
    title: "Alzheimer's Disease",
    slug: "/",
  },
  {
    title: "Attention Deficit Disorder (ADD)",
    slug: "/",
  },
  {
    title: "Dementia",
    slug: "/",
  },
  {
    title: "Erectile Dysfunction (ED)",
    slug: "/",
  },
  {
    title: "Hair Loss",
    slug: "/",
  },
  {
    title: "High Risk Pregnancy",
    slug: "/",
  },
  {
    title: "Lyme Disease",
    slug: "/",
  },
  {
    title: "Multiple Sclerosis (MS)",
    slug: "/",
  },
  {
    title: "Rheumatoid Arthritis",
    slug: "/",
  },
  {
    title: "Varicose Veins",
    slug: "/",
  },
];

const Locations = [
  {
    title: "Atlanta",
    slug: "/",
  },
  {
    title: "Austin",
    slug: "/",
  },
  {
    title: "Baltimore",
    slug: "/",
  },
  {
    title: "Birmingham",
    slug: "/",
  },
  {
    title: "Boston",
    slug: "/",
  },
  {
    title: "Buffalo",
    slug: "/",
  },
  {
    title: "Charlotte",
    slug: "/",
  },
  {
    title: "Chicago",
    slug: "/",
  },
  {
    title: "Cincinnati",
    slug: "/",
  },
  {
    title: "Cleveland",
    slug: "/",
  },
  {
    title: "Columbus",
    slug: "/",
  },
  {
    title: "Dallas",
    slug: "/",
  },
  {
    title: "Denver",
    slug: "/",
  },
  {
    title: "Detroit",
    slug: "/",
  },
  {
    title: "Hartford",
    slug: "/",
  },
  {
    title: "Houston",
    slug: "/",
  },
  {
    title: "Indianapolis",
    slug: "/",
  },
  {
    title: "Jacksonville",
    slug: "/",
  },
  {
    title: "Kansas City",
    slug: "/",
  },
  {
    title: "Las Vegas",
    slug: "/",
  },
  {
    title: "Los Angeles",
    slug: "/",
  },
  {
    title: "Louisville",
    slug: "/",
  },
  {
    title: "Memphis",
    slug: "/",
  },
  {
    title: "Miami",
    slug: "/",
  },
  {
    title: "Milwaukee",
    slug: "/",
  },
  {
    title: "Minneapolis",
    slug: "/",
  },
  {
    title: "Nashville",
    slug: "/",
  },
  {
    title: "New Orleans",
    slug: "/",
  },
  {
    title: "New York",
    slug: "/",
  },
  {
    title: "Oklahoma City",
    slug: "/",
  },
  {
    title: "Orlando",
    slug: "/",
  },
  {
    title: "Philadelphia",
    slug: "/",
  },
  {
    title: "Phoenix",
    slug: "/",
  },
  {
    title: "Pittsburgh",
    slug: "/",
  },
  {
    title: "Portland",
    slug: "/",
  },
  {
    title: "Portland",
    slug: "/",
  },
  {
    title: "Providence",
    slug: "/",
  },
  {
    title: "Raleigh",
    slug: "/",
  },
  {
    title: "Richmond",
    slug: "/",
  },
  {
    title: "Sacramento",
    slug: "/",
  },
  {
    title: "Saint Louis",
    slug: "/",
  },
  {
    title: "Salt Lake City",
    slug: "/",
  },
  {
    title: "San Antonio",
    slug: "/",
  },
  {
    title: "San Bernardino",
    slug: "/",
  },
  {
    title: "San Diego",
    slug: "/",
  },
  {
    title: "San Francisco",
    slug: "/",
  },
  {
    title: "San Jose",
    slug: "/",
  },
  {
    title: "Seattle",
    slug: "/",
  },
  {
    title: "Tampa",
    slug: "/",
  },
  {
    title: "Tampa",
    slug: "/",
  },
  {
    title: "Virginia Beach",
    slug: "/",
  },
  {
    title: "Washington DC",
    slug: "/",
  },
];

export default function SpecialistComponent() {
  return (
    <div className="pt-16 mx-[50px] overflow-hidden">
      <h1 className="font-[300] text-[42px] text-center font-sans">
        Healthcare specialists for everyone everywhere
      </h1>
      <div className="mt-10 grid grid-col-1 lg:grid-cols-3 items-start justify-center gap-[20px]">
        <div>
          <div>
            <h2 className="font-bold text-[18px] text-darkblue">
              BY SPECIALTY
            </h2>
            <div className="w-[40px] border-b-[3px] border-borderColor"></div>
            <div className="mt-5 flex">
              <div className="flex-1">
                {Specialtylist.slice(0, 5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Specialtylist.slice(5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Link
              href={"/"}
              className="text-secondary flex items-center text-[13px] hover:underline mt-1"
            >
              View all specialists
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div>
          <div className="border-l-[1px] border-gray-300 px-6 border-dashed">
            <h2 className="font-bold text-[18px] text-darkblue">
              BY PROCEDURE
            </h2>
            <div className="w-[40px] border-b-[3px] border-borderColor"></div>
            <div className="mt-5 flex">
              <div className="flex-1">
                {Procedure.slice(0, 5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Procedure.slice(5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-secondary ml-5 flex text-[13px] items-center gap- hover:underline mt-1"
          >
            View all procedures
            <IoIosArrowForward />
          </Link>
        </div>
        <div>
          <div className="border-l-[1px] border-gray-300 px-5 border-dashed">
            <h2 className="font-bold text-[18px] text-darkblue">
              BY CONDITION
            </h2>
            <div className="w-[40px] border-b-[3px] border-borderColor"></div>
            <div className="mt-5 flex">
              <div className="flex-1 mr-3">
                {Condition.slice(0, 5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Condition.slice(5).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-secondary ml-5 text-[13px] flex items-center gap- hover:underline mt-1"
          >
            View all conditions
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
      <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <div className=" mt-3 border-t-[1px] pt-3 border-gray-300 px-5 border-dashed">
            <h2 className="font-bold text-[18px] text-darkblue">BY LOCATION</h2>
            <div className="w-[40px] border-b-[3px] border-borderColor"></div>
            <div className="mt-5 flex flex-wrap lg:gap-1 gap-5">
              <div className="flex-1 mr-3">
                {Locations.slice(0, 13).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Locations?.slice(13, 26).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Locations?.slice(26, 39).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex-1">
                {Locations?.slice(39).map((specialty, index) => (
                  <div key={index} className="mt-[1px]">
                    <Link href={specialty.slug}>
                      <span className="text-[12px] hover:text-secondary text-textcolor">
                        {specialty.title}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link
            href={"/"}
            className="text-secondary ml-5 mb-3 text-[13px] flex items-center gap- hover:underline mt-1"
          >
            View all Locations
            <IoIosArrowForward />
          </Link>
        </div>
        <div>
          <img
            src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/physician_directory/images/SeolinkImg.png"
            alt=""
            className=" bg-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
