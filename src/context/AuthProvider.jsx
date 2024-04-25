import { createContextContext,useContext } from "react"

const AuthProvider = ({children}) => {

const authContext = createContextContext()
const useContextAuth = () =>{
    return useContext(AuthProvider)
}

  return (
  <authContext.Provider value={{}}>
    {children}
  </authContext.Provider>
  )
}

export default AuthProvider