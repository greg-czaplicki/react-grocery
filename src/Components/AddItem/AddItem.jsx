import React, { Component } from "react";

class AddItem extends Component {
  state = {
    itemQuantity: 1,
    itemValue: ""
  };

  validateProperty = e => {
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
    const { categories, onAddItem, error } = this.props;
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
            onChange={this.validateProperty}
          />
          {error && <div className="alert alert-danger">{error}</div>}
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
                  className="btn btn-dec btn-lg"
                  onClick={this.decrementQuantity}
                >
                  <i className="fa fa-minus" />
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
                className="btn btn-inc btn-lg"
                onClick={this.incrementQuantity}
              >
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-addItem btn-lg"
          disabled={this.state.itemValue === ""}
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
