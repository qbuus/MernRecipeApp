import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/createRecipe">Create Recipe</Link>
      <Link to="/savedRecipes">Saved Recipe</Link>
      <Link to="/auth">Login / Register</Link>
    </div>
  );
};

export default NavBar;
