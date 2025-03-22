import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import MyResearch from "../MyReseraches/MyResearch"

const ProfileDetails = () => {
  return (
    <section className="container mx-auto w-[90%] py-10  lg:my-[60px] my-10  sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row bg-white  rounded-2xl overflow-hidden border border-gray-200">
      {/* Left Side: Profile Image and Profession */}
      <div className="lg:w-1/4 bg-gradient-to-b from-[#f9f9f9] via-gray-50 to-gray-100 p-8 flex flex-col items-center text-center space-y-6">
        <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-[#bc986b] shadow-md">
          <Image
            src="/a_sir.png"
            alt="Profile"
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
          John Doe
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Senior Software Engineer
        </p>
        <p className="text-sm sm:text-base text-[#bc986b] font-medium uppercase tracking-wide">
          Tech Enthusiast | Mentor
        </p>
      </div>

      {/* Right Side: About Bio */}
      <div className="lg:w-2/3 p-8 lg:p-10 flex flex-col space-y-8">
        <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 border-b pb-2">
          About Me
        </h3>
        <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
          I am a passionate software engineer with over 8 years of experience
          in web development and team leadership. My expertise includes
          creating scalable solutions, mentoring developers, and driving
          innovation in the tech space. I thrive on solving complex problems
          and staying updated with the latest technologies.
        </p>

        <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 border-b pb-2">
          Interests
        </h3>
        <ul className="list-disc pl-5 text-gray-700 text-base lg:text-lg space-y-2">
          <li>Building high-performance web applications</li>
          <li>Exploring AI and machine learning</li>
          <li>Mentoring young developers</li>
          <li>Reading books on personal growth</li>
        </ul>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Enhanced Buttons */}
          <Button className="bg-gradient-to-r from-[#bc986b] to-yellow-500 text-white px-8 py-3 text-lg rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
            Contact Me
          </Button>
        </div>
       
      </div>
      
    </div>
    <div className=" my-3">
        <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2 rounded-none">
        <TabsTrigger className="rounded-none" value="Ongoing">Ongoing Project</TabsTrigger>
        <TabsTrigger className="rounded-none"   value="Pulications">Pulications</TabsTrigger>
      </TabsList>
      <TabsContent value="Ongoing">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nobis!</p>
      </TabsContent>
      <TabsContent value="Pulications">
      <MyResearch></MyResearch>
      </TabsContent>
    </Tabs>
        </div>
  </section>
  )
}

export default ProfileDetails
