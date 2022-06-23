import React from 'react'
import '../styles/Header.css'
import '../styles/index.css'
import logos from '../assets/logo.png'

const Header = () => {
  return (
    <ul className="header">
      <li className="header__logo">
        <img src={logos} alt="Kasa Logo" className="img" />
      </li>
      <li className="header__link">Accuiel</li>
      <li className="header__link">A propos</li>
    </ul>
  )
}

export default Header
