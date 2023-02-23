import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Skeleton, SkeletonCircle,Box, SkeletonText } from '@chakra-ui/react'
import RenderProducts from './RenderProducts'

const getData = () => {
 return axios.get("http://localhost:8079/products")
}


function FetchProducts() {
const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(false)

useEffect(()=> {
  setLoading(true)
  getData()
  .then((res)=> {
    console.log(res.data)
    setData(res.data)
  })
  .catch((err)=> {
    setError(err)
    console.log(err)
  })
  .finally(()=> {
    setLoading(false)
  })
}, [])

if(loading){
  return <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>
}

console.log("data", data)
  return (
<div>
{
  data?.map((res)=> (
    <RenderProducts key={res.div} {...res}/>
  ))
}
</div>
  )
}

export default FetchProducts
