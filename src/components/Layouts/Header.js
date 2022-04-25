import React from 'react'
import { Fragment } from 'react'
import MealsImage from "../../assets/Meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from './HeaderCartButton';
function Header(props) {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt="Meals "/>
        </div>
    </Fragment>
  )
}

export default Header