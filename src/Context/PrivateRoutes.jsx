import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoutes() {
const {isAuth} = useContext(AuthContext)

if(!isAuth){
    return <Navigate to="/login"/>
}


  return (
    <div>
      
    </div>
  )
}

export default PrivateRoutes
