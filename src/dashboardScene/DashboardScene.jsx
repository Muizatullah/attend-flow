import styles from "./dashboardScene.module.css";
import {
  FaUsers,
  FaChartLine,
  FaMapMarkerAlt,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

const DashboardScene = () => {
  return (
    <div className={styles.scene}>
      {/* Main Dashboard */}

      <div className={styles.dashboard}>

        {/* Sidebar */}

        <div className={styles.sidebar}>
          <h2>AF</h2>

          <ul>
            <li className={styles.active}>Dashboard</li>
            <li>Attendance</li>
            <li>Students</li>
            <li>Courses</li>
            <li>Reports</li>
          </ul>
        </div>

        {/* Main */}

        <div className={styles.main}>

          <div className={styles.topBar}>
            <h3>Dashboard</h3>

            <button>Generate QR</button>
          </div>

          {/* Stats */}

          <div className={styles.stats}>

            <div className={styles.statCard}>
              <FaUsers />
              <h2>250</h2>
              <p>Students</p>
            </div>

            <div className={styles.statCard}>
              <FaCheckCircle />
              <h2>230</h2>
              <p>Present</p>
            </div>

            <div className={styles.statCard}>
              <FaChartLine />
              <h2>92%</h2>
              <p>Attendance</p>
            </div>

          </div>

          {/* Chart */}

          <div className={styles.chartCard}>

            <h4>Weekly Attendance</h4>

            <div className={styles.chart}>
              <div style={{ height: "60%" }}></div>
              <div style={{ height: "85%" }}></div>
              <div style={{ height: "75%" }}></div>
              <div style={{ height: "95%" }}></div>
              <div style={{ height: "70%" }}></div>
              <div style={{ height: "80%" }}></div>
            </div>

          </div>

        </div>

      </div>

      {/* Floating Cards */}

      <div className={styles.gps}>
        <FaMapMarkerAlt />
        <span>GPS Verified</span>
      </div>

      <div className={styles.live}>
        <FaBell />
        <span>Live Attendance</span>
      </div>

      <div className={styles.analytics}>
        <FaChartLine />
        <span>Analytics</span>
      </div>

    </div>
  );
};

export default DashboardScene;