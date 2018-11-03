import React, { Component } from "react";

import CartCategory from "./CartCategory";

class ListWrapper extends Component {
  state = {};
  render() {
    const {
      totalItems,
      categories,
      items,
      completedItems,
      completedCategories,
      toggleCompleted,
      onDeleteDB
    } = this.props;
    return (
      <React.Fragment>
        <i className="fa fa-shopping-cart" id="shopping-cart" />
        {totalItems.length > 0 && (
          <span className="badge badge-pill badge-primary">
            {totalItems.length}
          </span>
        )}
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
          <button
            onClick={onDeleteDB}
            className="btn btn-warning btn-block btn-lg"
          >
            Clear List?
          </button>
        )}
      </React.Fragment>
    );
  }
}

export default ListWrapper;
