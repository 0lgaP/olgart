import React from 'react';
import './footer.css';
import CTA from '../header/CTA';




const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Alien Toronto</a>
      <CTA />
    </footer>
  )
}

export default Footer