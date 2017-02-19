import React, { Component } from 'react';
import { FoodMenu } from './Menu.js';
import { DishesList } from './Dishes.js';
import { Cart } from './Cart.js';

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);  // menuData

    this.changeCategory = this.changeCategory.bind(this);
    this.orderDish = this.orderDish.bind(this);

    this.state = {
      category: this.props.menuData.categories[0],
      orderedDishes: []
    };
  }

  changeCategory(category) {
    this.setState({category: category});
  }

  orderDish(dish, qty=1) {
    var dishes = this.state.orderedDishes;
    var exists = false;
    for (let i = 0, len = dishes.length, d; i < len; i++) {
      d = dishes[i];
      if (d.name === dish.name) {
        d.qty = qty;
        exists = true;
      }
    }
    if (!exists) {
      dish.qty = qty;
      dishes.push(dish);
    }
    this.setState({orderedDishes: dishes});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Dickey's Barbecue online ordering</h2>
        </div>
        <div className="App-body">
          <FoodMenu data={this.props.menuData} changeCategory={ this.changeCategory } />
          <DishesList
            category={ this.state.category }
            orderDish={ this.orderDish }
          />
          <Cart dishes={ this.state.orderedDishes } />
        </div>
      </div>
    );
  }
}



export default App;
