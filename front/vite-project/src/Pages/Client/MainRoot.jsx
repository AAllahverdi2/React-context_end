import React from 'react'
import Header from '../../LAyout/Client/Header'
import { Outlet } from 'react-router'
import Footer from '../../LAyout/Client/Footer'

const MainRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
      
    </div>
  )
}

export default MainRoot
