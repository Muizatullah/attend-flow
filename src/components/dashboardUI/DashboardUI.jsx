import styles from "./dashboardUI.module.css";

const DashboardUI = () => {
  return (
    <div className={styles.dashboard}>

      <div className={styles.header}>
        <h3>AttendFlow Dashboard</h3>

        <span>Today</span>
      </div>

      <div className={styles.progressCard}>

        <p>Attendance Today</p>

        <h1>92%</h1>

        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>

      </div>

      <div className={styles.stats}>

        <div>
          <h2>250</h2>
          <span>Students</span>
        </div>

        <div>
          <h2>230</h2>
          <span>Present</span>
        </div>

        <div>
          <h2>20</h2>
          <span>Absent</span>
        </div>

      </div>

      <div className={styles.table}>

        <div>
          <strong>CSC 301</strong>

          <span>Present</span>
        </div>

        <div>
          <strong>CSC 309</strong>

          <span>Present</span>
        </div>

        <div>
          <strong>GST 201</strong>

          <span>Absent</span>
        </div>

      </div>

    </div>
  );
};

export default DashboardUI;