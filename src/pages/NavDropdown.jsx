import React from 'react'
import {
  Image,
  Flex,
  Text,
  Box,
  SimpleGrid,
 
  HStack,
  Menu,
  MenuButton,
  MenuList, MenuItem
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import Navbar from "./NavBar.css"
function NavDropdown() {

  return (

<div className='outSide'>
<HStack gap='5' ml={2} >
          <Menu >
            <MenuButton className='MenuButton' >
             Furniture
            </MenuButton>

            <MenuList  marginTop='20px'  marginLeft={20}>
              <Flex gap={5}>
               
               
                <SimpleGrid columns={1} className="simpleGrid" >
                  <Text as='b' className='item_heading'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1}>
                <Text as='b' className='item_heading'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                </Box>
           
                 
               
              </Flex>
            </MenuList>
          </Menu>
            {/* ****************************************222222222222222222************************************************************ */}
          <Menu>
            <MenuButton className='MenuButton' >
              Outdoor
            </MenuButton>

            <MenuList  marginTop='20px'  marginLeft={-10}>
              <Flex gap={5}>
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
            {/* ******************************************3333333333333333333333333333333333333************************************ */}
          </Menu>
          <Menu>
            <MenuButton className='MenuButton' >
              Tabletop & Bar
            </MenuButton>
            <MenuList  marginTop='20px'  soli marginLeft={-100}>
              <Flex gap={5}>
               
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *******************************************4444444444444444444444444********************************** */}

          </Menu>
          <Menu>
            <MenuButton className='MenuButton'>
              Kitchen
            </MenuButton>
            <MenuList  marginTop='20px'  marginLeft="-300px">
              <Flex gap={5}>
               
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
       

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
          </Menu>

            {/* *****************************************5555555555555555555555555555555************************************ */}

          <Menu>
           <Link to="/products">

              <MenuButton className='MenuButton'  >
                Bedding & Bath
              </MenuButton>
           </Link>
           


            {/* ****************************6666666666666666666666666666666666666666****************** */}

          </Menu>
          <Menu>
        

              <MenuButton className='MenuButton' >
                Decor & Pillows
              </MenuButton>
           


            {/* *********************************************777777777777777777777777777777777************************************ */}

          </Menu>

        

          <Menu>
            <MenuButton className='MenuButton'>
              Rugs
            </MenuButton>
            <MenuList  marginTop='20px'  marginLeft="-150px">
              <Flex gap={5}>
               
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
       

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
          </Menu>


            {/* **********************************************8888888888888888888888888888********************************* */}

          <Menu>
            <MenuButton className='MenuButton' >
              Lighting
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-800px'  >
              <Flex gap={5}>
                
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
           

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
          </Menu>

            {/* ***************************************99999999999999999999999999999999999999******************************** */}

          <Menu>
            <MenuButton className='MenuButton'>
              Window
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-920px'  >
              <Flex gap={5}>
              
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
              

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *****************************************10101010101010101010101010101*************************************** */}

          </Menu>
          <Menu>
            <MenuButton className='MenuButton' >
              Gifts
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-1100px'  >
              <Flex gap={5}>
               
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                 

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>

            {/* *************************************11111111111111111111111111111111********************************************* */}

          </Menu>
          <Menu>
            <MenuButton className='MenuButton' color="red">
              SALE
            </MenuButton>
            <MenuList border='none' marginTop='20px' marginLeft='-1160px'  >
              <Flex gap={5}>
                
              <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
                  <Text as='b'>Shop by Gourment Food& Treats</Text>
                  <MenuItem fontSize='sm' className='item' bg='none'>Chocolate Covered Strawberries</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Gourment Food & Flowers Gift Bundles</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Chocolates & Sweets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Fruit Bouquets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Valentine's Day Gift Baskets</MenuItem>
                  <MenuItem fontSize='sm' className='item' bg='none'>Wine Gitf Baskets</MenuItem>
                </SimpleGrid>
                <SimpleGrid columns={1} className="simpleGrid">
             

                  <Box boxSize='sm'>
                  <Image className='sideImage' src='https://cb.scene7.com/is/image/Crate/cb_dFO_20230119_Furniture' alt='Dan Abramov' />
                  </Box>
                </SimpleGrid>
              </Flex>
            </MenuList>
          </Menu>
        </HStack>

</div>



  )
}

export default NavDropdown
