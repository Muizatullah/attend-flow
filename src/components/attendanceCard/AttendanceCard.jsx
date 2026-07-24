import styles from "./attendanceCard.module.css";
import { FaCheckCircle } from "react-icons/fa";

const AttendanceCard = () => {
  return (
    <div className={styles.card}>

      <FaCheckCircle className={styles.icon}/>

      <div>

        <h4>Attendance Recorded</h4>

        <p>CSC301 • 09:15 AM</p>

      </div>

    </div>
  );
};

export default AttendanceCard;