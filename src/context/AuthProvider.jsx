import { createContext, useContext, useState } from "react";
import { auth } from "../auth/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
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

  const values = {
    currentUser,
    createUser,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
