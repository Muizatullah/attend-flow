import styles from "./cta.module.css";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

const CTA = () => {
  return (
    <section className={styles.cta}>

      <div className="container">

        <div className={styles.ctaCard}>

          <span className={styles.tag}>
            🚀 Get Started Today
          </span>

          <h2>
            Ready to Transform
            <br />
            Attendance Management?
          </h2>

          <p>
            Join forward-thinking institutions using AttendFlow
            to simplify attendance with QR Code verification,
            GPS tracking and powerful analytics.
          </p>

          <div className={styles.buttons}>

            <button className={styles.primary}>
              Request Demo
              <FaArrowRight />
            </button>

            <button className={styles.secondary}>
              Contact Sales
            </button>

          </div>

          <div className={styles.features}>

            <span>
              <FaCircleCheck />
              QR Attendance
            </span>

            <span>
              <FaCircleCheck />
              GPS Verification
            </span>

            <span>
              <FaCircleCheck />
              Live Analytics
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;