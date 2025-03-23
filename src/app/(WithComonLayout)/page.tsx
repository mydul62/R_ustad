"use client";

import BlogSection from "@/components/module/home/BlogSection/BlogSection";
import Hero from "@/components/module/home/Hero/Hero";
import OurTeam from "@/components/module/home/ourTeam/OurTeam";
import Pricing from "@/components/module/home/Pricing/Pricing";
import RecentPublishSection from "@/components/module/home/RecentPublishSection/RecentPublishSection";
import ResearchArea from "@/components/module/home/ResearchArea/ResearchArea";

const HomePage = () => {
  return (
    <div>
     <Hero/>
     <ResearchArea/>
     <OurTeam></OurTeam>
     <RecentPublishSection></RecentPublishSection>
     <BlogSection></BlogSection>
     <Pricing></Pricing> 
    </div>
  );
};

export default HomePage;
