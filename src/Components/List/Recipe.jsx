import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div>
        <h4>Recipes</h4>
        {recipes.map(recipe => (
          <div key={recipe.recipeName}>
            {recipe.recipeName}
            {" - "}
            <a
              href={recipe.recipeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click to view recipe
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Recipe;
