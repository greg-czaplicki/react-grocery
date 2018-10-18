import React, { Component } from "react";
import AddItem from "./AddItem";
import ListWrapper from "./ListWrapper";

class AppWrapper extends Component {
  state = {
    appTitle: "Grocery List",
    items: [
      {
        id: 1,
        itemName: "Parsley",
        itemCategory: "Produce",
        ItemQuantity: 1,
        isComplete: false
      },
      {
        id: 2,
        itemName: "Milk",
        itemCategory: "Dairy",
        ItemQuantity: 1,
        isComplete: false
      }
    ]
  };
  render() {
    return (
      <div>
        <h1>{this.state.appTitle}</h1>
        <AddItem />
        <ListWrapper items={this.state.items} />
      </div>
    );
  }
}

export default AppWrapper;
