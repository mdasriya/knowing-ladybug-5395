import React from 'react'
import { Grid, GridItem,Button, Image, Box, Text } from '@chakra-ui/react'
import { TitleSharp } from '@mui/icons-material'
import Products from "./Products.css"
import { Link } from 'react-router-dom'

function RenderProducts({ id,image, title, price, svg }) {


  return (
    <>
    <div >
      <Link to={`/products/${id}`}>
       <Box
        // border={"1px solid red"}
         >
       <div className="hover01 column">
        <div>
 <figure>
 <Image className='Cart_image' src={image} alt={title} mb={2}/>
  </figure> 
        </div>
        </div>
  <Text className='b' mb={2}>{title}</Text>
  <Text className='b' as='b' >${price}</Text>

 <Image mt={2} ml={2}src={svg} alt={title} 
//  border="1px solid black"
  width={6} mb={2}/>
 
  <Box
  // border={"1px solid blue"} 
  textAlign="center" mb={2}>
  {/* <Button variant='solid' colorScheme='blue'
  
   color={"white"} 
  
  width="100%"
 
    borderRadius={"none"}
    >
        Add to cart
      </Button>
      */}
      </Box>
</Box>
</Link>
    </div>
    </>
  )
}

export default RenderProducts
