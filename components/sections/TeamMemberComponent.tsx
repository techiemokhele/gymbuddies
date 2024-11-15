"use client";

import { useState } from "react";
import TeamMemberItemComponent from "./TeamMemberItemComponent";
import { teamMemberData } from "@/data/teamMemberData";
import { teamMemberTitle } from "@/constants/string";

const TeamMemberComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMembers = teamMemberData.slice(startIndex, startIndex + itemsPerPage);

  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="#teamMember" className="flex flex-col px-0 md:px-8 py-16">
      <div className="flex items-center justify-center text-white text-3xl font-bold">
        <p className="w-64 text-center">{teamMemberTitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 px-8">
        {currentMembers.map((member) => (
          <TeamMemberItemComponent key={member.id} {...member} />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {[1, 2, 3, 4].map((page) => (
          <div
            key={page}
            onClick={() => handleDotClick(page)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200 ${
              currentPage === page ? "bg-yellow-500" : "bg-white opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMemberComponent;
