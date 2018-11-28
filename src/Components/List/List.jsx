import React, { Component } from "react";
import Item from "./Item/Item";

class List extends Component {
  render() {
    const {
      items,
      category,
      toggleCompleted,
      onEditItem,
      categories
    } = this.props;
    return (
      items.length > 0 && (
        <div className="list-group mb-4">
          <h4 className="list-group-item list-group-item-action active">
            {category}
          </h4>
          {items.map(item => (
            <Item
              item={item}
              toggleCompleted={toggleCompleted}
              onEditItem={onEditItem}
              categories={categories}
            />
          ))}
        </div>
      )
    );
  }
}

export default List;
