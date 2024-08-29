import Image from "next/image";
import webmdmission from "/public/webmdmission.jpg";

const ContentWithImage: React.FC = () => {
  return (
    <div className="container mx-[5%] px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-white py-10 px-5 lg:px-20 rounded-md">
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <Image
            src={webmdmission}
            alt="Doctors Illustration"
            className="rounded-md"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-10">
          <h2 className="text-3xl font-bold mb-4">
            Our Content Is Different Because We Set the Bar Higher
          </h2>
          <p className="mb-4">
            As a leader in digital health publishing for more than 25 years,
            WebMD strives to maintain the most comprehensive and reliable source
            of health and medical information on the internet.
          </p>
          <p className="mb-4">
            We recognize the responsibility that comes along with being the most
            well-known and trusted health information platform — and we take
            that responsibility seriously by:
          </p>
          <div className="flex items-start mb-4">
            <h3 className="text-[38px] font-bold text-[#7384d8] mr-4">01</h3>
            <p className="font-normal text-[20px]">
              Charging our content creators to practice{" "}
              <span className="font-bold">journalistic principles</span> of
              excellence and provide objective, accurate, and balanced
              reporting.
            </p>
          </div>
          <div className="flex items-start mb-4">
            <h3 className="text-4xl font-bold text-[#7384d8] mr-4">02</h3>
            <p className="font-normal text-[20px]">
              Maintaining{" "}
              <span className="font-bold">editorial independence</span> and
              transparency into how we protect the integrity of our content.
            </p>
          </div>
          <div className="flex items-start mb-8">
            <h3 className="text-4xl font-bold text-[#7384d8] mr-4">03</h3>
            <p className="font-normal text-[20px]">
              Regularly reviewing and updating our content by working with our
              network of{" "}
              <span className="font-bold">
                more than 100 doctors and health experts
              </span>
              .
            </p>
          </div>
          <a
            href="#"
            className="text-[#3557ff] font-semibold text-lg hover:underline"
          >
            → Learn more about our Editorial Process
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentWithImage;
