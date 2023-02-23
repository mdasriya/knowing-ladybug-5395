import React from 'react'
import { Input } from '@chakra-ui/react'
import Navbar from "./NavBar.css"
// import { SearchIcon } from '@chakra-ui/icons'
// import NavDropdown from './NavDropdown'
// import Middle from './Middle'
function NavBar() {
  return (
    <>
      <div className='Mainnav'>
        <div>LOGO</div>
        {/* Serarch Box start */}
        <div className='Search'>
          <div>
            <Input placeholder='What can help you find?' w="400px" border="1px solid black" />
            <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
           
          </div>
        </div>
        {/* Serarch Box end */}
        <div className='section3'>
          <div >
            <span className='signin'>Sign in</span>
            <i class="fa-solid fa-user fa-lg"></i>
          </div>
          <div className='heart'>
            <i class="fa-solid fa-heart fa-lg"></i>
          </div>
          <div className='heart'>
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
          </div>

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


{/* <NavDropdown />
<Middle /> */}

    </>


  )
}
export default NavBar
