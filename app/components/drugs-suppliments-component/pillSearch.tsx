import React from "react";

const PillSearch: React.FC = () => {
  return (
    <div
      className="relative w-full bg-cover bg-center mb-64 md:mb-24 lg:mb-28 sm:mb-24"
      style={{
        backgroundImage: "url('/drugs-background.jpg')",
        height: "200px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-primary text-3xl sm:text-3xl md:text-5xl font-sans font-bold leading-normal mt-2 capitalize text-center">
          Pill Identifier
        </h1>
      </div>
      <div className="absolute top-[75%] bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
        <div className="bg-blue-100 py-3 px-5 rounded-lg flex flex-col space-y-2 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Enter Pill Imprint"
              className="px-4 py-2 md:py-4 pr-10 border border-gray-300 focus:border-gray-400 focus:outline-none flex-1 w-full sm:w-auto rounded"
            />
            <select className="px-4 py-2 md:py-4 pr-10 border border-gray-300 focus:border-gray-400 focus:outline-none flex-1 w-full sm:w-auto mt-2 sm:mt-0 rounded">
              <option value="select">Select Color</option>
              <option value="Not Selected">Not Selected</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
              <option value="Yellow">Yellow</option>
              <option value="Purple">Purple</option>
              <option value="Peach">Peach</option>
              <option value="Gray">Gray</option>
              <option value="White">White</option>
              <option value="Off White">Off White</option>
              <option value="Pink">Pink</option>
              {/* Add more color options here */}
            </select>
            <select className="px-4 py-2 md:py-4 pr-10 border border-gray-300 focus:border-gray-400 focus:outline-none flex-1 w-full sm:w-auto mt-2 sm:mt-0 rounded">
              <option value="select">Select Shape</option>
              <option value="Not Selected">Not Selected</option>
              <option value="round">Round</option>
              <option value="oval">Oval</option>
              <option value="oval">Square</option>
              <option value="oval">Oblong</option>
              <option value="oval">Diamond</option>
              <option value="oval">Others</option>
              {/* Add more shape options here */}
            </select>
            <button className="bg-gray-300 text-gray-600 font-semibold px-4 py-2 md:py-4 rounded focus:outline-none flex-1 w-full sm:w-auto mt-2 sm:mt-0">
              View Result(s)
            </button>
          </div>
          <div className="text-center sm:text-left mt-2">
            <a href="#" className="text-blue-700 hover:text-blue-500 underline">
              Help
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-blue-700 hover:text-blue-500 underline">
              No Text on Pill?
            </a>
          </div>
        </div>
        <p className="text-xs text-center mt-4">
          <span className="text-blue-500">Disclaimer</span>: By continuing to
          view the drug information on this site, you agree to abide by the
          express{" "}
          <a href="#" className="text-blue-500">
            terms of use
          </a>{" "}
          governing the display and use of such information.
        </p>
      </div>
    </div>
  );
};

export default PillSearch;
