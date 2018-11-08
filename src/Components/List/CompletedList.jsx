import React, { Component } from "react";
import Item from "./Item/Item";

class CompletedList extends Component {
  render() {
    const { items, category, toggleCompleted } = this.props;
    return (
      items.length > 0 && (
        <div className="category-group-complete">
          <h3 className="category-title-complete">{category}</h3>
          <div>
            {items.map(item => (
              <Item item={item} toggleCompleted={toggleCompleted} />
            ))}
          </div>
        </div>
      )
    );
  }
}

export default CompletedList;
