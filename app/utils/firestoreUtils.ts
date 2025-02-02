import {College} from "@/app/utils/types";
import {collection, doc, getDoc, getDocs, setDoc} from "@firebase/firestore"; // Ensure correct Firestore imports
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

export async function fetchColleges(userId: string): Promise<College[]> {
  const userRef = collection(db, userId);
  const snapshot = await getDocs(userRef);
  return snapshot.docs.map(doc => doc.data() as College);
}


export async function updateCollegeStatus(college: string, checked: boolean) {
  const userId = "1"; // Replace with dynamic user ID later
  try {
    const userRef = collection(db, userId);
    const collegeRef = doc(userRef, college);
    // update the checked status of the college
    // only if the college exists
    if (!(await getDoc(collegeRef)).exists()) {
      console.error("College does not exist:", college);
      return;
    }
    await setDoc(collegeRef, {checked}, {merge: true});


    console.log("College updated:", college);
  } catch (error) {
    console.error("Error updating college:", error);
  }
}

// export function listenToUserColleges(userId: string, callback: (colleges: any[]) => void) {
//   const userRef = doc(db, "users", userId);
//
//   return onSnapshot(userRef, (snapshot) => {
//     let colleges: any[] = [];
//
//     snapshot.forEach((doc) => {
//       colleges.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });
//
//     callback(colleges); // Update the UI or state
//   });
// }