import React from 'react'
import Navbar from "./NavBar.css"
import { Image,Box,  Stack,Center,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Spacer, } from '@chakra-ui/react'
function Middle() {
  return (
    <div>

      <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={
        'url(https://cb.scene7.com/is/image/Crate/cb_dHP_20230216_Hero?wid=1440&qlt=80&op_sharpen=1)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack 
      alignItems="flex-start"
        w={'full'}
       
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Flex> 
   
          <Text
          borderBottom="1px solid #FED7D7"
          borderTop={"1px solid #FED7D7"}
          padding="10px"
          marginTop={5}
          marginBottom={70}
            color={'white'}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ md: '1xl' })}>
            ALL IN-STOCK & READY TO SHIP
          </Text>
      
        
          </Flex> 
       
  
          <Text
          alignItems={"flex-start"}
        
            color={'white'}
            fontWeight={650}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ md: '4xl' })}>
            Presidents day sale:
            <br />
            20% off top-selling furniture
          </Text>

          <Stack direction={'row'}>
            <Button
            borderRadius="none"
            padding={6}
              color={'black'}
              _hover={{ bg: 'blue.500' }}>
              SHOP THE SALE
            </Button> 
          </Stack>
        </Stack>
      </VStack>
    </Flex>
 
 <img className='image1' src="/Images/1.jpg" alt="mukesh" />

 <Flex
      w={'full'}
      h={'90vh'}
      backgroundImage={
        'url(https://cb.scene7.com/is/image/Crate/cb_dHP_20230209_3_Dunewood?wid=1440&qlt=80&op_sharpen=1)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      _hover={{ cursor:"pointer" }}>
    
      <VStack 
      alignItems="flex-end"
        w={'full'}
       
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-end'} spacing={6}>
          <Flex> 
   
          <Text
          borderBottom="1px solid #FED7D7"
          borderTop={"1px solid #FED7D7"}
          padding="10px"
          marginTop="50px"
          marginBottom={20}
         
            color={'black'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ md: '1xl' })}>
            ALL IN-STOCK & READY TO SHIP
          </Text>
      
        
          </Flex> 
       

          <Text
            alignItems={"flex-end"}
            color={'white'}
            fontWeight={650}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ md: '4xl' })}>
        Timeless, Handcrafted Design
        
          </Text>
        
          <Stack direction={'row'}>
            <Button
            borderRadius="none"
            bg={"RGBA(0, 0, 0, 0.92)"}
            padding={6}
              color={'white'}
              letter-spacing= "2px"
              _hover={{ bg: 'RGBA(0, 0, 0, 0.80)' }}>
              SHOP IN-STOCK DINNING FURNITURE
            </Button> 
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    <br />
    <div style={{ width:"100%",margin:"auto", backgroundColor:"#F7FAFC" }}>
    <Box w='80%' ml={20} pt={2} pb={4} color='black' >
    <Text as='b'>CRATE & BARREL HISTORY</Text>
  <Text>
  With over 100 stores in North America and franchise partners in 9 countries, Crate & Barrel,  <Text className ="underLineText" as='u'>Crate & Kids </Text> and CB2 are the international destination for lasting, modern <Text className ="underLineText" as='u'>furniture </Text>, textiles, <Text className ="underLineText"as='u'>kitchen </Text>, <Text className ="underLineText" as='u'>tableware</Text> and  <Text className ="underLineText" as='u'>home decore</Text> .  See More →→
  </Text>
</Box>
</div>


    </div>
  )
}

export default Middle
