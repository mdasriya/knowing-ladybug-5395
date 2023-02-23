import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login'
import PrivateRoutes from '../Context/PrivateRoutes'
import Home from './Home'
import NotFound from './NotFound'
import FetchProducts from '../Products/FetchProducts'
function AllRoutes() {
  return (
    <Routes>
 <Route path="/" element={<Home />}/>   
 <Route path="/login" element={<Login />}/>   
 <Route path="*" element={<NotFound />}/>   
 <Route path="/products" element={<FetchProducts />}/>   
  
    </Routes>
  )
}

export default AllRoutes
