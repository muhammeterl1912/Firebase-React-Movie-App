import { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const values = {
    currentUser,
    createUser,
    signIn,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
