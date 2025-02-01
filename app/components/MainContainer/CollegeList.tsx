"use client";
import React from 'react';
import CollegeItem from "@/app/components/CollegeItem/CollegeItem";
import {College} from "@/app/utils/types";
import FinishedCollegeItem from "@/app/components/CollegeItem/FinishedCollegeItem";

type CollegeListProps = {
  colleges: College[];
}
const CollegeList = ({colleges}: CollegeListProps) => {
  return (
    <div className={"flex border-t-2  flex-col mt-8"}>
      {colleges.map((college) => (
        <div key={college.name}>
          {college.checked ? (
              <FinishedCollegeItem key={college.name} college={college}/>
            )
            : (
              <CollegeItem key={college.name} college={college}/>
            )}
        </div>
      ))}
    </div>
  );
};

export default CollegeList;