import React from 'react'
import { Input,Text } from '@chakra-ui/react'
import Navbar from "./NavBar.css"
import { Link } from 'react-router-dom'

function NavBar() {
  
 const total =  localStorage.getItem("total") || 0


  return (
    <>
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
            // border="1px solid black"
        
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
            <i class="fa-solid fa-heart fa-lg"></i>
          </div>
          <Link to="/cart">
          <div className='heart'>
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <span style={{marginLeft:"8px",color:"red", fontSize:"15px"}}>{total}</span>
          </div>
          </Link>

        </div>

      </div>

<ul className='navbelow'>
<li className='secondary-nav-item'>Wedding Registry</li>
<li className='secondary-nav-item'>Free Design Services</li>
<li className='secondary-nav-item'>Trade Program</li>
<li className='secondary-nav-item'>What's New</li>
<li className='secondary-nav-item'>Collaborations</li>
<li className='secondary-nav-item'>In-Stock</li>
<li className='secondary-nav-item'>Easter</li>
</ul>




    </>


  )
}
export default NavBar
