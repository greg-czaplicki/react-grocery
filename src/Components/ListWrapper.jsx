import React, { Component } from "react";

import CartCategory from "./CartCategory";

class ListWrapper extends Component {
  state = {};
  render() {
    const { categories, items } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        {categories.map(category => (
          <CartCategory items={items} category={category} />
        ))}
        <h2>Completed</h2>
      </div>
    );
  }
}

export default ListWrapper;
