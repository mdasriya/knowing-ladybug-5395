import React, { useState } from 'react'

 export const AuthContext = React.createContext();

function AuthContextProvider({children}) {

 const [isAuth, setIsAuth] = useState(true)   



const loginUser = (token) => {

setIsAuth(true)
}
const logoutUser = () => {
setIsAuth(false)
}

  return (
    <AuthContext.Provider value={{isAuth,loginUser,logoutUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
