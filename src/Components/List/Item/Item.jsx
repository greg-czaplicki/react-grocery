import React, { Component } from "react";
import ItemModal from "./ItemModal";

class Item extends Component {
  render() {
    const { item, toggleCompleted, onEditItem, categories } = this.props;
    let classes = "list-group-item list-group-item-action item";
    classes += item.isComplete === true ? " completed" : "";

    return (
      <div className="item">
        <h5 onClick={() => toggleCompleted(item)} className={classes}>
          - {item.itemName}
          {item.itemQuantity > 1 ? ` - (${item.itemQuantity})` : ""}
        </h5>
        <ItemModal
          categories={categories}
          item={item}
          onEditItem={onEditItem}
        />
      </div>
    );
  }
}

export default Item;
