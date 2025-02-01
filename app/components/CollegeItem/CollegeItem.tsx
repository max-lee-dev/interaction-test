"use client";
import React from 'react';
import {College} from "@/app/utils/types";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import {FaCheck} from "react-icons/fa6";

type CollegeItemProps = {
  college: College;
}

const CollegeItem = ({college}: CollegeItemProps) => {
  return (
    <div className={"border-b-2 border-black w-[100%] py-4 p-2 text-start"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"text-xl font-bold"}>
          {college.name}
          <div className={"text-gray-500 font-light text-sm"}>
            {college.location}
          </div>

        </div>
        <div className={"text-2xl font-bold"}>
          <button onClick={() => {
            console.log("hi")
          }}>
            <SpringyPopoutBorder className={"bg-green text-white font-extrabold text-xl px-6 p-2 rounded-lg"}>
              <FaCheck/>
            </SpringyPopoutBorder>
          </button>

        </div>
      </div>
    </div>

  );
};

export default CollegeItem;