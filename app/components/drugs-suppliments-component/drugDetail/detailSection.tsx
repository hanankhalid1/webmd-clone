import React from "react";
import Add from "../../add";
import { IoIosArrowForward } from "react-icons/io";

interface UsesSectionProps {
  headingStyle?: string;
}

const DetailSection = ({ headingStyle }: UsesSectionProps) => {
  return (
    <div className="bg-white p-6 rounded-lg">
      <div className="text-center flex justify-center">
        <h2
          className="inline-block items-center mb-8 text-[#1b1b1b] font-sourceSansPro font-bold text-2xl leading-tight md:text-3xl md:leading-snug lg:text-4xl lg:leading-normal px-2"
          style={{
            background: "linear-gradient(180deg, #f8f8f8 60%, #d2d9ff 40%)",
            display: "inline",
            padding: "0 10px",
          }}
        >
          USES
        </h2>
      </div>
      <p className="text-[#1b1b1b] font-sans ">
        This medication is used to treat certain mental/mood disorders (such as
        bipolar disorder, schizophrenia, Tourette's syndrome, and irritability
        associated with autistic disorder). It may also be used in combination
        with other medication to treat depression. Aripiprazole belongs to a
        class of drugs known as atypical antipsychotics. It works by helping to
        restore the balance of certain natural substances in the brain.
      </p>
      <div className="m-4 flex justify-start items-start">
        <strong className="text-[#1b1b1b] text-2xl font-sans">
          How to use Abilify
        </strong>
      </div>
      <p>
        TRead the Medication Guide and, if available, the Patient Information
        Leaflet provided by your pharmacist before you start taking aripiprazole
        and each time you get a refill. If you have any questions, ask your
        doctor or pharmacist. Take this medication by mouth with or without food
        as directed by your doctor, usually once daily. The dosage is based on
        your medical condition, response to treatment, age, and other
        medications you may be taking. Be sure to tell your doctor and
        pharmacist about all the products you use (including prescription drugs,
        nonprescription drugs, and herbal products). To reduce your risk of side
        effects, your doctor may direct you to start this medication at a low
        dose and gradually increase your dose. Follow your doctor's instructions
        carefully.
      </p>
      <Add />
      <p>
        The manufacturer directs to swallow this medication whole. However, many
        similar drugs (immediate-release tablets) can be split/crushed. Follow
        your doctor's direction on how to take this medication. If you are using
        the liquid form of this medication, carefully measure the dose using a
        special measuring device/cup. Do not use a household spoon because you
        may not get the correct dose.
      </p>
      <div className="flex justify-end mt-4 mb-6">
        <button className="flex items-center px-5 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-100 focus:outline-none hover:text-blue-600 focus:ring-opacity-75">
          <span className="mr-2">Next</span>
          <IoIosArrowForward />
        </button>
      </div>
      <hr className="my-4 border-gray-300 mt-12" />
    </div>
  );
};

export default DetailSection;
