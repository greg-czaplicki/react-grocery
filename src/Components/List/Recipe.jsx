import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const { recipes } = this.props;
    return (
      <div className="recipes">
        {recipes.map(recipe => (
          <div key={recipe.recipeName}>
            <h5 className="recipe-title">
              {recipe.recipeName}
              {" - "}
              <a
                href={recipe.recipeURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Click to view recipe
              </a>
            </h5>
          </div>
        ))}
      </div>
    );
  }
}

export default Recipe;
