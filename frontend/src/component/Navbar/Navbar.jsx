import { useState } from 'react'
import { NavLink, Link } from 'react-router'
import { navbarLinks } from '../../constants/navbarLinks'
import './Navbar.css'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='navbar'>
      <div className='navbar__logo'>
        <img src='./images/logo.webp' alt='Logo' />
      </div>

      <div
        className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className='line'></span>
        <span className='line'></span>
        <span className='line'></span>
      </div>

      {/* NAV MOBILE */}

      <nav className={`navbar__mobile ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {navbarLinks.map(({ id, title, path }) => (
            <li key={id}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* NAV DESKTOP */}
      <nav className='navbar__desktop'>
        <ul className='navbar__list'>
          {navbarLinks.map(({ id, title, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? 'navbar__link_active' : ''
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
