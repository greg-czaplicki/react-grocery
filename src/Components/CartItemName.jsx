import React, { Component } from "react";

class CartItemName extends Component {
  state = {};
  render() {
    const { item } = this.props;
    return (
      <div>
        <p>{item.itemName}</p>
      </div>
    );
  }
}

export default CartItemName;
