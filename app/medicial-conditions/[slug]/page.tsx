// "use client";
// import ADHDSupport from "@/app/components/medicial-condition-components/ADHDSupport";
// import FaqComponent from "@/app/components/medicial-condition-components/Faqcomponent";
// import HeroBanner from "@/app/components/medicial-condition-components/HeroBanner";
// import NewsComponents from "@/app/components/medicial-condition-components/NewsComponents";
// import NewsletterSignup from "@/app/components/medicial-condition-components/NewsletterSignup";
// import TagsComponents from "@/app/components/medicial-condition-components/TagsComponents";
// import Navbar from "@/app/components/Navbar";
// import { MedicialConditionsData } from "@/constants/medicial-conditions-data";
// import { useRouter } from "next/navigation";
// import React from "react";

// export default function ConditionsDetail() {
//   const router: any = useRouter();
//   const slug = router.query;
//   // Fetch and render the condition details based on the slug
//   const condition = MedicialConditionsData.find(
//     (condition) => condition.slug === slug
//   );
//   console.log("condition", condition);
//   return (
//     <div>
//       <Navbar />
//       <HeroBanner condition={condition} />
//       <FaqComponent condition={condition} />
//       <NewsComponents condition={condition} />
//       <TagsComponents condition={condition}/>
//       <div className="flex flex-col md:flex-row gap-6 p-6">
//         <NewsletterSignup />
//         <ADHDSupport />
//       </div>
//     </div>
//   );
// }

"use client";
import HeroSection from "@/app/components/doctor/HeroSection";
import Footer from "@/app/components/Footer";
import ADHDSupport from "@/app/components/medicial-condition-components/ADHDSupport";
import BlogPost from "@/app/components/medicial-condition-components/BlogPost";
import FaqComponent from "@/app/components/medicial-condition-components/Faqcomponent";
import HeroBanner from "@/app/components/medicial-condition-components/HeroBanner";
import NewsComponents from "@/app/components/medicial-condition-components/NewsComponents";
import NewsletterSignup from "@/app/components/medicial-condition-components/NewsletterSignup";
import TagsComponents from "@/app/components/medicial-condition-components/TagsComponents";
import Navbar from "@/app/components/Navbar";
import { MedicialConditionsData } from "@/constants/medicial-conditions-data";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ConditionsDetail() {
  const { slug } = useParams();
  const [condition, setCondition] = useState(null);

  // useEffect(() => {
  //   console.log("slug:", slug);
  //   console.log("MedicialConditionsData:", MedicialConditionsData);

  //   if (slug) {
  //     const fetchedCondition: any = MedicialConditionsData.find(
  //       (condition) =>  condition.slug === slug
  //     );
  //     console.log("fetchedCondition:", fetchedCondition);
  //     setCondition(fetchedCondition);
  //   }
  // }, [slug]);

  console.log("condition", condition);

  const fetchCondition = MedicialConditionsData.find((item) => {
    return item.slug === slug;
  });

  return (
    <div className="bg-[#f8f8f8]">
      <Navbar />
      <HeroBanner condition={fetchCondition} />
      <FaqComponent condition={fetchCondition} />
      <NewsComponents condition={fetchCondition} />
      <TagsComponents condition={fetchCondition} />
      <div className="flex flex-col mx-[5%] md:flex-row gap-6 p-6">
        <NewsletterSignup />
        <ADHDSupport />
      </div>
      <Footer />
    </div>
  );
}
