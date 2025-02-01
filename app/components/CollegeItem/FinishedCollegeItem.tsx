"use client";
import React from 'react';
import {College} from "@/app/utils/types";

type FinishedCollegeItemProps = {
  college: College;
}

const FinishedCollegeItem = ({college}: FinishedCollegeItemProps) => {
  return (
    <div className={"border-b-2 border-black w-[100%] py-4 p-2 text-start"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"text-xl text-gray-400 font-bold"}>
          {college.name}
          <div className={"text-gray-400 font-light text-sm"}>
            {college.location}
          </div>

        </div>

      </div>
    </div>


  );
};

export default FinishedCollegeItem;