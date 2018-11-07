import React, { Component } from "react";
import Item from "./Item/Item";

class CompletedList extends Component {
  render() {
    const { items, category, title, toggleCompleted } = this.props;
    return (
      items.length > 0 && (
        <React.Fragment>
          <h2>{title}</h2>
          <div className="listWrapper">
            <h3>{category}</h3>
            <div>
              {items.map(item => (
                <Item item={item} toggleCompleted={toggleCompleted} />
              ))}
            </div>
          </div>
        </React.Fragment>
      )
    );
  }
}

export default CompletedList;
