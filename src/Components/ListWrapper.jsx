import React, { Component } from "react";

import CartCategory from "./CartCategory";

class ListWrapper extends Component {
  state = {};
  render() {
    const {
      categories,
      items,
      completedItems,
      completedCategories
    } = this.props;
    return (
      <React.Fragment>
        <h2>Cart</h2>
        {categories.map(category => (
          <CartCategory key={category} items={items} category={category} />
        ))}
        <h2>Completed</h2>
        {completedCategories.map(category => (
          <CartCategory
            key={category}
            items={completedItems}
            category={category}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default ListWrapper;
