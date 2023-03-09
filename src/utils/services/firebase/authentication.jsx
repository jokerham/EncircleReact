import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { app } from "./app";

const auth = getAuth(app);

const authCreateUserWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
};

const authSignInWithEmailAndPassword = async (email, password) => {
  try {
    await setPersistence(auth, browserSessionPersistence);
    let credential = await signInWithEmailAndPassword(auth, email, password);
    return credential.user;
  } catch (error) {
    console.log(error);
  }
};

const authSignOut = () => {
  signOut(auth);
};

export {
  authCreateUserWithEmailAndPassword,
  authSignInWithEmailAndPassword,
  authSignOut
};
