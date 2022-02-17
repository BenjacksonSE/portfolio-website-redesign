import React from 'react'
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.scss';

const NavMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu