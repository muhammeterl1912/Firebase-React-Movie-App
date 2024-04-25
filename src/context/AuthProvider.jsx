import { createContext, useContext } from "react";

const authContext = createContext();

const AuthProvider = ({ children }) => {
  return <authContext.Provider value={{}}>

  {children}

  
  </authContext.Provider>;
};
export const useContextAuth = () => {
  return useContext(AuthProvider);
};

export default AuthProvider;
