import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='adminHeader__all' >
     <div className='admin__left'>
     <Link to="DashBoard"></Link>
      
      <Link to="Add">Add</Link>
     </div>
      <div className='adminRight'>
        <Link to="/">Client Side</Link>
      </div>
    </div>
  )
}

export default Header
