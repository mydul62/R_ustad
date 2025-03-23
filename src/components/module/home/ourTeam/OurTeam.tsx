"use client"
import { GetAllResearchAssociate } from "@/services/reserarchers";
import { UserProfile } from "@/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowCircleRight, FaFacebook, FaLinkedin } from "react-icons/fa";
import { LuMoveRight } from "react-icons/lu";
import SectionTitle from "../../SectionTitle";

const OurTeam =  () => {
  const [associates, setAssociates] = useState<UserProfile[]>([]);

  useEffect(() => {
    const fetchAssociates = async () => {
      try {
        const data = await GetAllResearchAssociate();
        setAssociates(data?.data || []);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchAssociates();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container w-[92%]  px-6 py-10 mx-auto">
      <div>
      <SectionTitle title={"Our Executive Team"} discription={"Meet our outstanding team of research associates who are dedicated to excellence"} />
      </div>

      <div>
      <div className="flex justify-end">
      <Link  href={'/team-members'}  className=" rounded-full bg-[#bc986b] hover:bg-slate-200 hover:text-black p-2">
      <LuMoveRight color="white" className=" hover:text-black" size={30} />
      </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-4 xl:mt-4 md:grid-cols-2 xl:grid-cols-4">
          {associates?.slice(0,4).map((associate) => (
            <div
              key={associate.id}
              className="flex flex-col items-center p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#bc986b] border-gray-700 dark:hover:border-transparent"
            >
              <img
                className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={associate.profileImg || "https://via.placeholder.com/150"}
                alt={associate.fullName}
              />
              <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                {associate.fullName}
              </h1>
              <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                {associate.role}
              </p>

              <div className="flex mt-4 -mx-2">
    
    <Link
      href={associate?.socialLinks?.facebook || ""}
      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
      aria-label="Facebook"
    >
      <FaFacebook className="w-6 h-6" />
    </Link>
    <Link
      href={associate?.socialLinks?.linkedin || ""}
      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
      aria-label="Github"
    >
      <FaLinkedin className="w-6 h-6" />
    </Link>
  </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default OurTeam;
