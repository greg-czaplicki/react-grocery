import React, { Component } from "react";

class AddItem extends Component {
  state = {};
  render() {
    return (
      <div>
        <input type="text" autoFocus placeholder="Add an item..." />
        <select name="itemCategory" id="itemCategory">
          <option value="0">Produce</option>
          <option value="1">Dairy</option>
        </select>
        <div className="quantity">
          <button>+</button>
          <p>2</p>
          <button>-</button>
        </div>
        <button>Add Item</button>
      </div>
    );
  }
}

export default AddItem;
