import styles from "./pricingCard.module.css";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({
  title,
  price,
  duration,
  features,
  popular,
}) => {
  return (
    <div
      className={`${styles.card} ${
        popular ? styles.popular : ""
      }`}
    >
      {popular && (
        <span className={styles.badge}>
          Most Popular
        </span>
      )}

      <h3>{title}</h3>

      <h1>
        {price}
        <span>{duration}</span>
      </h1>

      <ul>
        {features.map((item, index) => (
          <li key={index}>
            <FaCheck />
            {item}
          </li>
        ))}
      </ul>

      <button>Choose Plan</button>
    </div>
  );
};

export default PricingCard;