import React from 'react'
import Header from '../../LAyout/Admin/Header'
import { Outlet } from 'react-router'
import Footer from '../../LAyout/Admin/Footer'

const AdminRoot = () => {
  return (
    <div style={{backgroundColor:"#060505"}}>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default AdminRoot
