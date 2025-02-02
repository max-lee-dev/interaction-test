"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";
import {addCollege} from "@/app/utils/firestoreUtils";
import {College} from "@/app/utils/types";

interface AddCollegeProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddCollegeModal = ({isOpen, closeModal}: AddCollegeProps) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const handleSubmit = async () => {
    const college: College = {
      name: name,
      location: location,
      checked: false,
    }
    await addCollege(college).then((res) => {
        console.log(res);
        closeModal();
      }
    )
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Stanford University"
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
                <div className="text-center mb-4">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Stanford, CA"
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

export default AddCollegeModal;