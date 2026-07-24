import styles from "./hero.module.css";
import DashboardPreview from "../dashboardPreview/DashboardPreview";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`${styles.heroContainer} container`}>

        {/* LEFT SIDE */}
        <div className={styles.heroLeft}>

          <span className={styles.badge}>
            🚀 Smart Attendance Platform
          </span>

          <h1 className={styles.heroTitle}>
            One Move Ahead.
            <br />
            Accuracy in Every Flow.
          </h1>

          <p className={styles.heroDescription}>
            AttendFlow helps universities manage attendance using QR Code
            scanning and GPS verification, reducing attendance fraud while
            making attendance faster and more accurate.
          </p>

          <ul className={styles.heroFeatures}>
            <li>✔ QR Code Attendance</li>
            <li>✔ GPS Verification</li>
            <li>✔ Attendance Analytics</li>
            <li>✔ Downloadable Reports</li>
          </ul>

          <div className={styles.heroButtons}>
            <button className={styles.primaryBtn}>
              Get Started
            </button>

            <button className={styles.secondaryBtn}>
              Watch Demo
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className={styles.heroRight}>
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
};

export default Hero;