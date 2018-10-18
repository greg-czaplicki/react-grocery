import React, { Component } from "react";

import CartCategory from "./CartCategory";
import CartItemName from "./CartItemName";

class ListWrapper extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>Cart</h2>
        <CartCategory />
        <CartItemName />
        <h2>Completed</h2>
        <CartCategory />
        <CartItemName />
      </div>
    );
  }
}

export default ListWrapper;
