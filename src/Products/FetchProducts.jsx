import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Spacer, SkeletonCircle,Input, Box, Select, Image, SkeletonText, Grid, Flex, Center, Text, Square } from '@chakra-ui/react'
import RenderProducts from './RenderProducts'
import NavDropdown from "../pages/NavDropdown"
import MyFooter from "../pages/MyFooter"
import Products from "./Products.css"
import { Link } from "react-router-dom"
import Pagination from './Pagination'



function FetchProducts() {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(4)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [text, setText] = useState("")
  const [searchText, setSearchText] = useState("")
const [total, setTotal] = useState(0)
const totalcart =  localStorage.getItem("total") || 0

  const getData = () => {
    setLoading(true)
 axios.get(`http://localhost:8079/products?_sort=price&_order=${text}`)
    .then((res) => {
      setData(res.data)
     setTotal(res.data.length)   
  })
  .catch((err) => {
      alert("something went wrong")
  })
  .finally(() => {
    setLoading(false)
  })
  }

  useEffect(() => {
    getData()     
  },[text])
 
  function handleSearch(e){
    axios.get(`http://localhost:8079/products?q=${e.target.value.toLowerCase()}`)
    .then((data)=>{
      setData(data.data)
      setTotal(data.data.length)
    })
   }


  if (loading) {
    return <Box padding='6' boxShadow='lg' bg='white'>
      <SkeletonCircle size='40' />
      <SkeletonText mt='4' noOfLines={8} spacing='4' skeletonHeight='2' />
    </Box>
  }


console.log("hi",totalPages)
  return (
    <div>
       {/* Nav bar Code is here */}
       <div className='Mainnav'>
       <Link to='/'>
        <div className='LogoMain'>
        <Text fontSize='4xl' as='samp'>THE</Text>{" "}
        <Text fontSize='4xl' as='samp'>LUXU</Text>
        <Text fontSize='4xl' color='tomato' as='samp'>R</Text>
        <Text fontSize='4xl' as='samp'>IOUS</Text>
        </div>
        </Link>
        {/* Serarch Box start */}
        <div className='Search'>
          <div>
            <Input 
            placeholder='What can help you find?'
             w="400px" 
            border="1px solid black"
            onChange={handleSearch}
             />
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
           
          </div>
        </div>
        {/* Serarch Box end */}
        <div className='section3'>
          <div >

            <span className='signin'>Sign in</span>
            <Link to="/login">
            <i class="fa-solid fa-user fa-lg"></i>
</Link>
          </div>
          <div className='heart'>
            <i className="fa-solid fa-heart fa-lg"></i>
          </div>
          <Link to="/cart">
          <div className='heart'>
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
            <span style={{marginLeft:"8px",color:"red", fontSize:"15px",}}>{totalcart}</span>
          </div>
          </Link>

        </div>

      </div>
       {/* Nav bar Code is here */}

     
      <NavDropdown />
      <Flex color='black' marginTop={2}>
        <Center as='b' w='33%' h="40px" borderRight={"2px solid black"}>
          <Text>JUST IN 1600+ NEW ARRIVALS</Text>
        </Center>
        <Square as='b' h="40px" size='33%' borderRight={"2px solid black"}>
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

      {/* *****************************************Sticky Filter**************************8******************* */}
      <div className="sticky" >
        <Flex>
          <Box>
            <Flex gap={4}>

              <Flex className='filter_box' pl="17px">
                <div>
                  <Image
                    boxSize='20px'
                    objectFit='cover'
                    src='https://cdn.iconscout.com/icon/free/png-256/sliders-horizontal-3603735-3004916.png'
                    alt='Dan Abramov'
                    mr={2}
                  />
                </div>
                <Text as='samp' fontSize='lg'>FILTER</Text>
              </Flex>


              <Flex className='filter_box' >

                <Text as='samp' fontSize='sm' pl="13px">Ready to Ship</Text>

              </Flex>

              <Flex className='filter_box' pl="20px" bgColor={"RGBA(0, 0, 0, 0.24)"}>
                <Text as='samp' fontSize='lg'>View All</Text>
              </Flex>
              <Text as="u">Total Item</Text>
              <Text as="b">: {total}</Text>
            </Flex>
          </Box>
          <Spacer />
          <Flex >
         
            <Select placeholder='Most Relevant'  onChange={(e)=>setText(e.target.value)}>
              <option value='asc'>Price, Low to High</option>
              <option value='desc'>Price, High to Low</option>
            </Select>
          </Flex>
        </Flex>
      </div>
      {/* *****************************************Sticky Filter**************************8******************* */}




      <Grid templateColumns='repeat(4, 1fr)' gap={6}
        // border={"1px solid blue"} 
        padding={8}>
        {
          data?.map((res) => (
            <RenderProducts key={res.id} {...res}  />
          ))
        }
      </Grid>
      <Pagination 
      current = {page}
      totalPages = {totalPages}
      onChange={()=>setPage(page)}
      />
      <MyFooter />
    </div>
  )
}

export default FetchProducts
