// components/CollapsibleSection.tsx
"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface SectionProps {
  title: string;
  description: string;
}

const CollapsibleSection: React.FC<SectionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-semibold">{title}</span>
        <span>{isOpen ? <FaChevronUp className="text-blue-500 " /> : <FaChevronDown className="text-blue-500" />}</span>
      </button>
      {isOpen && <div className="py-2 text-gray-700">{description}</div>}
    </div>
  );
};

export default CollapsibleSection;
