import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.southernliving.com/author/the-sl-test-kitchen";
    let authorPhoto = "https://www.southernliving.com/thmb/LsuqYzLJrxh0XT9ugw5NSePtnzw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Test-Kitchen-2000-f7d47a474dbd4e3b88a7464b849cefa9.jpg";
    let authorName = "Southern Living Test Kitchen";

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Southern Living Test Kitchen Logo" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Southern Living</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        let recipeTitle = "Loaded Potato Soup";
        let recipeDescription = "This comforting slow-cooker potato soup gets even tastier with toppings.";

        return (
            <div>
                <div>
                    <h1>{recipeTitle}</h1>
                    <p>{recipeDescription}</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;