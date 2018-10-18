import React, { Component } from "react";

class CartCategory extends Component {
  state = {};
  render() {
    return <h4>{this.props.items}</h4>;
  }
}

export default CartCategory;
