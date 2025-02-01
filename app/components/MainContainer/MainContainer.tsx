"use client";
import React from 'react';
import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {mockColleges} from "@/app/utils/data";
import CollegeList from "@/app/components/MainContainer/CollegeList";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";

const MainContainer = () => {
  const sortedColleges = mockColleges.sort((a, b) => {
    // Sort by checked status first
    if (a.checked === b.checked) {
      return 1;
    }
  });


  return (
    <PopoutBorder className={"mt-8 w-[80%] sm:w-[50%] h-[80%] bg-white p-6"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"p-2 text-4xl font-bold"}>
          Colleges
        </div>
        <SpringyPopoutBorder className={"bg-yellow text-white font-extrabold text-xl px-6 p-2 rounded-lg"}>
          <button>
            Add College
          </button>
        </SpringyPopoutBorder>
      </div>
      <CollegeList colleges={sortedColleges}/>
    </PopoutBorder>
  );
};

export default MainContainer;