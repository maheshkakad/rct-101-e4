import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = ({data}) => {
  const id = null;
const [count , setCount] = useState(0)
 
const incre =() =>{
  setCount(count + 1);
}


const decre = () => {
  setCount(count - 1);
}
  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">name</h3>
      <h6 data-cy="product-description">description</h6>
      <button data-cy="product-add-item-to-cart-button">ADD TO CART</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={incre}>+</button>
        <span data-cy="product-count">{count}</span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={decre}>-</button>
        <button data-cy="product-remove-cart-item-button">REMOVE</button>
      </div>
    </div>
  );
};

export default Product;
