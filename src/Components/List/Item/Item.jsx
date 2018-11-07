import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, toggleCompleted } = this.props;
    return (
      <h4 onClick={() => toggleCompleted(item)}>
        - {item.itemName}
        {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : ""}
      </h4>
    );
  }
}

export default Item;
