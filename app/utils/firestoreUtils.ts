import {College} from "@/app/utils/types";
import {collection, doc, setDoc} from "@firebase/firestore"; // Ensure correct Firestore imports
import {db} from "@/app/utils/firebase";

export async function addCollege(college: College) {
  const userId = "1"; // Replace with dynamic user ID later
  try {
    const userRef = collection(db, userId);

    // Ensure correct type annotation for the document reference
    const collegeRef = doc(userRef, college.name);


    // Use setDoc instead of updateDoc to create the document if it doesn't exist
    await setDoc(collegeRef, college, {merge: true});
    console.log("College added:", college);
  } catch (error) {
    console.error("Error adding college:", error);
  }
}