import styles from "./features.module.css"
import FeatureCard from "../featureCard/FeatureCard";
import { featuresData } from "../../data";



const Features = () => {
  return (
    <section className={styles.features}>

      <div className="container">

        <div className={styles.heading}>

          <span>FEATURES</span>

          <h2>Why Choose AttendFlow?</h2>

          <p>
            Everything you need to simplify attendance management
            in one intelligent platform.
          </p>

        </div>

        <div className={styles.grid}>

          {featuresData.map((feature)=>(
              <FeatureCard
                  key={feature.id}
                  {...feature}
              />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;