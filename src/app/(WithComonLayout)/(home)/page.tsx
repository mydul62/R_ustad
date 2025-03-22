"use client";

import Hero from "@/components/module/home/Hero/Hero";
import Pricing from "@/components/module/home/Pricing/Pricing";
import ResearchArea from "@/components/module/home/ResearchArea/ResearchArea";

const HomePage = () => {
  return (
    <div>
     <Hero/>
     <ResearchArea/>
     <Pricing></Pricing> 
    </div>
  );
};

export default HomePage;
