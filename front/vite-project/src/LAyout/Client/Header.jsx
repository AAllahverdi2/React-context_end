import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
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
        <Link to="/">Contact</Link>
        <Link to="/">Favorites</Link>
        <Link to="/">Blogs</Link>
        <Link to="/">Shop</Link>
      </div>
      <div className='header__icons'>
        <Link to="/Basket">
          <i className="fa-solid fa-basket-shopping">
            <span>{totalCount}</span>
          </i>
        </Link>
        <i className="fa-regular fa-user"></i>
        <Link to="/Fav">
          <i className="fa-regular fa-heart"></i>
        </Link>
      </div>
    </div>
  );
};

export default Header;
