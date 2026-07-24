import styles from "./pricing.module.css";
import { pricingData } from "../../data";
import PricingCard from "../pricingCard/PricingCard";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className="container">

        <div className={styles.heading}>
          <span>PRICING</span>

          <h2>Flexible Plans for Every Institution</h2>

          <p>
            Choose a plan that fits your school's size and needs.
          </p>
        </div>

        <div className={styles.grid}>
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.id}
              {...plan}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;