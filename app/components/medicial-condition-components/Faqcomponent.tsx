import Link from "next/link";
import React from "react";

export default function FaqComponent({ condition }: any) {
  return (
    <div className="p-10 mt-4 mx-[5%]">
      <div>
        {condition.faqsec?.map((item: any, i: any) => {
          return (
            <div key={i}>
              <div className="flex justify-between border-b border-gray-400">
                <h3 className="text-primary text-[1.25rem]">
                  {item?.number} /
                  <span className="font-bold"> {item?.title}</span>
                </h3>
                <Link
                  href={"/"}
                  className="text-secondary hover:bg-hcolor p-1 text-[1.125rem] font-semibold border-b-[2px] border-secondary "
                >
                  View All
                </Link>
              </div>
              <div
                className={`flex lg:flex-nowrap flex-wrap gap-8 mt-8 mb-8 ${
                  i % 2 !== 0 && "flex-row-reverse"
                }`}
              >
                <div className="w-[80%]">
                  <img src={item?.fimage} alt="" className="rounded-md" />
                </div>
                <div className="flex flex-col gap-6 mt-6 w-full">
                  {item?.qlist?.map((faq: any, i: any) => {
                    return (
                      <Link key={i} href={faq?.slug}>
                        <h1 className="font-bold text-[1.5rem] hover:text-secondary">
                          {faq?.question}
                        </h1>
                        <h4 className="text-textcolor">{faq?.answer}</h4>
                        <div className="mt-3 border-b border-[1px]"></div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
