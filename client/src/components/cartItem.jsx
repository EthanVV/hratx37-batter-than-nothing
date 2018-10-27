import React from 'react';

const CartItem = (props) => (
  <div>
    <p>{props.item.name} - {props.item.quantity}</p>
  </div>
)

export default CartItem;