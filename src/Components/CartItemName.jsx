import React, { Component } from "react";

class CartItemName extends Component {
  state = {};
  render() {
    const { item, toggleCompleted } = this.props;
    let classes = "itemName ";
    classes += item.isComplete === true ? "completed" : "";
    return (
      <React.Fragment>
        <h4
          onClick={() => {
            toggleCompleted(item);
          }}
          className={classes}
        >
          {item.itemName}
          {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : false}
        </h4>
      </React.Fragment>
    );
  }
}

export default CartItemName;
