import React, { Component } from "react";

class CartItemName extends Component {
  state = {};
  render() {
    const { item, toggleCompleted } = this.props;
    let classes = "itemName ";
    classes += item.isComplete === true ? "completed" : "";
    return (
      <React.Fragment>
        <h3
          onClick={() => {
            toggleCompleted(item);
          }}
          className={classes}
        >
          • {item.itemName}
          {item.itemQuantity > 1 ? ` - ${item.itemQuantity}` : false}
        </h3>
      </React.Fragment>
    );
  }
}

export default CartItemName;
