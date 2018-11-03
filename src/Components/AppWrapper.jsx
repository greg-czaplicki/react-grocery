import React, { Component } from "react";
import AddItem from "./AddItem";
import ListWrapper from "./ListWrapper";
import firebase from "../firebase";

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

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

  componentDidMount() {
    firestore.collection("items").onSnapshot(items =>
      this.setState({
        items: items.docs.map(item => item.data())
      })
    );
  }

  handleAddItem = (e, quantity) => {
    e.preventDefault();
    const itemName = e.target.itemName.value;
    const itemCategory = e.target.itemCategory.value;
    const itemQuantity = quantity;
    const items = this.state.items;
    const id = items.length + 1;
    const isComplete = false;
    const newItem = { id, itemName, itemQuantity, itemCategory, isComplete };
    firestore
      .collection("items")
      .doc()
      .set(newItem);
    e.target.reset();
  };

  toggleCompleted = item => {
    const items = this.state.items;
    const getItem = items[item.id - 1];
    getItem.isComplete = !getItem.isComplete;
    this.setState({
      items
    });
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
      <div className="container">
        <h1>{appTitle}</h1>
        <AddItem categories={categories} onAddItem={this.handleAddItem} />
        <ListWrapper
          items={cartItems}
          categories={Categories}
          completedItems={completedItems}
          completedCategories={completedCategories}
          toggleCompleted={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default AppWrapper;
