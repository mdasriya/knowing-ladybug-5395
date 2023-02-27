import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContextProvider'
import { Navigate } from 'react-router-dom'

function PrivateRoutes({children}) {
const {isAuth} = useContext(AuthContext)

if(!isAuth){
    return <Navigate to="/login"/>
}
return children

  return (
    <div>
      
    </div>
  )
}

export default PrivateRoutes
