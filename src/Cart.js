import React, { Component } from 'react';
import './Cart.css';

import { formatPrice } from './helpers.js'


class Cart extends Component {
  createRows() {
    return this.props.dishes.map(this.createRow, this);
  }

  createRow(dish) {
    return <CartDish key={ dish.name } dish={ dish }/>
  }

  getTotal() {
    var total = 0;
    this.props.dishes.forEach(dish => {
      total += dish.qty * dish.prices[0];
    });
    return total;
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
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
            { this.createRows() }
          </tbody>
        </table>
        <h2>Total: { formatPrice(this.getTotal()) }</h2>
      </div>
    );
  }
}

class CartDish extends Component {
  render() {
    var dish = this.props.dish;
    console.log(dish);
    return (
      <tr className="Cart-row">
        <td>{ dish.name }</td>
        <td>{ dish.qty }</td>
        <td>{ formatPrice(dish.prices[0]) }</td>
        <td>{ formatPrice(dish.prices[0] * dish.qty) }</td>
      </tr>
    );
  }
}

export { Cart, CartDish };
