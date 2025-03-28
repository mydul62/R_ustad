"use client";

import { Card, CardContent } from "@/components/ui/card";
import { UserProfile } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import ResearchMembar from "./ResearchMembar/ResearchMembar";

type AllMembers = {
  allMembers: UserProfile[];
};

const Team = ({ allMembers }: AllMembers) => {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allMembers.map((member: UserProfile, index) => (
            <ResearchMembar associate={member} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
