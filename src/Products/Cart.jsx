import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Text, Box,ButtonGroup, Flex, Spacer, Button, Grid, Image,GridItem, Stack, Heading, Center } from '@chakra-ui/react'

import { DeleteIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from "react-router-dom";
import NavBar from '../pages/NavBar'
import NavDropdown from '../pages/NavDropdown'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContextProvider'
import { useToast } from '@chakra-ui/react'
const Cart = () => {
  const toast = useToast()
  const [data, setData] = useState([])
  const[totalItem, setTotalItem] = useState(0)


const navigate = useNavigate();
 let price = 0;


 data.forEach((item)=> {
  price = price + item.price
 }) 



  function getData() {
    axios.get('http://localhost:8079/Cart')
        .then((res) => {
        setTotalItem(res.data.length)
      
            setData(res.data)
        })
}


useEffect(() => {
    getData();
},[])

function handledelete(id) {
    axios.delete(`http://localhost:8079/Cart/${id}`)
        .then(() => {
            getData();
        })
}

const handleorder = () => {
  if(price>0){
    navigate("/payment")
  }else{
    toast({
      position: 'top',
      title: 'Cart is empty',

      status: 'error',
      duration: 3000,
      isClosable: true,
  })  
  
  }
}
 

localStorage.setItem("totalprice", price);
localStorage.setItem("total", totalItem);


return (

    
    <div className='main' >

{/* ******************************************************************************************* */}
<NavBar />
<NavDropdown />

{/* ******************************************************************************************* */}








      <Box bg='RGBA(0, 0, 0, 0.04)' 
      // border={"1px solid green"} 
      height="100%">
        
     
      <Flex>
  <Text p='4' as='b' fontSize='4xl'>
    Shopping Cart
  </Text>


</Flex> 



     <Flex >
        <Box p='4' width='70%' height='100%'
           border='1px solid red'
        >
          <Grid templateColumns='repeat(3, 1fr)' gap={6}
            //  border='1px solid black'
            pl={5}
            h='100%'>
            {
              data.map((prod) => <div key={prod.id} >

                <cardBody className='cart'>
                  <Image width='300px' mb='5px'
                    src={prod.image}
                    alt={prod.title}
                    borderRadius='lg'
                  />
                  <Stack direction='row'>
                    <Image
                      width='130px'
                      src='https://images.contentstack.io/v3/assets/bltdd99f24e8a94d536/blt8d4549d3cac15860/61e09d4f2e109d6c649d4aa4/PP_EligibleIcon.svg'
                      alt='Dan Abramov'
                    />


                  </Stack>
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{prod.title}</Heading>
                    <Text color='#805AD5' fontSize='2xl'>
                      ${prod.price}
                    </Text>
                  </Stack>
                  <Center gap={2} ml={-60}>
                    <Box >
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                      <b color='#65388b'>★</b>
                    </Box>
                  </Center>


        <DeleteIcon onClick={(()=>{handledelete(prod.id)})} />
        

                </cardBody>
              </div>
              )}

          </Grid>

        </Box>
        {/* <Spacer /> */}
        <Box p='4' width='30%' height='100%'
          //  border='1px solid black'
        >
  <Text p='4' as='b' fontSize='2xl'>
    TOTAL ITEM : {totalItem}
  </Text>
<br />
          <Text p='4' as='b' fontSize='2xl'>
    Total Price : {price}
  </Text>





<Box mt={300}>

<Button className='button' w='100%' h='10' bg='#4A5568' colorScheme='Gray 800' onClick={handleorder}>
<Text as='b' > PLACE ORDER </Text>
</Button >


<Link to="/products">
<Button className='button' w='100%' h='10' bg='#4A5568' colorScheme='Gray 800' mt={5}>
<Text as='b' > COUNTINUE SHOPPING </Text>
</Button >
</Link>
</Box>


        </Box>
      </Flex>

      </Box>
    </div>
  )
}

export default Cart
