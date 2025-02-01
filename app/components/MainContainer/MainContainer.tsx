"use client";
import React, {useState} from 'react';

import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {mockColleges} from "@/app/utils/data";
import CollegeList from "@/app/components/MainContainer/CollegeList";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import UploadModal from "@/app/components/UploadModal/UploadModal";

const MainContainer = () => {
  // Sort by checked status first
  const sortedColleges = mockColleges.sort((a, b) => {
    return Number(a.checked) - Number(b.checked);
  });

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  }
  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <PopoutBorder className={"mt-8 w-[80%] sm:w-[50%] h-[80%] bg-paper p-6"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"p-2 text-4xl font-bold"}>
          Colleges
        </div>
        <div className={"flex flex-row space-x-2"}>
          <button onClick={openModal}>
            <SpringyPopoutBorder
              className={"bg-pink text-white font-extrabold text-xl px-6 text-center justify-center items-center flex flex-col rounded-lg"}>
              Upload
            </SpringyPopoutBorder>
          </button>
          <button>
            <SpringyPopoutBorder
              className={"bg-yellow text-white font-extrabold text-xl px-6 text-center justify-center items-center flex flex-col rounded-lg"}>
              Add College
            </SpringyPopoutBorder>
          </button>
        </div>

      </div>
      <CollegeList colleges={sortedColleges}/>
      <UploadModal isOpen={isOpen} closeModal={closeModal}/>
    </PopoutBorder>
  );
};

export default MainContainer;