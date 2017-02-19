import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  createRows() {
    return this.props.dishes.map(this.createRow, this);
  }

  createRow(dish) {
    return <CartDish key={ dish.name } dish={ dish }/>
  }

  render() {
    return (
      <div className="Cart">
        <h1>My Order</h1>
        <table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody>
            { this.createRows() }
          </tbody>
        </table>
      </div>
    );
  }
}

class CartDish extends Component {
  render() {
    var dish = this.props.dish;
    return (
      <tr className="Cart-row">
        <td>{ dish.name }</td>
        <td>{ 1 }</td>
        <td>Price</td>
      </tr>
    );
  }
}

export { Cart, CartDish };
