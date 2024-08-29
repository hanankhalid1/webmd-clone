import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function DoctorCard() {
  return (
    <>
      <div className="bg-[#caf6f9] min-h-fit mb-10 p-6 md:px-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-[300] text-[42px] font-sans ml-5 text-[#05284a]">
              Choose the healthcare that is right for you
            </h1>
            <div className="flex flex-wrap flex-col gap-4 mt-8">
              <div className="flex flex-wrap items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]  "></span>
                Profiles for{" "}
                <span className="font-bold"> 3 million+ physicians</span>
              </div>
              <div className="flex flex-wra  items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]"></span>
                <div className="flex-wrap">
                  <span className="font-bold justify-self-start">
                    Book appointments online
                  </span>{" "}
                  including Video Visit and Chat Now options
                </div>
              </div>
              <div className="flex flex-wrap  items-center gap-2 text-[16px]">
                <span className="border-[#5ac6cd] px-2 border-b-[5px]"></span>
                Find <span className="font-bold">award winning hospitals</span>
                by specialty
              </div>
            </div>
          </div>
          <div className="mt-2">
            <img src="/images/doctor/doctor.png" alt="doctor" />
          </div>
        </div>
      </div>
      <div className="px-[70px]  flex justify-center flex-col">
        <h1 className="font-[300] text-[39px] font-sans  mb-10 text-[#05284a]">
          Popular specialties
        </h1>
        <div className="flex gap-5 items-center justify-center lg:justify-between flex-wrap">
          <div>
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/Primary-Care.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              PRIMARY CARE
            </Link>
          </div>
          <div>
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-dentist.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              DENTIST
            </Link>
          </div>
          <div>
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-OB-Gyn.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              OB-GYN
            </Link>
          </div>
          <div className="flex items-center flex-col">
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Dermatologist.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              DERMATOLOGIST
            </Link>
          </div>
          <div>
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Psychiatrist.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              PSYCHIATRIST
            </Link>
          </div>
          <div>
            <img
              src="https://img.webmd.com/vim/live/webmd/consumer_assets/site_images/physician_directory/images/homepage-Eye-Doctor.svg"
              alt="img"
              className="mb-4"
            />
            <Link
              href={"/"}
              className="text-[#05284a] font-semibold hover:underline "
            >
              EYE DOCTOR
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-[.5px] border-gray-300 my-16"></div>
      <div className="mt-2 mx-[50px]">
        <h1 className="text-2xl font-[700]">Top Doctors Near</h1>
        <h3 className="text-secondary text-2xl">Faisalabad, PB</h3>
        <button className="my-14 px-8 py-2 rounded-full text-secondary hover:text-white hover:bg-secondary transition duration-150 border-[1px] border-secondary">
          FIND YOUR DOCTOR
        </button>
        <div className="mb-20">
          <h1 className="text-lg flex">
            Physicians:{" "}
            <Link href={"/"} className="text-secondary  flex items-center">
              Claim Your Profile
              <IoIosArrowForward />
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
}
