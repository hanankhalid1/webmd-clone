import React from "react";

export default function BannerSection() {
  return (
    <div>
      <div
        className="gap-5  grid grid-cols-1 lg:grid-cols-6  items-center p-5 lg:p-10"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "450px",
          width: "100%",
          backgroundImage:
            'url("https://img.wbmdstatic.com/webmd_static_vue/091e9c5e81c15e91/client/img/top_hospitals_base.42481cd7.webp")',
        }}
      >
        <div className="lg:col-span-2">
          <img
            src="https://img.wbmdstatic.com/webmd_static_vue/091e9c5e81c15e91/client/img/top_hospitals_portraits.7642da85.webp"
            alt=""
            className="bg-contain"
          />
        </div>
        <div className="lg:col-span-1 flex justify-center lg:ml-[-50px] mt-5">
          <img
            src="https://img.wbmdstatic.com/webmd_static_vue/091e9c5e81c15e91/client/img/patient_choice.67e2b7df.svg"
            alt=""
            className="bg-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="text-white lg:col-span-3 ml-5 w-full">
          <div>
            <h1 className="font-bold text-[24px]">WebMD Choice Awards</h1>
            <h4 className="text-[42px] font-[300]">Power to the Patients</h4>
            <p className="my-6">
              You need information that you can trust when seeking care. The
              WebMD Choice Awards is the only hospital recognition program based
              on the opinion of patients and health care providers. Because we
              believe when patients have a voice, everybody wins.
            </p>
            <button className=" border-[1px] border-white px-5 py-2 rounded-full text-[12px] flex justify-center items-center hover:border-[2px]">
              SEE HOSPITAL RANKINGS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
