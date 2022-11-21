import styles from "./ProductCard.module.css";

export const ProductCard = ({ img }) => {
  return (
    <div className={styles.cardMainContainer}>
      <div id="imageContainer" className={styles.imageContainer}>
        <img src={img} alt="burger1"></img>
      </div>
      <div id="solidContainer" className={styles.solidContainer}>
        <div className={styles.burgerName}>Kingpin</div>
        <div className={styles.burgerPrice}>$8.45</div>
        <button className={styles.addButton}>Añadir al carrito</button>
      </div>
    </div>
  );
};
