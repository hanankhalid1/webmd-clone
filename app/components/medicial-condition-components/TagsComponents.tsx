import Link from "next/link";
import React from "react";

export default function TagsComponents({ condition }: any) {
  return (
    <div className="p-10 mx-[5%]">
      <div className="flex justify-between border-b border-gray-400">
        <h3 className="text-primary text-[1.25rem] font-semibold">
          TOP SEARCH TERMS FOR {condition.title.toUpperCase()}
        </h3>
      </div>
      <div className="flex flex-wrap justify- gap-3 mb-10 mt-8">
        {condition.keywords.map((key: any, i: any) => {
          return (
            <Link
              key={i}
              className="bg-white text-secondary hover:text-white hover:bg-secondary py-2 px-3 rounded-full flex justify-center items-center"
              href={key?.slug}
            >
              {key?.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
