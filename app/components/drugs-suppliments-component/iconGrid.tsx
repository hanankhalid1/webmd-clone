import React from "react";

interface Icon {
  src: React.ReactNode;
  alt: string;
  label: string;
  color?: string;
  bgColor?: string;
}

interface IconGridProps {
  icons: Icon[];
  heading?: string;
}

const IconGrid: React.FC<IconGridProps> = ({ icons, heading }) => {
  return (
    <div className="drug-resources-container mx-auto max-w-7xl mt-2">
      {heading && (
        <div className="title-bg text-center mb-5">
          <h2
            className="inline-block text-[#1b1b1b] font-sourceSansPro font-bold text-2xl leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal px-2"
            style={{
              background: "linear-gradient(180deg, #f8f8f8 60%, #d2d9ff 40%)",
              display: "inline",
              padding: "0 10px",
            }}
          >
            {heading}
          </h2>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mx-auto">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-start p-2 hover:bg-blue-100 cursor-pointer ${
              icon.color ? `text-${icon.color}` : ""
            }`}
            style={{ backgroundColor: icon.bgColor }}
          >
            <div className="w-18 h-18 mb-1 flex items-center justify-center">
              {icon.src}
            </div>
            <span className="text-primary hover:text-blue-900 font-semibold text-center text-base">
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;