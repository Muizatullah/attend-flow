import styles from "./floatingCard.module.css";

const FloatingCard = ({ icon, title, value }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        {icon}
      </div>

      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default FloatingCard;