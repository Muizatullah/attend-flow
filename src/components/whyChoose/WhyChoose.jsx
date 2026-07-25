import styles from "./whyChoose.module.css";

import { whyChooseData } from "../../data";

import WhyCard from "../whyCard/WhyCard";

const WhyChoose = () => {
  return (
    <section className={styles.why}>

      <div className="container">

        <div className={styles.heading}>

          <span>WHY ATTENDFLOW</span>

          <h2>Built for Modern Institutions</h2>

          <p>
            AttendFlow combines speed, security and intelligence
            to simplify attendance management for schools,
            colleges and universities.
          </p>

        </div>

        <div className={styles.grid}>

          {whyChooseData.map((item) => (
            <WhyCard
              key={item.id}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;