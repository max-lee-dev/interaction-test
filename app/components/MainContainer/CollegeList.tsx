"use client";
import React from 'react';
import CollegeItem from "@/app/components/CollegeItem/CollegeItem";
import {mockColleges} from "@/app/utils/data";
import {College} from "@/app/utils/types";

type CollegeListProps = {
  colleges: College[];
}
const CollegeList = ({ colleges = mockColleges } : CollegeListProps) => {
  return (
      <div className={"flex flex-col mt-8"}>
        {colleges.map((college) => (
          <CollegeItem key={college.name} college={college}/>
        ))}
      </div>
  );
};

export default CollegeList;