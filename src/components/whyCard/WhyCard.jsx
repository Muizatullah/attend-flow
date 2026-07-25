import styles from "./whyCard.module.css";

const WhyCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>

      <div className={styles.iconBox}>
        <Icon className={styles.icon} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

    </div>
  );
};

export default WhyCard;