import Image from "next/image";

import BannerSection from "@/components/BannerSection";
import DevCompany from "@/components/DevCompany";
import Projects from "@/components/Projects";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

import KeyMilestones from "@/components/KeyMilestones";

export default function Home() {
  return (
    <>
      <BannerSection />
      <DevCompany/>
      <Projects/>
      {/* <WhyChooseUsSection/> */}
      <KeyMilestones/>
     
     
    </>
  );
}
