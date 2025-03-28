"use client";

import { useEffect, useState } from "react";
import { UserProfile } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

type AllMembers = {
  allMembers: UserProfile[];
};

const SkeletonLoader = () => (
  <div className="px-12 py-8 transition-colors duration-300 transform border rounded-xl group">
    <div className="flex flex-col sm:-mx-4 sm:flex-row gap-6">
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 bg-gray-300 animate-pulse rounded-full"></div>
      <div className="mt-4 sm:mx-4 sm:mt-0">
        <div className="h-6 bg-gray-300 animate-pulse rounded-md w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 animate-pulse rounded-md w-1/2"></div>
      </div>
    </div>
    <div className="mt-4 h-4 bg-gray-300 animate-pulse rounded-md w-3/4"></div>
  </div>
);

const NoDataMessage = () => (
  <div className="px-12 py-8 text-center text-gray-500 dark:text-gray-300">
    <p>No team members available at the moment.</p>
  </div>
);

const Team = ({ allMembers }: AllMembers) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to simulate loading for 1 second
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => <SkeletonLoader key={index} />)
          ) : allMembers.length === 0 ? (
            <NoDataMessage />
          ) : (
            allMembers.map((member: UserProfile) => (
              <div key={member.id} className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Link href={`/team-members/${member.id}`}>
                  <div className="">
                    <div className="flex flex-col sm:-mx-4 sm:flex-row gap-6">
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
                      {member?.shortBio?.slice(0,100)}
                    </p>
                  </div>
                </Link>
                <div className="flex mt-4 -mx-2">
                  {member?.socialLinks?.facebook && (
                    <a
                      href={member?.socialLinks?.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-6 h-6" />
                    </a>
                  )}
                  {member?.socialLinks?.linkedin && (
                    <a
                      href={member?.socialLinks?.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
