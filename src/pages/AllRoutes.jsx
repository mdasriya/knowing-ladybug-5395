import React from 'react'
import {Routes, Route} from "react-router-dom"
import Login from './Login'
import PrivateRoutes from '../Context/PrivateRoutes'
import SignUp from "./SignUp"
import Home from './Home'
import NotFound from './NotFound'
import FetchProducts from '../Products/FetchProducts'
import SingleProduct from '../Products/SingleProduct'
import Cart from "../Products/Cart"
import PaymentPage from './PaymentPage'

function AllRoutes() {
  return (
    <Routes>
 <Route path="/" element={<Home />}/>   
 <Route path="/login" element={<Login />}/>   
 <Route path="*" element={<NotFound />}/>   
 <Route path="/products" element={<FetchProducts />}/> 
 <Route path="/cart" element={<Cart/>}/> 

 <Route path="/payment" element={
 <PrivateRoutes>
 <PaymentPage />
 </PrivateRoutes>
 }/> 
 
 <Route path="/signup" element={<SignUp />}/> 
 <Route path="/products/:id" element={<SingleProduct />}></Route> 

  
    </Routes>
  )
}

export default AllRoutes
