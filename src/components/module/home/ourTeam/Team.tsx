"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserProfile } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

type AllMembers = {
  allMembers: UserProfile[];
};

const Team = ({ allMembers }: AllMembers) => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {allMembers.map((member: UserProfile) => (
            <Link href={`/team-members/${member.id}`} key={member.id}>
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                    <Image
                      className="object-cover rounded-full sm:mx-4 ring-4 ring-gray-300"
                      src={member?.profileImg || "/default-profile.png"}
                      alt={member?.fullName || "Profile Image"}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
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
                  {member?.socialLinks?.facebook && (
                    <Link
                      href={member?.socialLinks?.facebook}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </Link>
                  )}
                  {member?.socialLinks?.linkedin && (
                    <Link
                      href={member?.socialLinks?.linkedin}
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </Link>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
