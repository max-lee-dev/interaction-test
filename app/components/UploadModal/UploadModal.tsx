"use client"

import {motion} from "framer-motion";
import SpringyPopoutBorder from "@/app/components/CustomUI/SpringyPopupBorder";


interface UploadModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const UploadModal = ({isOpen, closeModal}: UploadModalProps) => {
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
                  Upload Your College List
                </div>
                <div className="text-center mb-4">
                  <input type="text"/>
                </div>
                <div className="text-center">
                  <SpringyPopoutBorder
                    className="bg-pink text-white font-extrabold text-xl px-6 py-2 rounded-lg cursor-pointer"
                    onClick={closeModal}>
                    Upload
                  </SpringyPopoutBorder>
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