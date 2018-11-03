import React, { Component } from "react";

import CartCategory from "./CartCategory";

class ListWrapper extends Component {
  state = {};
  render() {
    const {
      categories,
      items,
      completedItems,
      completedCategories,
      toggleCompleted,
      onDeleteDB
    } = this.props;
    return (
      <React.Fragment>
        <h2>Cart</h2>
        {categories.map(category => (
          <CartCategory
            key={category}
            items={items}
            category={category}
            toggleCompleted={toggleCompleted}
          />
        ))}
        {completedItems.length > 0 && <h2>Completed</h2>}
        {completedCategories.map(category => (
          <CartCategory
            key={category}
            items={completedItems}
            category={category}
            toggleCompleted={toggleCompleted}
          />
        ))}
        {(completedItems.length > 0 || items.length > 0) && (
          <button onClick={onDeleteDB} className="btn btn-lg">
            Clear List?
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default ListWrapper;
