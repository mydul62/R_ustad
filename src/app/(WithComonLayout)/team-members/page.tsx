
import Team from "@/components/module/home/ourTeam/Team";
import { GetAllResearchAssociate } from "@/services/AuthService";
import { FaUserGraduate, FaChalkboardTeacher, FaUsersCog } from "react-icons/fa";

const page =async () => {
const data = await GetAllResearchAssociate()
const ascociates = data?.data
console.log(ascociates)
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
      {/* Sidebar */}
      <div className="hidden lg:block w-[300px] bg-white border-r border-gray-300 shadow-sm sticky top-16 h-screen p-6">
        <h3 className="text-xl font-bold mb-6">Navigation</h3>
        <ul className="space-y-6">
          <li>
            <a
              href="#advisor-pannel"
              className="flex items-center text-gray-800 hover:text-yellow-500 font-medium transition duration-200"
            >
              <FaUsersCog className="mr-4 text-xl" />
              Advisor Panel
            </a>
          </li>
          <li>
            <a
              href="#mentor"
              className="flex items-center text-gray-800 hover:text-yellow-500 font-medium transition duration-200"
            >
              <FaChalkboardTeacher className="mr-4 text-xl" />
              Mentors
            </a>
          </li>
          <li>
            <a
              href="#lead-team"
              className="flex items-center text-gray-800 hover:text-yellow-500 font-medium transition duration-200"
            >
              <FaUserGraduate className="mr-4 text-xl" />
              Lead Team
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1  py-4">
        <div id="advisor-pannel" className="container w-[90%] mx-auto ">
          <Team title_pre="Advisor" title_next="Pannel" allMembers={ascociates}/>
        </div>
        {/* <div id="mentor" className="container mx-auto w-[90%]  py-10">
          <Team title_pre="Our" title_next="Mentors" />
        </div>
        <div id="lead-team" className="container mx-auto w-[90%]  py-10">
          <Team title_pre="Our" title_next="Lead Team" /> */}
        {/* </div> */}
      </div>
    </div>
  </div>
  
  )
}

export default page
