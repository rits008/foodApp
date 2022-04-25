import classes from "./Cart.module.css";
import React from 'react'
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";
function Cart(props) {
  
  const cartCtx = useContext(CartContext);

  

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} INR`;
  const hasItem = cartCtx.items.length > 0;
   
  const CartItemRemoveHandler = (id)=>
  {

  };
  const CartItemAddHandler = (item) =>
  {

  };

  const cartItems = ( 
      <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) =>
      (
        <CartItem 
        key = {item.id} 
        name={item.name} 
        price={item.price} 
        amount = {item.amount}
        onRemove = {CartItemRemoveHandler.bind(null,item.id)}
        onAdd = {CartItemAddHandler.bind(null,item)}  
        />
        ))} 
      </ul>
      );
  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            { hasItem && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart