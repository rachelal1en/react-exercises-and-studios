import recipedata from "./recipe.json";

function RecipeName() {
  return <h1>{recipedata[0].name}</h1>;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header