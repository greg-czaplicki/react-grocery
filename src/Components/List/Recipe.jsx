import React, { Component } from "react";

class Recipe extends Component {
  truncateRecipe = recipe => {
    if (recipe.length > 28) {
      const newRecipe = recipe.substring(0, 29);
      return newRecipe + "...";
    } else {
      return recipe;
    }
  };

  render() {
    const { recipes } = this.props;
    return (
      <div className="recipes">
        {recipes.map(recipe => (
          <div key={recipe.recipeName}>
            <a
              href={recipe.recipeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h5 className="recipe-title">
                - {this.truncateRecipe(recipe.recipeName)}
              </h5>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Recipe;
