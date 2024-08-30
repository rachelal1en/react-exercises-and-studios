import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
   return (
    <div>
      <img className= "recipeImage" src={recipedata[0].recipeImage} alt={recipedata[0].name} />
    </div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 