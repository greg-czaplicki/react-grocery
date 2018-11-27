import React, { Component } from "react";
import AddItem from "./AddItem/AddItem";
import List from "./List/List";
import CompletedList from "./List/CompletedList";
import firebase from "../firebase";

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

class AppWrapper extends Component {
  state = {
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
    items: [],
    errors: {}
  };

  componentWillMount() {
    firestore.collection("items").onSnapshot(items =>
      this.setState({
        items: items.docs.map(item => item.data())
      })
    );
  }

  validate = e => {
    const errors = {};

    if (e.target.itemName.value.trim() === "") {
      errors.itemName = "Item name is required.";
      e.target.itemName.value = "";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  titleCaseItem = name => {
    return name
      .split(" ")
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
  };

  handleAddItem = (e, quantity) => {
    e.preventDefault();

    const errors = this.validate(e);
    this.setState({
      errors: errors || {}
    });
    if (errors) return;

    let itemName = e.target.itemName.value;
    itemName = this.titleCaseItem(itemName);
    const itemCategory = e.target.itemCategory.value;
    const itemQuantity = quantity;
    const isComplete = false;
    const id = this.state.items.length;
    const newItem = { id, itemName, itemQuantity, itemCategory, isComplete };

    firestore
      .collection("items")
      .doc()
      .set(newItem);
    e.target.reset();
  };

  handleDeleteDB = () => {
    const password = window.prompt(
      "Enter the password to clear the grocery list."
    );

    if (password === "1029") {
      firestore
        .collection("items")
        .get()
        .then(QuerySnapshot => {
          const batch = firestore.batch();
          QuerySnapshot.forEach(doc => {
            batch.delete(doc.ref);
          });
          return batch.commit();
        });
    } else {
      window.alert("The password is incorrect!");
    }
  };

  toggleCompleted = item => {
    const toggle = !item.isComplete;
    firestore
      .collection("items")
      .where("id", "==", item.id)
      .get()
      .then(QuerySnapshot => {
        QuerySnapshot.forEach(doc => {
          firestore
            .collection("items")
            .doc(doc.id)
            .update({ isComplete: toggle });
        });
      });
  };

  filterItems = (cat, option) => {
    const filteredItems = this.state.items.filter(
      item => item.itemCategory === cat
    );
    return filteredItems.filter(item => item.isComplete === option);
  };

  render() {
    const { categories, items, errors } = this.state;
    return (
      <div className="container-fluid">
        <div className="addItemWrapper">
          <h1 className="text-center title">Grocery List</h1>
          <AddItem
            categories={categories}
            onAddItem={this.handleAddItem}
            error={errors.itemName}
          />
        </div>
        <div className="listWrapper">
          {items.length === 0 && (
            <h4 className="empty-title">
              Your grocery list is currently empty.
            </h4>
          )}

          {categories.map(category => (
            <List
              category={category}
              items={this.filterItems(category, false)}
              toggleCompleted={this.toggleCompleted}
            />
          ))}

          {items.length > 0 && <h4 className="completed-title">Completed</h4>}

          {categories.map(category => (
            <CompletedList
              category={category}
              items={this.filterItems(category, true)}
              toggleCompleted={this.toggleCompleted}
            />
          ))}

          {items.length > 0 && (
            <button
              onClick={this.handleDeleteDB}
              className="btn btn-danger btn-lg btn-block deleteDb-button mt-4"
            >
              Clear Grocery List?
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AppWrapper;
