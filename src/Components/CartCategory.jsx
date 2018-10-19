import React, { Component } from "react";

import CartItemName from "./CartItemName";

class CartCategory extends Component {
  state = {};
  render() {
    const { items, category } = this.props;
    const filteredItems = items.filter(item => item.itemCategory === category);
    return (
      <div>
        <h4>{category}</h4>
        {filteredItems.map(item => (
          <CartItemName item={item} />
        ))}
      </div>
    );
  }
}

export default CartCategory;
