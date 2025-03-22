"use client"; 


import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import Marquee from "react-fast-marquee"; 
import { FaArrowRight } from "react-icons/fa6";
import Team from "./Team";
import Link from "next/link";
import { leaders } from "@/components/shared/data/teamMenber";


const OurTeam = () => {

  return (
    <div className=" py-10 lg:pb-[100px] mb-0">
      <div className="container w-[90%] mx-auto text-center">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl flex justify-start gap-2 items-center font-bold mb-8 text-left">
            <span>
              Our <span className="text-[#bc986b]">Team Members</span>
            </span>
          </h2>
          <div>
            <h2 className="text-xl flex justify-start gap-2 items-center font-bold mb-8 text-right">
              <Link href="/team-members" className="hover:text-green-800">
                <span>See More</span>
              </Link>
              <FaArrowRight size={15} />
            </h2>
          </div>
        </div>
        <Marquee pauseOnHover gradient={false} speed={50}>
          <div className="flex space-x-6">
            {leaders.map((leader, index) => (
             
              <Card
                key={index}
                className="shadow-md rounded-xl p-6 flex flex-col items-center w-72"
              >
                {leader.image ? (
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={100}
                    height={100}
                    className="rounded-full mb-4"
                  />
                ) : (
                  <FaUserCircle size={100} className="text-gray-300 mb-4" />
                )}
                <CardContent className="text-center hover:text-green-600 hover:underline">
                <Link href={`/team-members/${leader.id}`}>
                  <h3 className="text-lg font-semibold mb-2">{leader.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{leader.title}</p>
                  <p className="text-sm text-gray-600">{leader.shortDescription}</p>
                </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default OurTeam;
