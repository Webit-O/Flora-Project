import { NavLink } from 'react-router'
import { navbarLinks } from '../../constants/navbarLinks'
import './Navbar.css'

export const Navbar = () => {
  return (
    <header className='navbar'>
      <div className='navbar__logo'>
        <img src='./images/logo.webp' alt='Logo' />
      </div>

      <nav>
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
