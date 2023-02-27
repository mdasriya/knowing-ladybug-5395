import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {Image,Box,Button,Text,Flex,Spacer,Center,Square} from '@chakra-ui/react'
import { useParams,Link } from 'react-router-dom'
import Products from "./Products.css"
import { TitleRounded } from '@mui/icons-material'
import { StarIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import NavBar from '../pages/NavBar'
import NavDropdown from '../pages/NavDropdown'
import { useToast } from '@chakra-ui/react'
import MyFooter from "../pages/MyFooter"
function SingleProduct() {
  const toast = useToast()
    const [prod, setProd] = useState([])
    const { id } = useParams();
    const navigate = useNavigate();

    const getData = () => {
        return axios.get(`http://localhost:8079/products/${id}`)
    }

    useEffect(() => {
        getData()
            .then((res) => {
                setProd(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const handlesubmit = (id,price) => {
          toast({
              position: 'top',
              title: 'Add To Cart Success.',
      
              status: 'success',
              duration: 3000,
              isClosable: true,
          }) 
          
          
          axios.post('http://localhost:8079/Cart', {
            id, title, image, price
        }) 
    
      }
  




const {image, title, price} = prod
    return (
        <>
<NavBar />
<NavDropdown />
<Flex color='black' marginTop={2}>
        <Center as='b' w='33%' h="40px" 
        // borderRight={"2px solid black"}
        >
          <Text>JUST IN 1600+ NEW ARRIVALS</Text>
        </Center>
        <Square as='b' h="40px" size='33%' 
        // borderRight={"2px solid black"}
        >
          <Text>BUY NOW, PAY LATER</Text>
        </Square>
        <Center as='b' w='33%' h="40px">
          <Text>INTRODUCING JAKE ARNOLD</Text>
        </Center>
      </Flex>
      <hr />
      <Flex ml={3}>
        <Link to="/">
          <Text className='home' fontSize='xs'>Home</Text>
        </Link>
        <Text className='home' fontSize='xs'>→</Text>
        <Text className='home' fontSize='xs'>Living Room Furniture</Text>
      </Flex>
<Flex 
// border={"1px solid red"}
 padding={5}>
  
  {/* BOX 1 START */}

  <Box 
  //  border='1px solid blue'
    w={"60%"} h={"auto"}  ml={50} pl="20px">
<Image w="70%"  src={image} alt={title} />
  </Box>

  

    {/* BOX 1 END */}

 
  <Spacer />


  {/* BOX 2 */}
  <Box  
  // border='1px solid blue'
   w={"30%"}  h={"auto"}>
  <Box>
  <Text fontSize='2xl' as='b'>{title}</Text>
  <br />
  <br />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon />
<StarIcon /> {" "}
<Text as='u' ml={2}>625 Reviews</Text>{" "}
<Text ml={2} as='mark'>SKU: 536904</Text>
  <br />
  <br />
  
 <Text  as='b' borderRadius={"none"} fontSize='xl'>Price : ${price}</Text>
 
  </Box>


  <Button className='AddtoCart'colorScheme={"black"} mt="350px" size='md' borderRadius={"none"} onClick={(()=> handlesubmit(id,price))}>
    ADD TO CART
  </Button>
 

<Flex>
<Link to="/login">
  <Button className='AddtoCart' width="190%" mr="11px" color={"black"}
    mt="10px" size='md' borderRadius={"none"}>
    ADD TO REGISTRY
  </Button>
  </Link>
  <Button width={"10%"}  color={"black"} 
  // border="1px solid black" 
  ml="173px" mt="10px" size='md' borderRadius={"none"}>
  <i class="fa-solid fa-heart"></i>
  </Button>
  </Flex>
  </Box>

  {/* BOX 2 END */}


</Flex>
<MyFooter />
</>
    )
}

export default SingleProduct;

