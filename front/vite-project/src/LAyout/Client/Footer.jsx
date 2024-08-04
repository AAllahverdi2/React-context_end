import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer__all' >
      <div className="footer__left">
      <div className="footer__left__top">
        <ul>
          <li>Blog</li>
          <li>Fags</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer__left__bottom">
        <p>©2018 All Rights Reserverd. This template is made with  by Colorlib</p>
      </div>
      </div>

      <div className="footer__right">
      <i class="fa-solid fa-phone"></i>
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-whatsapp"></i>
      </div>
    </div>
  )
}
export default Footer
