import React, { Component } from 'react';
import './Dishes.css';
import {formatPrices} from './helpers.js';

const img = "https://dickeys.alohaorderonline.com/Content.ashx?ContentFile=Original_Westerner_100x80.jpg&companyCode=DICK001"




class DishesList extends Component {
  createDishItems() {
    let items = this.props.category.dishes.map(this.createDishItem, this);
    return items;
  }

  createDishItem(dish) {
    return <DishItem key={ dish.name } dish={ dish } orderDish={ this.props.orderDish }/>;
  }

  render() {
    var categ = this.props.category;
    return (
      <div className="Dishes-list">
        <h2>{categ ? categ.name : 'Choose category'}</h2>
        <ul>
          { this.createDishItems() }
        </ul>
      </div>
    );
  }
}

class DishItem extends Component {
  //addToCart() {
    //var qty = this.qty;
  //}

  render() {
    var dish = this.props.dish;
    return (
      <li className="Dish-item">
        <img src={img} alt={ dish.desc } />
        <div className="Dish-info">
          <h3 className="Dish-name">
            {dish.name} <span className="Dish-prices">{ formatPrices(dish.prices) }</span>
          </h3>
          <p>{ dish.desc }</p>
          <input type="number" defaultValue="1" ref={(v) => this.qty = v} />
          <button onClick={ e => this.props.orderDish(dish, this.qty.value) }>Add to Cart</button>
        </div>
      </li>
    );
  }
}

export { DishesList, DishItem };
