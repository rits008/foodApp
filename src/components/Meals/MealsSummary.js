import React from 'react'
import classes from './MealsSummary.module.css';
function MealsSummary() {
    return (
        <section className={classes.summary}>
          <h2>Delicious Food, Delivered To You</h2>
          <p>
          Enjoy a delicious lunch or dinner by choosing a meal from our wide selection of available food.
          </p>
          <p>
          Each and every dish is cooked with high-quality ingredients, fresh-from-the-market, by an experienced chef.
          </p>
        </section>
      );
}

export default MealsSummary;