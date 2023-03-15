import React from "react";
import axios from "axios";

const CreateRecipePage = () => {
  const [recipe, setRecipes] = React.useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipes({ ...recipe, [name]: value });
  };

  const handleIngChange = (e, idx) => {
    const { value } = e.target;
    const ingredients = recipe.ingredients;
    ingredients[idx] = value;
    setRecipes({ ...recipe, ingredients });
  };

  const addIngredient = () => {
    setRecipes({
      ...recipe,
      ingredients: [...recipe.ingredients, ""],
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", recipe);
      alert("recipe created");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
        />

        {/* <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea> */}

        <label htmlFor="ingredients">Ingredients</label>
        {recipe.ingredients.map((ing, i) => (
          <input
            key={i}
            type="text"
            name="ingredients"
            value={ing}
            onChange={(e) => {
              handleIngChange(e, i);
            }}
          />
        ))}
        <button type="submit" onClick={addIngredient}>
          Add Ingredient
        </button>

        <label htmlFor="instructions">Instructions</label>
        <textarea
          name="instructions"
          id="instructions"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="imageUrl">Image Url</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />

        <label htmlFor="cookingTime">Image Url</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRecipePage;
