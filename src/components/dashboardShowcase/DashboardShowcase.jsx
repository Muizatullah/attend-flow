import styles from "./dashboardShowcase.module.css";
import DashboardScene from "../dashboardScene/DashboardScene";

const DashboardShowcase = () => {
  return (
    <section className={styles.section}>

      <div className="container">

        <div className={styles.heading}>

          <span>PRODUCT SHOWCASE</span>

          <h2>
            See AttendFlow
            <br />
            In Action
          </h2>

          <p>
            From QR attendance to GPS verification and live analytics,
            everything works together in one beautiful dashboard built
            for modern schools and universities.
          </p>

        </div>

        <div className={styles.showcase}>
          <DashboardScene />
        </div>

      </div>

    </section>
  );
};

export default DashboardShowcase;





