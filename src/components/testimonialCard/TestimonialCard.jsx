import styles from "./testimonialCard.module.css";

import { FaQuoteLeft } from "react-icons/fa";

import { FaStar } from "react-icons/fa";

const TestimonialCard = ({
  image,
  name,
  role,
  comment,
  rating,
}) => {
  return (
    <div className={styles.card}>

      <FaQuoteLeft className={styles.quote} />

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <span>{role}</span>

      <p>{comment}</p>

      <div className={styles.rating}>
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

    </div>
  );
};

export default TestimonialCard;