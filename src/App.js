import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.newItem = React.createRef();
  }
  state = {
    items: []
  };

  addItem = () => {
    const { items } = this.state;
    const newItem = this.newItem.current.value;
    this.setState({
      items: [...items, newItem]
    });
    this.newItem.current.value = "";
  };

  render() {
    return (
      <div className="container">
        <h1>Grocery List</h1>
        <input
          ref={this.newItem}
          placeholder="Add Item..."
          type="text"
          name="itemName"
          id="itemInput"
        />
        <button onClick={this.addItem}>Add Item</button>
        <h3>List:</h3>
        <ul>
          {this.state.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
