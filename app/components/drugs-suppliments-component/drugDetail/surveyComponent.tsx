import React from "react";
import { FaChevronDown } from "react-icons/fa";

const SurveyComponent: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-10 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 border-1 border-gray-300">
        <div className="bg-[#edf0ff] rounded-t-lg p-2 w-[15%] text-blue-600 text-sm">
          Drug Survey
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">
            Are you currently using Abilify?
          </h2>
          <div className="flex space-x-4 mb-4">
            <label className="flex items-center">
              <input type="radio" name="abilify" className="mr-2" />
              Yes
            </label>
            <label className="flex items-center">
              <input type="radio" name="abilify" className="mr-2" />
              No
            </label>
          </div>
          <div className="flex">
            <p className="text-gray-500 text-sm">
              This survey is being conducted by the WebMD marketing sciences
              department.
            </p>
            <span className="text-gray-400 text-sm mt-1 ml-1">
              <FaChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm text-gray-500 space-y-4">
        <p>
          Selected from data included with permission and copyrighted by First
          Databank, Inc. This copyrighted material has been downloaded from a
          licensed data provider and is not for distribution, except as may be
          authorized by the applicable terms of use.
        </p>
        <p>
          CONDITIONS OF USE: The information in this database is intended to
          supplement, not substitute for, the expertise and judgment of
          healthcare professionals. The information is not intended to cover all
          possible uses, directions, precautions, drug interactions or adverse
          effects, nor should it be construed to indicate that use of a
          particular drug is safe, appropriate or effective for you or anyone
          else. A healthcare professional should be consulted before taking any
          drug, changing any diet or commencing or discontinuing any course of
          treatment.
        </p>
      </div>
    </div>
  );
};

export default SurveyComponent;
