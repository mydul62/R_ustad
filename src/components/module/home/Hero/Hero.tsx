"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/hro.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full min-h-[600px] lg:h-[calc(100vh-86px)] relative border-b-[10px] border-[#bc986b] overflow-hidden"
    >
      {/* Content Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white z-10 flex items-center">
        <div className="container w-[90%] mx-auto h-full flex flex-col justify-center items-end text-right px-4 sm:px-6">
          <div className="max-w-[500px] space-y-4 animate-fadeIn">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold leading-tight">
              Enhance Your Learning Journey <br />
              <span className="text-[#bc986b] font-semibold">Unlock Your Potential</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#eee] leading-relaxed">
              Discover expert courses and resources to boost your skills.
              Transform your career <br className="hidden md:block" /> with practical and actionable knowledge.
            </p>
            <Button
              size="lg"
              className="bg-[#bc986b] hover:bg-yellow-400 px-5 py-3 text-sm sm:text-base md:text-lg rounded-md shadow-md transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
