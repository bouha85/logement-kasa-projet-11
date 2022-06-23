import React from 'react'
import logos from '../assets/logo-dark.png'
import '../styles/Footer.css'
const Footer = () => {
  const logo = <img src={logos} alt="Kasa Logo" />
  return (
    <div className="footer">
      {logo}
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
