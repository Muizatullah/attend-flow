

// import styles from "./dashboardScene.module.css";
// import {
//   FaUsers,
//   FaChartLine,
//   FaMapMarkerAlt,
//   FaBell,
//   FaCheckCircle,
// } from "react-icons/fa";

// const DashboardScene = () => {
//   return (
//     <div className={styles.scene}>
//       {/* Main Dashboard */}

//       <div className={styles.dashboard}>

//         {/* Sidebar */}

//         <div className={styles.sidebar}>
//           <h2>AF</h2>
//           <p>AttendFlow</p>

//           <ul>
//             <li className={styles.active}>Dashboard</li>
//             <li>Attendance</li>
//             <li>Students</li>
//             <li>Courses</li>
//             <li>Reports</li>
//           </ul>
//         </div>

//         {/* Main */}

//         <div className={styles.main}>

//           <div className={styles.topBar}>
//             <h3>Dashboard</h3>

//             <button>Generate QR</button>
//           </div>

//           {/* Stats */}

//           <div className={styles.stats}>

//             <div className={styles.statCard}>
//               <FaUsers />
//               <h2>250</h2>
//               <p>Students</p>
//             </div>

//             <div className={styles.statCard}>
//               <FaCheckCircle />
//               <h2>230</h2>
//               <p>Present</p>
//             </div>

//             <div className={styles.statCard}>
//               <FaChartLine />
//               <h2>92%</h2>
//               <p>Attendance</p>
//             </div>

//           </div>

//           {/* Chart */}

//           <div className={styles.chartCard}>

//             <h4>Weekly Attendance</h4>

//             <div className={styles.chart}>
//               <div style={{ height: "60%" }}></div>
//               <div style={{ height: "85%" }}></div>
//               <div style={{ height: "75%" }}></div>
//               <div style={{ height: "95%" }}></div>
//               <div style={{ height: "70%" }}></div>
//               <div style={{ height: "80%" }}></div>
//             </div>

//           </div>

//         </div>

//       </div>

//       {/* Floating Cards */}

//       <div className={styles.gps}>
//         <FaMapMarkerAlt />
//         <span>GPS Verified</span>
//       </div>

//       <div className={styles.live}>
//         <FaBell />
//         <span>Live Attendance</span>
//       </div>

//       <div className={styles.analytics}>
//         <FaChartLine />
//         <span>Analytics</span>
//       </div>

//     </div>
//   );
// };

// export default DashboardScene;




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
      {/* Floating Card - GPS */}
      <div className={styles.gps}>
        <FaMapMarkerAlt />
        <div>
          <h4>GPS Verified</h4>
          <p>Within Campus</p>
        </div>
      </div>

      {/* Dashboard */}
      <div className={styles.dashboard}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>A</div>
            <span>AttendFlow</span>
          </div>

          <ul>
            <li className={styles.active}>Dashboard</li>
            <li>Attendance</li>
            <li>Students</li>
            <li>Courses</li>
            <li>Reports</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.main}>
          <div className={styles.topBar}>
            <div>
              <h2>Dashboard</h2>
              <p>Welcome back, Admin 👋</p>
            </div>

            <button>Generate QR</button>
          </div>

          {/* Statistics */}
          <div className={styles.stats}>
            <div className={styles.statCard}>
              <FaUsers />
              <h3>250</h3>
              <p>Students</p>
            </div>

            <div className={styles.statCard}>
              <FaCheckCircle />
              <h3>230</h3>
              <p>Present</p>
            </div>

            <div className={styles.statCard}>
              <FaChartLine />
              <h3>92%</h3>
              <p>Attendance</p>
            </div>
          </div>

          {/* Chart */}
          <div className={styles.chartCard}>
            <h3>Weekly Attendance</h3>

            <div className={styles.chart}>
              <div style={{ height: "60%" }}></div>
              <div style={{ height: "85%" }}></div>
              <div style={{ height: "72%" }}></div>
              <div style={{ height: "95%" }}></div>
              <div style={{ height: "68%" }}></div>
              <div style={{ height: "82%" }}></div>
              <div style={{ height: "100%" }}></div>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Card - Live */}
      <div className={styles.live}>
        <FaBell />

        <div>
          <h4>Live Attendance</h4>
          <p>Scanning in progress</p>
        </div>
      </div>

      {/* Floating Card - Analytics */}
      <div className={styles.analytics}>
        <FaChartLine />

        <div>
          <h4>Analytics</h4>
          <p>Attendance +12%</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardScene;