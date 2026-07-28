import styles from "./dashboardPreview.module.css";
import { FaCheckCircle, FaMapMarkerAlt, FaQrcode } from "react-icons/fa";

const DashboardPreview = () => {
  return (
    <div className={styles.previewContainer}>
      <div className={styles.phone}>
        <div className={styles.dashboard}>
          <div className={styles.header}>
            <h3>AttendFlow</h3>
            <span>Today</span>
          </div>

          <div className={styles.progressCard}>
            <h4>Today's Attendance</h4>

            <h1>92%</h1>

            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.card}>
              <h2>250</h2>
              <p>Students</p>
            </div>

            <div className={styles.card}>
              <h2>230</h2>
              <p>Present</p>
            </div>

            <div className={styles.card}>
              <h2>20</h2>
              <p>Absent</p>
            </div>

            <div className={styles.card}>
              <h2>12</h2>
              <p>Late</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.gpsCard}>
        <FaMapMarkerAlt />
        <p>GPS Verified</p>
      </div>

      <div className={styles.qrCard}>
        <FaQrcode size={40} />
        <p>QR Scan Ready</p>
      </div>

      <div className={styles.notifyCard}>
        <FaCheckCircle />
        <p>Attendance Recorded</p>
      </div>
    </div>
  );
};

export default DashboardPreview;
