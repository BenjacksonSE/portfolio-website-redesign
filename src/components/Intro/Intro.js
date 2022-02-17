import React from 'react';
import classes from './Intro.module.scss';

const Intro = () => {
  return (
    <section id="intro" className={classes.intro}>
      <div className={classes.intro__logo}>Ben Jackson</div>
      <div className={classes.intro__desc}>I'm a full stack web developer based in Brooklyn, New York</div>
    </section>
  )
}

export default Intro