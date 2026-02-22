import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import AuthProvider, { AuthContext } from './authProvider'

const PrivateRoutes = ({children}) => {
    const {isLoggedIn}=useContext(AuthContext)
  return isLoggedIn?(
    children
  ):(
    <Navigate to='/login'/>
  )
}

export default PrivateRoutes