import {
  addDoc,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  getDoc
} from "firebase/firestore";
import { db } from "./";

const usersCollection = collection(db, "Users");

const addUsersList = async (user) => {
  try {
    const docRef = await addDoc(usersCollection, user);
    return docRef.id;
  } catch (error) {
    console.log(error);
  }
};

const getUserByUid = async (uid) => {
  try {
    const q = query(usersCollection, where("uid", "===", uid));
    const querySnapshot = await getDoc(q);
    if (querySnapshot.exists()) {
      return querySnapshot.data();
    }
  } catch (error) {
    console.log(error);
  }
};

const getUsersList = async () => {
  try {
    let userList = [];
    const q = query(
      usersCollection,
      orderBy("lastNameKo"),
      orderBy("firstNameKo")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userList.push(doc.data());
    });
  } catch (error) {
    console.log(error);
  }
};

export { addUsersList, getUserByUid, getUsersList };
