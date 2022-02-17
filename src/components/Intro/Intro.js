import React from 'react';
import classes from './Intro.module.scss';

const Intro = () => {
  return (
    <section id="intro" className={classes.intro}>
      <div className={classes.wrapper}>
        <div className={classes.logo}><span>Ben Jackson</span></div>
        <div className={classes.desc}>I'm a full stack software engineer based in Brooklyn, New York</div>
      </div>
    </section>
  )
}

export default Intro