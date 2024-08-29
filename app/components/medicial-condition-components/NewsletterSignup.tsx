
import React from 'react';

const NewsletterSignup: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md flex-1">
      <div className="flex flex-col items-center">
        <img src="/images/medicial-conditions-pageimages/brain.png" alt="Brain" className="mb-4" />
        <h2 className="text-xl font-bold mb-2">Sign up for ADDitude's Free ADHD Newsletter</h2>
        <p className="mb-4 text-center">Get news and information about ADHD from our partner, ADDitude</p>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="border rounded p-2 w-full mb-4"
        />
        <button className="bg-gray-500 text-white py-2 px-4 rounded">Subscribe</button>
        <p className="text-xs text-center mt-4">
          By clicking Subscribe, I agree to the <a href="#" className="text-blue-500">WebMD Terms & Conditions</a> & <a href="#" className="text-blue-500">Privacy Policy</a> and understand that I may opt out of WebMD subscriptions at any time.
        </p>
      </div>
    </div>
  );
}

export default NewsletterSignup;
