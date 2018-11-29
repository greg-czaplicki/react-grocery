import React, { Component } from "react";
import AddItem from "./AddItem/AddItem";
import List from "./List/List";
import CompletedList from "./List/CompletedList";
import Recipe from "./List/Recipe";
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
    recipes: [],
    errors: {}
  };

  componentWillMount() {
    firestore.collection("items").onSnapshot(items =>
      this.setState({
        items: items.docs.map(item => item.data())
      })
    );
    firestore.collection("recipes").onSnapshot(recipes =>
      this.setState({
        recipes: recipes.docs.map(recipe => recipe.data())
      })
    );
  }

  // Refactor
  validate = e => {
    const errors = {};

    if (
      e.target.itemCategory.value !== "Recipes" &&
      e.target.itemName.value.trim() === ""
    ) {
      errors.itemName = "Item name is required.";
      e.target.itemName.value = "";
    }

    if (
      e.target.itemCategory.value === "Recipes" &&
      e.target.recipeName.value.trim() === ""
    ) {
      errors.recipeName = "Recipe name is required.";
      e.target.recipeName.value = "";
    }

    if (
      e.target.itemCategory.value === "Recipes" &&
      e.target.recipeURL.value.trim() === ""
    ) {
      errors.recipeURL = "Recipe URL is required.";
      e.target.recipeURL.value = "";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Title Case Item Name
  titleCaseItem = name => {
    return name
      .split(" ")
      .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");
  };

  // Add Item object to DB
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

  // refactor to bring in entire item
  // Edit item object functionality
  handleEditItem = (item, id) => {
    item.preventDefault();
    let itemName = item.target.itemName.value;
    const itemCategory = item.target.itemCategory.value;
    itemName = this.titleCaseItem(itemName);

    firestore
      .collection("items")
      .where("id", "==", id)
      .get()
      .then(QuerySnapshot => {
        QuerySnapshot.forEach(doc => {
          firestore
            .collection("items")
            .doc(doc.id)
            .update({ itemName, itemCategory });
        });
      });
    const modal = document.querySelector(`#item${id}`);
    modal.classList.remove("show");
    modal.style.display = "none";
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop !== null) {
      backdrop.remove();
    }
  };

  // Add Recipe to DB
  handleAddRecipe = e => {
    e.preventDefault();

    const errors = this.validate(e);
    this.setState({
      errors: errors || {}
    });
    if (errors) return;

    let recipeName = e.target.recipeName.value;
    let recipeURL = e.target.recipeURL.value;
    recipeName = this.titleCaseItem(recipeName);
    let recipe = { recipeName, recipeURL };
    firestore
      .collection("recipes")
      .doc()
      .set(recipe);
    e.target.reset();
  };

  // Delete all Items from DB
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

  // Toggle item completion function
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

  // array of items filtered by category and completion
  filterItems = (cat, option) => {
    const filteredItems = this.state.items.filter(
      item => item.itemCategory === cat
    );
    return filteredItems.filter(item => item.isComplete === option);
  };

  render() {
    const { categories, items, errors, recipes } = this.state;
    return (
      <div className="container-fluid">
        <div className="addItemWrapper">
          <h1 className="text-center title">Grocery List</h1>

          <AddItem
            categories={categories}
            onAddItem={this.handleAddItem}
            onAddRecipe={this.handleAddRecipe}
            error={errors}
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
              key={category}
              categories={categories}
              category={category}
              items={this.filterItems(category, false)}
              toggleCompleted={this.toggleCompleted}
              onEditItem={this.handleEditItem}
            />
          ))}

          {items.length > 0 && <h4 className="completed-title">Completed</h4>}

          {categories.map(category => (
            <CompletedList
              key={category}
              categories={categories}
              category={category}
              items={this.filterItems(category, true)}
              toggleCompleted={this.toggleCompleted}
              onEditItem={this.handleEditItem}
            />
          ))}

          <Recipe recipes={recipes} />

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
