"use client"

import { Card, CardContent } from "@/components/ui/card"
import { UserProfile } from "@/type"
import Image from "next/image"
import Link from "next/link"
import Marquee from "react-fast-marquee"
import { FaArrowRight, FaFacebook, FaGithub, FaLinkedin, FaReddit, FaUserCircle } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa";

type AllMenbers ={
allMembers:UserProfile[]
}

const Team = ({allMembers}:AllMenbers) => {
console.log(allMembers)
  return (
    <div className="">
      <div className="">
    
          <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-4 ">
            {allMembers.map((member:UserProfile, index) => (
           <Link href={`/team-members/${member.id}`} key={member.id}>
           <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
             <div className="flex flex-col sm:-mx-4 sm:flex-row">
               <img
                 className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                 src={member?.profileImg}
                 alt={member?.fullName}
               />
               <div className="mt-4 sm:mx-4 sm:mt-0">
                 <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                   {member.fullName}
                 </h1>
                 <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                   {member?.role}
                 </p>
               </div>
             </div>
             <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
               {member?.shortBio}
             </p>
             <div className="flex mt-4 -mx-2">
    
               <Link
                 href={member?.socialLinks?.facebook || ""}
                 className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                 aria-label="Facebook"
               >
                 <FaFacebook className="w-6 h-6" />
               </Link>
               <Link
                 href={member?.socialLinks?.linkedin || ""}
                 className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                 aria-label="Github"
               >
                 <FaLinkedin className="w-6 h-6" />
               </Link>
             </div>
           </div>
         </Link>
            ))}
          </div>
      </div>
    </div>
  )
}

export default Team
