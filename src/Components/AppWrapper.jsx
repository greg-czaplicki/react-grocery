import React, { Component } from "react";
import AddItem from "./AddItem";
import ListWrapper from "./ListWrapper";

class AppWrapper extends Component {
  state = {
    appTitle: "Grocery List",
    categories: [
      "Produce",
      "Deli",
      "Breads/Pasta",
      "Snacks",
      "Baking/Condiments",
      "Canned Goods",
      "Breakfast",
      "Beverages",
      "Meat/Seafood",
      "Dairy",
      "Pet Supplies",
      "Cleaning Products",
      "Toiletries",
      "Frozen Foods",
      "Miscellaneous",
      "Recipes"
    ],
    items: []
  };

  handleAddItem = (e, quantity) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const itemCategory = e.target.itemCategory.value;
    const itemQuantity = quantity;
    const items = [...this.state.items];
    const id = items.length + 1;
    const isComplete = false;
    const newItem = { id, itemName, itemQuantity, itemCategory, isComplete };
    items.push(newItem);
    this.setState({
      items
    });
    e.target.reset();
  };

  render() {
    const { items, appTitle, categories } = this.state;
    const cartItems = items.filter(item => item.isComplete === false);
    const completedItems = items.filter(item => item.isComplete === true);
    const Categories = [...new Set(cartItems.map(item => item.itemCategory))];
    const completedCategories = [
      ...new Set(completedItems.map(item => item.itemCategory))
    ];
    return (
      <div>
        <h1>{appTitle}</h1>
        <AddItem
          categories={categories}
          onAddItem={this.handleAddItem}
          quantity={this.state.itemQuantity}
        />
        <ListWrapper
          items={cartItems}
          categories={Categories}
          completedItems={completedItems}
          completedCategories={completedCategories}
        />
      </div>
    );
  }
}

export default AppWrapper;
