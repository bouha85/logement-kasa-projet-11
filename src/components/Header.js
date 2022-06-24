import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import '../styles/index.css'
import logos from '../assets/logo.png'

const Header = () => {
  const logo = <img src={logos} alt="Kasa Logo" />
  return (
    <nav className="header">
      <Link className="header__logo" to="/">
        {logo}
      </Link>
      <Link className="header__link" to="/">
        Accueil
      </Link>
      <Link className="header__link" to="/about">
        A propos
      </Link>
    </nav>
  )
  //   return (
  //     <ul className="header">
  //       <li className="header__logo">
  //         <img src={logos} alt="Kasa Logo" className="img" />
  //       </li>
  //       <li className="header__link">Accuiel</li>
  //       <li className="header__link">A propos</li>
  //     </ul>
  //   )
}

export default Header
