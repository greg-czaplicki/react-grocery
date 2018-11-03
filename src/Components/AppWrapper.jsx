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

  titleCaseItem = name => {
    return name
      .split(" ")
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
  };

  handleAddItem = (e, quantity) => {
    e.preventDefault();
    let itemName = e.target.itemName.value;
    itemName = this.titleCaseItem(itemName);
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
        <h1 className="text-center">{appTitle}</h1>
        <AddItem categories={categories} onAddItem={this.handleAddItem} />
        <ListWrapper
          totalItems={items}
          items={cartItems}
          categories={Categories}
          completedItems={completedItems}
          completedCategories={completedCategories}
          toggleCompleted={this.toggleCompleted}
          onDeleteDB={this.handleDeleteDB}
        />
      </div>
    );
  }
}

export default AppWrapper;
