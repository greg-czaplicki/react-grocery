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
        itemQuantity: 1,
        isComplete: false
      },
      {
        id: 2,
        itemName: "Milk",
        itemCategory: "Dairy",
        itemQuantity: 2,
        isComplete: false
      },
      {
        id: 3,
        itemName: "Butter",
        itemCategory: "Dairy",
        itemQuantity: 1,
        isComplete: false
      }
    ]
  };

  render() {
    const { items } = this.state;
    const uniqueCategories = [...new Set(items.map(item => item.itemCategory))];
    return (
      <div>
        <h1>{this.state.appTitle}</h1>
        <AddItem />
        <ListWrapper items={items} categories={uniqueCategories} />
      </div>
    );
  }
}

export default AppWrapper;
