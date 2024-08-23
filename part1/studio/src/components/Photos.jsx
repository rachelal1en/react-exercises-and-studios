import styles from './Description.module.css';

export default function RecipePhoto() {
    let image = "https://www.southernliving.com/thmb/l9mB4haJUxIhMM7Rp6hx5CyPWag=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/LoadedPotatoSoup_TK-0011-a5bfa370b3184d1185537adb05fa87d1.jpg";

    return (
        <img src={image} alt="recipe photo" className={styles.imageUpdates} />
    )
}