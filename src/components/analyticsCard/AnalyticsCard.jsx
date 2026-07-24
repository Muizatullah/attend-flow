import styles from "./analyticsCard.module.css";

const AnalyticsCard = () => {
  return (
    <div className={styles.analyticsCard}>

      <h4>Attendance Analytics</h4>

      <div className={styles.chart}>

        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
        <div className={styles.bar4}></div>
        <div className={styles.bar5}></div>
        <div className={styles.bar6}></div>

      </div>

      <h2>92%</h2>

      <p>This Week</p>

    </div>
  );
};

export default AnalyticsCard;