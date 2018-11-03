import React, { Component } from "react";

class AddItem extends Component {
  state = {
    itemQuantity: 1
  };

  itemLength = React.createRef();

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
            ref={this.itemLength}
            type="text"
            name="itemName"
            autoFocus
            placeholder="Add an item..."
            className="form-control form-control-lg"
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
                <input
                  type="button"
                  className="btn btn-outline-danger btn-lg"
                  value="-"
                  onClick={this.decrementQuantity}
                />
              )}
            </div>
            <div className="col">
              <span name="itemQuantity" className="btn btn-primary btn-lg">
                {itemQuantity}
              </span>
            </div>
            <div className="col">
              <input
                type="button"
                className="btn btn-outline-success btn-lg"
                value="+"
                onClick={this.incrementQuantity}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-primary btn-lg btn-block my-2"
        >
          Add Item
        </button>
      </form>
    );
  }
}

export default AddItem;
