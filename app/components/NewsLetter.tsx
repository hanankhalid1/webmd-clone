import React from "react";

const Newsletter: React.FC = () => {
  return (
    <div className="py-12 px-6 mx-[5%] lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#00157c] rounded-sm">
        <div className="text-center lg:text-left text-white p-6 lg:p-12">
          <h2 className="text-3xl font-bold mb-4">Free WebMD Newsletters</h2>
          <p className="mb-6 text-xl">
            Doctor-approved health and wellness information delivered to your
            inbox.
          </p>
          <div className="flex flex-wrap items-center mb-6 space-x-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Daily Updates</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Women&apos;s Health</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>Good Health</span>
            </label>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 rounded-l bg-white text-black placeholder-gray-500 mb-2 md:mb-0 md:mr-0 md:rounded-tr-none md:rounded-br-none md:w-60"
              // Adjusted width and margins for responsiveness
            />
            <button className="p-3 bg-gray-500 text-white rounded-r md:rounded-tl-none md:rounded-bl-none">
              Subscribe
            </button>
          </div>

          <p className="text-base mb-6">
            By clicking Subscribe, I agree to the WebMD Terms &amp; Conditions
            and Privacy Policy and understand that I may opt out of WebMD
            subscriptions at any time.
          </p>
          <div>
            <button
              type="button"
              className="inline-block text-white py-3 px-6 rounded border font-semibold hover:bg-gray-200 hover:text-[#00157c] w-auto h-auto text-base"
            >
              See All WebMD Newsletters
            </button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end p-6 lg:p-12">
          <img src="/letter.png" alt="Newsletter" className="w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
