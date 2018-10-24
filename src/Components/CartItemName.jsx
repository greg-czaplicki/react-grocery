import React, { Component } from "react";

class CartItemName extends Component {
  state = {};
  render() {
    const { item, toggleCompleted } = this.props;
    return (
      <React.Fragment>
        <p
          onClick={() => {
            toggleCompleted(item);
          }}
        >
          {item.itemName}
          {item.itemQuantity > 1 ? ` - ${item.itemQuantity}` : false}
        </p>
      </React.Fragment>
    );
  }
}

export default CartItemName;
