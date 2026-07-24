import styles from "./howItWorks.module.css";
import StepCard from "../stepCard/StepCard";
import { howItWorksData } from "../../data";

const HowItWorks = () => {
  return (
    <section className={styles.section}>

      <div className="container">

        <div className={styles.heading}>

          <span>HOW IT WORKS</span>

          <h2>Attendance in Four Simple Steps</h2>

          <p>
            AttendFlow makes attendance fast, secure,
            and effortless for both lecturers and students.
          </p>

        </div>

        <div className={styles.grid}>
          {howItWorksData.map((step) => (
            <StepCard
              key={step.id}
              {...step}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default HowItWorks;