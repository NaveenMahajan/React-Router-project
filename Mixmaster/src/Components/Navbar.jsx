import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
  return (
    <Wrapper>
   <div className="nav-center">
  <Link to='/'>
  <span className='logo'>
        MixMaster
    </span>
    </Link>
    <div className="nav-links">
        <NavLink to='/' className='nav-link'>
        HOME
        </NavLink>
        <NavLink to='/about' className='nav-link'>
       About
        </NavLink><NavLink to='/newsletter' className='nav-link'>
       Newsletter
        </NavLink>
      
    </div>
   </div>
   </Wrapper>
  )
}

export default Navbar