import styles from "./featureCard.module.css"

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;