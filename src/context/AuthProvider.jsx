import { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify,toastErrorNotify } from "../helper/ToastNotify";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toastSuccessNotify("Registered Sucessfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  const navigate = useNavigate();
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      toastSuccessNotify("Logged-In Sucessfully");
    } catch (error) {
      toastErrorNotify(error.message);
    }
  };
  const logOut = ()=>{
    signOut(auth).then(()=>{
      toastSuccessNotify("Logged out successfully.Hope to see you soon.")
    })
  }
  const values = {
    currentUser,
    createUser,
    signIn,
    signOut
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
