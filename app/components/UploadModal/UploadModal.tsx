"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import {GetChatResponse} from "@/app/utils/utils";
import {updateCollegeStatus} from "@/app/utils/firestoreUtils";

interface UploadModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UploadModal = ({isOpen, closeModal}: UploadModalProps) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = async () => {
    // Handle the submit logic here
    console.log("Submitted:", inputValue);
    await GetChatResponse(inputValue).then((res: Record<string, boolean>[]) => {


      for (let i = 0; i < res.length; i++) {


        const collegeObject: Record<string, boolean> = res[i];

        const collegeName = Object.keys(collegeObject)[0];

        const financialAidStatus: boolean = collegeObject[collegeName];
        updateCollegeStatus(collegeName, financialAidStatus);


      }
    });

  }


  return (
    <>
      {isOpen && (
        <>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            className="fixed inset-0 bg-black/75 z-50"
            onClick={closeModal}
          />
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div
              className="flex min-h-full items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{type: "spring", bounce: 0.4}}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  w-full
                  max-w-3xl
                  bg-[#FFF5E9]
                  p-8
                  rounded-xl
                  border-4
                  border-black
                  shadow-[8px_8px_0px_0px_#000]
                  overflow-hidden
                "
              >
                <div className="text-2xl font-bold text-center mb-4">
                  Upload Your College Emails
                </div>
                <div className="text-center mb-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="You still have an item that requires your attention in My Student Aid (MSA). Lo..."
                    className="
                      w-full
                      p-3
                      border-2
                      border-black
                      rounded-lg
                      bg-white
                      shadow-[4px_4px_0px_0px_#000]
                      text-lg
                      focus:outline-none
                      focus:ring-2
                      focus:ring-black
                      transition-all
                    "
                  />
                </div>
                <div className="text-center">
                  <button onClick={handleSubmit}>
                    <SpringyPopoutBorder
                      className="bg-pink text-white font-extrabold text-xl px-6 py-2 rounded-lg cursor-pointer"

                    >
                      Upload
                    </SpringyPopoutBorder>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default UploadModal;