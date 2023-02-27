import React, { useEffect, useState } from 'react'
import {Text,Input,Flex,Box,Center,Spacer} from '@chakra-ui/react'
import Cart from "./Cart.css"
import {useNavigate} from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import MyFooter from './MyFooter';
import axios from "axios"


function PaymentPage() {
  const [data, setData] = useState([])
  const toast = useToast()
  const navigate = useNavigate();
 let Price = localStorage.getItem("totalprice");

 const handlePay = () => {
  toast({
    position: 'top',
    title: 'Order Place Successfully',

    status: 'success',
    duration: 3000,
    isClosable: true,
})  
navigate("/")
 }

 function getData() {
  axios.get('http://localhost:8079/Cart')
      .then((res) => {
          setData(res.data)
      })
}

useEffect(()=>{
  getData()
},[])


console.log("data",data)
  return (
    <>
    <div className='MainContainer'>
    <Text as='b' fontSize='3xl'>Customer Info</Text>

{/* I N p u t f o r m E n d */}
<div className='inputForm'>
<div className='Box1'>
<Flex>
  <div className='ThreeInput' >
  <label>First Name</label>
<Input placeholder='John' />
</div>
  <div className='ThreeInput' >
  <label>Last Name</label>
<Input placeholder='Smith' />
</div>
  <div className='ThreeInput' >
  <label>Email</label>
<Input placeholder='xyz@gmail.com' />
</div>
</Flex>


<div className='Box11'>
<Flex>
  <div className='ThreeInput' >
  <label>Town/City</label>
<Input placeholder='Last Vegas' />
</div>
  <div className='ThreeInput' >
  <label>Country/State</label>
<Input placeholder='Country' />
</div>
  <div className='ThreeInput' >
  <label>Zip</label>
<Input type={"number"} placeholder='00000' />
</div>
</Flex>
</div>

<Text as='b' fontSize='3xl'>Payment Info</Text>


<div className='formSecond'>
<Flex>
  <div className='ThreeInput' >
  <label>Credit Card Number</label>
<Input type={"number"}  placeholder='000011110000111' />
</div>
  <div className='ThreeInput' >
  <label>Billing Zip</label>
<Input type={"number"}  placeholder='Enter Billing Code' />
</div>
</Flex>
</div>

<Flex>
  <div className='ThreeInput' >
  <label>Month</label>
<Input type={"number"}  placeholder='month' />
</div>
  <div className='ThreeInput' >
  <label>Year</label>
<Input type={"number"}  placeholder='Year' />
</div>
  <div className='ThreeInput' >
  <label>CVC</label>
<Input type={"number"}  placeholder='123' />
</div>
</Flex>



</div>


<div className="Box2">
  <Center>
  <Box>
<Text as='b' fontSize='2xl'>Current Cart</Text> <br />
<Text as='b' fontSize='1xl' color={"blue"}>Return to Cart</Text>
  </Box>
  </Center>


<div className='AllProducts'>
{
  data.map((item)=> (
    <div key={item.id}>
     <Flex>
  <Box p='1' color={"black"} borderBottom="1px solid black">
    {item.title}
  </Box>
  <Spacer />
  <Box p='1' color={"red"}>
  ${item.price}.00
  </Box>
</Flex>
    </div>
  ))
}
</div>

<div className='flexComponents'>
  <div className='first'>
<hr />
  </div>
  <div className='second'> CART TOTALS</div>
  <div className='first'>
<hr />
  </div>
</div>
  <div className='Totalprice'>
<Text as='b' color={"green"} fontSize='xl'>${Price}.00</Text>
</div>


<div className='CheckoutButton'>
<button className='button' onClick={handlePay}>Complete Checkout and Pay</button>
</div>

</div>

</div>





    </div>
    <MyFooter />
    </>
  )
}


export default PaymentPage
