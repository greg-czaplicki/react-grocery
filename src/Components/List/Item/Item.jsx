import React, { Component } from "react";

class Item extends Component {
  render() {
    const { item, toggleCompleted, onEditItem } = this.props;
    let classes = "list-group-item list-group-item-action item";
    classes += item.isComplete === true ? " completed" : "";
    return (
      <div className="item">
        <h5 onClick={() => toggleCompleted(item)} className={classes}>
          - {item.itemName}
          {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : ""}
        </h5>

        <i class="fa fa-edit" onClick={() => onEditItem(item)} />
      </div>
    );
  }
}

export default Item;
