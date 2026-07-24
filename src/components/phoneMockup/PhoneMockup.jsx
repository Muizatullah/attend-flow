import styles from "./phoneMockup.module.css";
import { FaQrcode, FaCheckCircle } from "react-icons/fa";

const PhoneMockup = () => {
  return (
    <div className={styles.phone}>

      <div className={styles.notch}></div>

      <div className={styles.screen}>

        <h3>QR Scanner</h3>

        <div className={styles.qrBox}>
          <FaQrcode className={styles.qrIcon} />
        </div>

        <div className={styles.success}>
          <FaCheckCircle />
          Attendance Successful
        </div>

        <div className={styles.student}>
          <h4>Bakri Muizat</h4>
          <p>CSC 301</p>
        </div>

      </div>

    </div>
  );
};

export default PhoneMockup;