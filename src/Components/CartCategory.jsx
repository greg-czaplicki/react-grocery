import React, { Component } from "react";

import CartItemName from "./CartItemName";

class CartCategory extends Component {
  state = {};
  render() {
    const { items, category, toggleCompleted } = this.props;
    const filteredItems = items.filter(item => item.itemCategory === category);
    return (
      <React.Fragment>
        <h4>{category}</h4>
        {filteredItems.map(item => (
          <CartItemName
            key={item.id}
            item={item}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default CartCategory;
