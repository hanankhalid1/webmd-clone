import React from "react";

interface DividerProps {
  title: string;
}

const Divider: React.FC<DividerProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center my-8 w-full">
      <h2 className="text-2xl font-bold text-blue-900 mb-2">{title}</h2>
      <hr className="border-gray-300 mb-8 w-full" />
    </div>
  );
};

export default Divider;
