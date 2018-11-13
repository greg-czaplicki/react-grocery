import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, toggleCompleted } = this.props;
    let classes = "list-group-item list-group-item-action item";
    classes += item.isComplete === true ? " completed" : "";
    return (
      <h5 onClick={() => toggleCompleted(item)} className={classes}>
        - {item.itemName}
        {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : ""}
      </h5>
    );
  }
}

export default Item;
