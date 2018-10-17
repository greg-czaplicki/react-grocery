import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.itemName = React.createRef();
    this.itemCategory = React.createRef();
  }
  // itemName, itemQuantity, id
  state = {
    items: {
      Produce: [],
      Deli: [],
      "Breads/Pasta": [],
      "Baking/Condiments": [],
      "Canned Goods": [],
      Breakfast: [],
      Beverages: [],
      "Meat/Seafood": [],
      Dairy: [],
      "Pet Products": [],
      "Cleaning Products": [],
      "Paper/Plastics": [],
      Toiletries: [],
      "Frozen Foods": [],
      Miscellaneous: [],
      Recipes: []
    }
  };

  addItem = e => {
    // prevent form reload
    e.preventDefault();
    // get copy of state and current input values
    const { items } = this.state;
    const itemName = this.itemName.current.value;
    const itemCategory = this.itemCategory.current.value;
    // convert input value to grocery object
    const newItem = { itemName };
    // push object to the copy of state
    items[itemCategory].push(newItem);
    // update state
    this.setState({
      items
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Grocery List</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Item Name:</label>
            <input
              ref={this.itemName}
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Add an item..."
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category:</label>
            <select
              ref={this.itemCategory}
              className="form-control"
              id="itemCategory"
            >
              {Object.keys(this.state.items).map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <button
            onClick={e => this.addItem(e)}
            type="submit"
            className="btn btn-primary btn-lg"
          >
            Add Item
          </button>
        </form>
        <h2>List:</h2>
        <h3>{this.state.newItemName}</h3>
        {Object.keys(this.state.items).map(category => (
          <div key={category}>
            {this.state.items[category].length > 0 && <h4>{category}</h4>}
            {this.state.items[category].map(item => (
              <li key={item.ItemName}>{item.itemName}</li>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
