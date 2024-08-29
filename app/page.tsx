import Image from "next/image";
import Advertisment from "./components/Advertisments";
import HeroSection from "./components/HeroSection";
import LivingHealthySection from "./components/LivingHealthy";
import HealthNews from "./components/HealthNews";
import Newsletter from "./components/NewsLetter";
import InsightsSection from "./components/InsightSection";
import Navbar from "./components/Navbar";
import ConditionTopics from "./components/ConditionTopics";
import SpecialSection from "./components/SpecialSection";
import TrendingTopics from "./components/TrendingTopics";
import FeaturedStories from "./components/FeaturedStories";
import ContributorsSection from "./components/ContributorsSection";
import ToolAndCalculator from "./components/ToolAndCalculator";
import HealthTopics from "./components/HealthTopics";
import ContentWithImage from "./components/ContentWithImage";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Advertisment />
      <LivingHealthySection />
      <ConditionTopics />
      <HealthNews />
      <InsightsSection />
      <SpecialSection />
      <TrendingTopics />
      <FeaturedStories />
      <Newsletter />
      <ContributorsSection />
      <ToolAndCalculator />
      <HealthTopics />
      <ContentWithImage />
      <Footer />
    </>
  );
}
