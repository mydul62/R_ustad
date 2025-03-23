
import Team from "@/components/module/home/ourTeam/Team";
import { Input } from "@/components/ui/input";
import { GetAllResearchAssociate } from "@/services/reserarchers";

import { FaUserGraduate, FaChalkboardTeacher, FaUsersCog } from "react-icons/fa";

const page =async () => {
const data = await GetAllResearchAssociate()
const ascociates = data?.data

  return (
    <div className="relative">
    {/* Hero Section */}
    <div
      style={{
        backgroundImage: 'url("/teambg.jpg")',
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      backgroundSize: "cover"
      }}
      className="py-[200px] flex justify-center items-center flex-col"
    >
      <h2 className="text-5xl flex justify-center text-white gap-2 items-center font-bold mb-4 text-center">
        <span>
          Our <span className="text-yellow-500">Team Members</span>
        </span>
      </h2>
      <div className="text-white flex gap-3">
        <a href="/home" className="text-white hover:text-green-500">
          HOME
        </a>
        <span>/</span>
        <span className="uppercase">Team-member</span>
      </div>
    </div>

    <div className="flex container gap-5 mx-auto py-10">
  
      {/* Main Content */}
      <div className="flex-1  py-4">
        <div id="advisor-pannel" className="container w-[90%] mx-auto ">
        <div className="flex justify-between items-center  mb-11 ">
       <div>
       <h3 className=" text-3xl font-semibold">Our Team</h3>
       </div>
        <div className="">
        <Input className=" w-64"  placeholder="Search here"></Input>
        </div>
        {/* search field */}
        </div>
          <Team  allMembers={ascociates}/>
        </div>
    
      </div>
    </div>
  </div>
  
  )
}

export default page
