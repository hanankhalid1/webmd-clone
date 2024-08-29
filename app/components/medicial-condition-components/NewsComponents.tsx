import React from "react";

export default function NewsComponents({ condition }: any) {
  return (
    <div className="p-10 mx-[5%]">
      <div>
        <div className="flex justify-between border-b border-gray-400">
          <h3 className="text-primary text-[1.25rem] font-semibold">News</h3>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-8 justify-center">
          {condition.newssection?.map((item: any, i: any) => {
            return (
              <div
                key={i}
                className="bg-white p-7 rounded-sm col-span-12 md:col-span-6"
              >
                <h1 className="font-bold text-[20px] hover:text-secondary">
                  {item?.title}
                </h1>
                <h6 className="text-textcolor mt-3">{item?.description}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
