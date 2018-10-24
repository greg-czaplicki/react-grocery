import React, { Component } from "react";

class AddItem extends Component {
  state = {
    itemQuantity: 1
  };

  incrementQuantity = () => {
    const { itemQuantity } = this.state;
    this.setState({ itemQuantity: itemQuantity + 1 });
  };

  decrementQuantity = () => {
    const { itemQuantity } = this.state;
    this.setState({ itemQuantity: itemQuantity - 1 });
  };

  handleFormReset = () => {
    this.setState({
      itemQuantity: 1
    });
  };

  render() {
    const { categories, onAddItem } = this.props;
    const { itemQuantity } = this.state;
    return (
      <form
        onSubmit={e => {
          onAddItem(e, itemQuantity);
        }}
        onReset={this.handleFormReset}
      >
        <input
          ref={this.name}
          type="text"
          name="itemName"
          autoFocus
          placeholder="Add an item..."
        />
        <select name="itemCategory" id="itemCategory">
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <div className="quantity">
          {itemQuantity > 1 && (
            <input type="button" value="-" onClick={this.decrementQuantity} />
          )}
          <span name="itemQuantity">{itemQuantity}</span>
          <input type="button" value="+" onClick={this.incrementQuantity} />
        </div>
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddItem;
