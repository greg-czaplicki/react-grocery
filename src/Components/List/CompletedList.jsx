import React, { Component } from "react";
import Item from "./Item/Item";

class CompletedList extends Component {
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
        <div className="completed">
          <div className="list-group-completed mb-4">
            <h4 className="list-group-item list-group-item-secondary">
              {category}
            </h4>
            <div>
              {items.map(item => (
                <Item
                  key={item.id}
                  item={item}
                  toggleCompleted={toggleCompleted}
                  onEditItem={onEditItem}
                  categories={categories}
                />
              ))}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default CompletedList;
