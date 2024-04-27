import { useContextAuth } from "../context/AuthProvider"
import { Outlet,Navigate } from "react-router-dom"
import { toastWarnNotify} from "../helper/ToastNotify"

const PrivateRouter = () => {
const {currentUser} =useContextAuth()
console.log(currentUser)
  return (
    <div>{currentUser ? <Outlet/> : <>
    { toastWarnNotify("Please Sign-in to see Movie Details")}
        <Navigate to={"/login"}/>
    </> }</div>
  )
}

export default PrivateRouter