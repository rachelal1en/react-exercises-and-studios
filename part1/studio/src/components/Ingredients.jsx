import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = [
        '4 pounds new potatoes, peeled and cut into 1/4-inch-thick slices',
        '1 small onion, chopped',
        '2 (14-ounce) cans chicken broth',
        '1 pint half-and-half',
        'shredded Cheddar cheese'];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}