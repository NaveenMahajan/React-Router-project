import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
const HomeLayout = () => {
  const navigation=useNavigation()

  const isPageLoading=navigation.state==='loading'
  return (
    <>
    <Navbar/>
    <section className='page'> 
    {isPageLoading?<div className='loading'/>:
     <Outlet/>}
     </section>
    
   
    </>
  )
}

export default HomeLayout