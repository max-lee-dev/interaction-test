"use client";
import React, {useEffect, useState} from "react";
import CollegeItem from "@/app/components/CollegeItem/CollegeItem";
import FinishedCollegeItem from "@/app/components/CollegeItem/FinishedCollegeItem";
import {College} from "@/app/utils/types";
import {fetchColleges} from "@/app/utils/firestoreUtils";

const CollegeList = () => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const userId = "1"; // Replace with actual user ID
    // const unsubscribe = listenToUserColleges(userId, setColleges); // Listen for updates
    //
    // return () => unsubscribe(); // Cleanup listener on unmount
    fetchColleges("1").then((data) => {
      setColleges(data);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching colleges:", error);
    });
  }, []);

  return (
    <div className="flex border-t-2 border-black flex-col mt-8">
      {loading ? (
        <p>Loading...</p>
      ) : (
        colleges.map((college) => (
          <div key={college.name}>
            {college.checked ? (
              <FinishedCollegeItem key={college.name} college={college}/>
            ) : (
              <CollegeItem key={college.name} college={college}/>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default CollegeList;