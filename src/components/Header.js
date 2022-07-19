import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import '../styles/index.css'
import logos from '../assets/logo.png'

const Header = () => {
  const logo = <img src={logos} alt="Kasa Logo" />
  const activeClassName = 'header__navlink--active'

  return (
    <nav className="header">
      <NavLink className="header__logo" to="/">
        {logo}
      </NavLink>

      <NavLink className={({ isActive }) => isActive && activeClassName} to="/">
        <h6>Accueil</h6>
      </NavLink>
      <NavLink
        className={({ isActive }) => isActive && activeClassName}
        to="/about"
      >
        <h6>A propos</h6>
      </NavLink>
    </nav>
  )
}

export default Header
