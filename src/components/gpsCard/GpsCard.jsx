import styles from "./gpsCard.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const GpsCard = () => {
  return (
    <div className={styles.gpsCard}>

      <div className={styles.icon}>
        <FaMapMarkerAlt />
      </div>

      <div>
        <h4>GPS Verified</h4>
        <p>Within Campus</p>
      </div>

    </div>
  );
};

export default GpsCard;