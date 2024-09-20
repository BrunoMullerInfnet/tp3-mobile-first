import styles from "./Card.module.css";

const Card = ({ image, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.imagem} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.descricao}>{description}</p>
    </div>
  );
};

export default Card;
