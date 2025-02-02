"use client";
import React, {useState} from 'react';


import PopoutBorder from "@/app/components/CustomUI/PopoutBorder";
import {mockColleges} from "@/app/utils/data";
import CollegeList from "@/app/components/MainContainer/CollegeList";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import UploadModal from "@/app/components/UploadModal/UploadModal";
import AddCollegeModal from "@/app/components/AddCollegeModal/AddCollegeModal";

const MainContainer = () => {
  // Sort by checked status first
  const sortedColleges = mockColleges.sort((a, b) => {
    return Number(a.checked) - Number(b.checked);
  });
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const closeUpload = () => {
    setIsUploadOpen(false);
  }
  const closeAdd = () => {
    setIsAddOpen(false);
  }
  const openUpload = () => {
    setIsUploadOpen(true);
  }
  const openAdd = () => {
    setIsAddOpen(true);
  }


  return (
    <PopoutBorder className={"mt-8 w-[80%] sm:w-[50%] h-[80%] bg-paper p-6"}>
      <div className={"flex flex-row justify-between"}>
        <div className={"p-2 text-4xl font-bold"}>
          Colleges
        </div>
        <div className={"flex flex-row space-x-2"}>
          <button onClick={openUpload}>
            <SpringyPopoutBorder
              className={"bg-pink text-white font-extrabold text-xl px-6 text-center justify-center items-center flex flex-col rounded-lg"}>
              Upload
            </SpringyPopoutBorder>
          </button>
          <button onClick={openAdd}>
            <SpringyPopoutBorder
              className={"bg-yellow text-white font-extrabold text-xl px-6 text-center justify-center items-center flex flex-col rounded-lg"}>
              Add College
            </SpringyPopoutBorder>
          </button>
        </div>

      </div>
      <CollegeList colleges={sortedColleges}/>
      <UploadModal isOpen={isUploadOpen} closeModal={closeUpload}/>
      <AddCollegeModal isOpen={isAddOpen} closeModal={closeAdd}/>
    </PopoutBorder>
  );
};

export default MainContainer;