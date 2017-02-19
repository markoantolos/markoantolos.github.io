import React, { Component } from 'react';
import classnames from 'classnames';
import './Menu.css';


class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: undefined };
    this.activate = this.activate.bind(this);
  }

  activate(menuItem) {
    var activeItem = this.state.activeItem;
    if (activeItem) {
      activeItem.setState({active: false});
      menuItem.setState({active: true});
    }
    this.setState({activeItem: menuItem});
    this.props.changeCategory(menuItem.props.category); // Call the onChange handler on <App />
  }

  createMenuItems() {
    let items = this.props.data.categories.map(this.createMenuItem, this);
    return items;
  }

  createMenuItem(categ) {
    var [id, active] = [categ.id, categ.active || false];
    return <MenuItem key={id} category={categ} active={active} activate={this.activate}/>;
  }

  render() {
    return (
      <div className="Food-menu">
        <h2>Food Menu</h2>
        <ul className="Menu-list">
          { this.createMenuItems() }
        </ul>
      </div>
    );
  }
}

class MenuItem extends Component {

  componentWillMount() {
    var isActive = this.props.active
    this.state = { active: isActive };  // State can change unlike read-only props
    if (isActive) {
      this.props.activate(this);
    }
  }

  render() {
    let classes = classnames('Menu-item', 'noselect', {active: this.state.active});
    return (
      <li className={classes}>
        <a href="#" onClick={(e) => this.props.activate(this)}>{this.props.category.name}</a>
      </li>
    );
  }
}

export { FoodMenu, MenuItem };
