"use client";
import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import { College } from "@/app/utils/types";

type CollegeItemProps = {
  college: College;
}
const CollegeItem = ({college} : CollegeItemProps) => {
  return (
    <PopoutBorder className={"mt-8 w-[80%] h-20 bg-white p-6"}>
      <div className={"p-2 text-2xl font-bold"}>
        {college.name}
      </div>
    </PopoutBorder>
  );
};

export default CollegeItem;