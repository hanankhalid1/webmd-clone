import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Slist = [
  {
    title: "Internal Medicine",
    slug: "/",
  },
  {
    title: "Cardiovascular Disease",
    slug: "/",
  },
  {
    title: "Family Medicine",
    slug: "/",
  },
  {
    title: "Neurology",
    slug: "/",
  },
  {
    title: "Gastroenterology",
    slug: "/",
  },
];

const PList = [
  {
    title: "TMS Transcranial Magnetic",
    slug: "/",
  },
  {
    title: "Stimulation",
    slug: "/",
  },
  {
    title: "Ketamine Infusion Therapy",
    slug: "/",
  },
  {
    title: "Colonoscopy",
    slug: "/",
  },
  {
    title: "ADHD Testing",
    slug: "/",
  },
  {
    title: "Hernia Repair",
    slug: "/",
  },
];
const CList = [
  {
    title: "HIV Infection",
    slug: "/",
  },
  {
    title: "Chronic Fatigue Syndrome",
    slug: "/",
  },
  {
    title: "Osteoporosis",
    slug: "/",
  },
  {
    title: "Autism",
    slug: "/",
  },
  {
    title: "Lymphedema",
    slug: "/",
  },
];
const ProList = [
  {
    title: "New York City doctors",
    slug: "/",
  },
  {
    title: "Los Angeles doctors",
    slug: "/",
  },
  {
    title: "Chicago doctors",
    slug: "/",
  },
  {
    title: "By Location",
    slug: "/",
  },
  {
    title: "Newly Added Providers",
    slug: "/",
  },
];
export default function Doctorlastcomponent() {
  return (
    <div>
      <div className="mx-10 pt-5">
        <Link
          href={"/"}
          className="text-secondary flex items-center text-[16px] hover:underline mt-1"
        >
          Find Doctors
          <IoIosArrowForward />
        </Link>
        <div className="border-b-[1px] border-gray-300 my-6"></div>
        {/* <hr className="mt-4 text-gray-800 mb-10" /> */}
        <div className="bg-white p-4 lg:p-10">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-10">
            <div>
              <div>
                <Link
                  href={"/"}
                  className="text-secondary hover:underline font-semibold"
                >
                  Find Providers by Specialty
                </Link>
              </div>
              <div>
                <div className="flex-1 mt-2">
                  {Slist?.map((specialty, index) => (
                    <div key={index} className="mt-[4px]">
                      <Link href={specialty.slug}>
                        <span className="text-[14px] hover:underline text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link
                  href={"/"}
                  className="text-secondary hover:underline font-semibold"
                >
                  Find Providers by Procedure
                </Link>
              </div>
              <div>
                <div className="flex-1 mt-2">
                  {PList?.map((specialty, index) => (
                    <div key={index} className="mt-[4px]">
                      <Link href={specialty.slug}>
                        <span className="text-[14px] hover:underline text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link
                  href={"/"}
                  className="text-secondary hover:underline font-semibold"
                >
                  Find Providers by Condition
                </Link>
              </div>
              <div>
                <div className="flex-1 mt-2">
                  {CList?.map((specialty, index) => (
                    <div key={index} className="mt-[4px]">
                      <Link href={specialty.slug}>
                        <span className="text-[14px] hover:underline text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link
                  href={"/"}
                  className="text-secondary hover:underline font-semibold"
                >
                  Find All Providers
                </Link>
              </div>
              <div>
                <div className="flex-1 mt-2">
                  {ProList?.map((specialty, index) => (
                    <div key={index} className="mt-[4px]">
                      <Link href={specialty.slug}>
                        <span className="text-[14px] hover:underline text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link
                  href={"/"}
                  className="text-secondary hover:underline font-semibold"
                >
                  List Your Practice
                </Link>
              </div>
              {/* <div>
                <div className="flex-1 mt-2">
                  {ProList?.map((specialty, index) => (
                    <div key={index} className="mt-[4px]">
                      <Link href={specialty.slug}>
                        <span className="text-[14px] hover:underline text-textcolor">
                          {specialty.title}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
