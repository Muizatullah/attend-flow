import styles from "./secureCheck.module.css";
import {
  FaQrcode,
  FaMapMarkerAlt,
  FaUserCheck,
  FaArrowRight,
} from "react-icons/fa";

const SecureCheck = () => {
  return (
    <section className={styles.secureCheck}>

      <div className="container">

        <div className={styles.wrapper}>

          {/* Left Side */}

          <div className={styles.left}>

            <span className={styles.tag}>
              🛡️ SecureCheck™
            </span>

            <h2>
              Three Layers.
              <br />
              One Trusted Attendance.
            </h2>

            <p>
              AttendFlow verifies every attendance using intelligent
              security checks. Students don't just scan a QR code—they
              must also pass location and identity verification before
              attendance is recorded.
            </p>

            <div className={styles.features}>

              <div className={styles.feature}>
                <FaQrcode />
                <span>Dynamic QR Verification</span>
              </div>

              <div className={styles.feature}>
                <FaMapMarkerAlt />
                <span>GeoLock™ Location Check</span>
              </div>

              <div className={styles.feature}>
                <FaUserCheck />
                <span>FacePass™ Recognition</span>
              </div>

            </div>

            <button className={styles.button}>
              Learn More
              <FaArrowRight />
            </button>

          </div>

          {/* Right Side */}

          <div className={styles.right}>

            <div className={styles.flowCard}>

              <h3>Verification Flow</h3>

              <div className={styles.step}>
                <FaQrcode />
                <span>QR Secure™</span>
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={styles.step}>
                <FaMapMarkerAlt />
                <span>GeoLock™</span>
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={styles.step}>
                <FaUserCheck />
                <span>FacePass™</span>
              </div>

              <div className={styles.arrow}>↓</div>

              <div className={styles.success}>
                ✅ Attendance Verified
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SecureCheck;