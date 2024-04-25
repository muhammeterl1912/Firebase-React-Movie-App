import { createContext, useContext,useState } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
const [currentUser,setCurrentUser] = useState("")

const values ={
    currentUser
}


  return <authContext.Provider value={values}>

  {children}


  </authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(AuthProvider);
};

export default AuthProvider;
