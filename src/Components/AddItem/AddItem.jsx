import React, { Component } from "react";

class AddItem extends Component {
  state = {
    itemQuantity: 1,
    itemValue: ""
  };

  toggleDisabled = e => {
    this.setState({
      itemValue: e.target.value
    });
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
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            name="itemName"
            autoFocus
            placeholder="Add an item..."
            className="form-control form-control-lg"
            onChange={this.toggleDisabled}
          />
        </div>

        <div className="form-group">
          <label htmlFor="itemCategory">Item Category:</label>
          <select
            className="form-control form-control-lg"
            name="itemCategory"
            id="itemCategory"
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="from-group">
          <label htmlFor="itemQuantity">Item Quantity:</label>
          <div className="row align-items-center">
            <div className="col adjust-quantity">
              {itemQuantity > 1 && (
                <button
                  type="button"
                  className="btn btn-danger btn-lg"
                  onClick={this.decrementQuantity}
                >
                  <span className="symbol">-</span>
                </button>
              )}
            </div>
            <div className="col text-center">
              <span name="itemQuantity" className="itemQuantity">
                {itemQuantity}
              </span>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-success btn-lg"
                onClick={this.incrementQuantity}
              >
                <span className="symbol">+</span>
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-lg btn-block addItemBtn"
          disabled={this.state.itemValue === ""}
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
