import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer__all' >
      <div className="footer__left">
        <div className="footer__left__top">
          <ul>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer__left__bottom">
          <p>©2024 All Rights Reserved. This template is made by Colorlib</p>
        </div>
      </div>

      <div className="footer__right">
        <i className="fa-solid fa-phone"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  );
};

export default Footer;
