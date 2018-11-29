import React, { Component } from "react";
import Modal from "./Modal";

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
        <span
          className="edit-container"
          data-toggle="modal"
          data-target={"#item" + item.id}
        >
          <i className="fa fa-edit" />
        </span>
        <Modal categories={categories} item={item} onEditItem={onEditItem} />
      </div>
    );
  }
}

export default Item;
