import React from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from '../Layout/Header.module.css'
import mealsImg from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
        <div className={classes['main-image']}>
          <img src={mealsImg} alt="Table of food" />
        </div>
    </>
  );
};

export default Header;
