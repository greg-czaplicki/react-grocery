import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    items: {
      Produce: [
        { id: 1, itemName: "Parsley", itemQuantity: 1 },
        { id: 2, itemName: "Basil", itemQuantity: 2 }
      ],
      Deli: [],
      Snacks: [{ id: 1, itemName: "Chips", itemQuantity: 2 }]
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Grocery List</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Item Name:</label>
            <input
              type="text"
              className="form-control"
              id="itemName"
              placeholder="Add an item..."
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Category:</label>
            <select className="form-control" id="itemCategory">
              {Object.keys(this.state.items).map(category => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-lg">
            Add Item
          </button>
        </form>
        <h3>List:</h3>
        {Object.keys(this.state.items).map(category => (
          <div key={category}>
            {this.state.items[category].length > 0 && <h4>{category}</h4>}
            {this.state.items[category].map(item => (
              <li key={item.id}>{item.itemName}</li>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
