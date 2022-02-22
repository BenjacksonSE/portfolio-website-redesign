import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import classes from './NavMenu.module.scss';
import { MdClose, MdMenu } from 'react-icons/md';

const NavMenu = () => {
  const [showNav, setShowNav] = useState(false)
  return (
    <div className={classes.nav}>
      <div className={classes.mobile} onClick={() => setShowNav(!showNav)} role="button" onKeyDown={() => setShowNav(!showNav)} tabIndex={0}>
        <MdMenu />
      </div>
      <ul className={!showNav ? `${classes.nav__list} ${classes.hide}` : classes.nav__list}>
        <div className={classes.mobileclose} onClick={() => setShowNav(!showNav)} role="button" onKeyDown={() => setShowNav(!showNav)} tabIndex={0}>
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