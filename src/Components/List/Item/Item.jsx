import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, toggleCompleted } = this.props;
    let classes = "item";
    classes += item.isComplete === true ? " completed" : "";
    return (
      <h4 onClick={() => toggleCompleted(item)} className={classes}>
        - {item.itemName}
        {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : ""}
      </h4>
    );
  }
}

export default Item;
