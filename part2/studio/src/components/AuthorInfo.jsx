import recipedata from "./recipe.json";
import "./styling.css";

function AuthorInfo() {
  let name = recipedata[0].author;
  let image = <img class = "authorImage" src={recipedata[0].authorImage} alt={name} />;
  let recipeWebsite = <a href={recipedata[0].website} target="_blank">Link</a>;

   return (
    <div>
      {name}
      {image}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 