import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
import mainContext from '../../Context/Context';
const Header = () => {
  const { basket } = useContext(mainContext);

  let totalCount = 0;
  for (let i = 0; i < basket.length; i++) {
    totalCount += basket[i].count; 
  }
  return (
    <div className='header__all'>
        <div>
            <p className='colorShop'>COLOR <span>SHOP</span></p>
        </div>
       <div className='header__links'>
       <Link to="/">Home</Link>
        <Link to="/BAsket">Basket <span style={{position:"absolute", top:"0px", color:"gray"}}>{totalCount}</span></Link>
        <Link to="/Fav">Favorites</Link>
       </div>
      
      
    </div>
  )
}

export default Header
