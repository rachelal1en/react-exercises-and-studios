import recipedata from "./recipe.json";
import "./styling.css";

function IngredientList() {

  let ingredientImport = recipedata[0].ingredients.map((ingredient, index) => {
    return (<li key={index}>{ingredient}</li>);
});

   return (
    <div>
      <h3>Ingredients</h3>
      <ul>
      {ingredientImport}
      </ul>
    </div>
    );
 }
 
 export default IngredientList;