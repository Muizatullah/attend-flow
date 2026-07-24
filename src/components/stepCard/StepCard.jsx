import styles from "./stepCard.module.css";

const StepCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.number}>
        <Icon className={styles.icon} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default StepCard;