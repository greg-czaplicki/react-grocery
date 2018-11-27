import React, { Component } from "react";
import Item from "./Item/Item";

class CompletedList extends Component {
  render() {
    const { items, category, toggleCompleted } = this.props;
    return (
      items.length > 0 && (
        <div className="completed">
          <div className="list-group-completed mb-4">
            <h4 className="list-group-item list-group-item-secondary">
              {category}
            </h4>
            <div>
              {items.map(item => (
                <Item item={item} toggleCompleted={toggleCompleted} />
              ))}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default CompletedList;
