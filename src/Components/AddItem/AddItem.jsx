import React, { Component } from "react";

class AddItem extends Component {
  state = {
    itemQuantity: 1,
    itemValue: "",
    checkCategory: "Produce"
  };

  checkCategory = e => {
    this.setState({
      checkCategory: e.target.value
    });
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
    const { categories, onAddItem, onAddRecipe, error } = this.props;
    const { itemQuantity } = this.state;
    return (
      <form
        onSubmit={e => {
          if (this.state.checkCategory !== "Recipes") {
            onAddItem(e, itemQuantity);
          } else {
            onAddRecipe(e);
          }
        }}
        onReset={this.handleFormReset}
      >
        {this.state.checkCategory !== "Recipes" && (
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
            {error.itemName && (
              <div className="alert alert-danger">{error.itemName}</div>
            )}
          </div>
        )}

        {this.state.checkCategory === "Recipes" && (
          <div className="form-group">
            <label htmlFor="recipeName">Recipe Name:</label>
            <input
              type="text"
              name="recipeName"
              autoFocus
              placeholder="Recipe name..."
              className="form-control form-control-lg"
              onChange={this.validateProperty}
            />
            {error.recipeName && (
              <div className="alert alert-danger">{error.recipeName}</div>
            )}
          </div>
        )}

        {this.state.checkCategory === "Recipes" && (
          <div className="form-group">
            <label htmlFor="recipeURL">Recipe URL:</label>
            <input
              type="text"
              name="recipeURL"
              placeholder="Add Recipe URL..."
              className="form-control form-control-lg"
              onChange={this.validateProperty}
            />
            {error.recipeURL && (
              <div className="alert alert-danger">{error.recipeURL}</div>
            )}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="itemCategory">Item Category:</label>
          <select
            className="form-control form-control-lg"
            name="itemCategory"
            id="itemCategory"
            onChange={this.checkCategory}
          >
            {categories.map(category => (
              <option key={category}>{category}</option>
            ))}
          </select>
        </div>

        {this.state.checkCategory !== "Recipes" && (
          <div className="from-group">
            <label htmlFor="itemQuantity">Item Quantity:</label>
            <div className="row align-items-center">
              <div className="col adjust-quantity">
                {itemQuantity > 1 && (
                  <button
                    type="button"
                    className="btn btn-dec btn-lg"
                    onClick={this.decrementQuantity}
                    aria-hidden
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
                  aria-hidden
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
            </div>
          </div>
        )}
        {this.state.checkCategory !== "Recipes" && (
          <button
            type="submit"
            className="btn btn-addItem btn-lg"
            disabled={this.state.itemValue === ""}
          >
            Add Item
          </button>
        )}

        {this.state.checkCategory === "Recipes" && (
          <button
            type="submit"
            className="btn btn-addItem btn-lg"
            disabled={this.state.itemValue === ""}
          >
            Add Recipe
          </button>
        )}
      </form>
    );
  }
}

export default AddItem;
