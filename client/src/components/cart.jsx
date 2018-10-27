import React from 'react';
import CartItem from './cartItem.jsx';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Your Cart</p>
        <p>Customer Name<input type="text"/></p>
        <p>Cart List Below</p>
        <ul>
          {this.props.cartList.map(item => <CartItem item={item}/>)}
        </ul>
        <input type="Submit" value="Place Order"/>
      </div>
    )
  }
}

export default Cart;