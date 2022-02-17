import React from 'react'
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.scss';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenu = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.mobile}>
        <MdMenu />
      </div>
      <ul className={classes.nav__list}>
        <div className={classes.mobileclose}>
          <MdClose />
        </div>
        <li className={classes.nav__list__item}>
          <Link to="/">
            Home
          </Link>
        </li>
        <li className={classes.nav__list__item}>
          <Link to="/projects">
            Projects
          </Link>
        </li>
        <li className={classes.nav__list__item}>
          <Link to="/contact">
            Contact
          </Link>
        </li>
        <li className={classes.nav__list__item}>
          <Link to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu