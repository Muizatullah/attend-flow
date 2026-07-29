
// import DashboardUI from "../dashboardUI/DashboardUI";
// import FloatingCard from "../floatingCard/FloatingCard";


// import styles from "./dashboardShowcase.module.css";
// import PhoneMockup from "../phoneMockup/PhoneMockup";
// import GpsCard from "../gpsCard/GpsCard";
// import AttendanceCard from "../attendanceCard/AttendanceCard";
// import AnalyticsCard from "../analyticsCard/AnalyticsCard";

// const DashboardShowcase = () => {
//   return (







    
//     <section className={styles.section}>
      
//       <div className={`${styles.container} container`}>

        
//         <div className={styles.left}>
         
//         </div>

       



//         <div className={styles.right}>
//   <div className={styles.showcase}>
//     <PhoneMockup />
//     <GpsCard />
//     <AttendanceCard />
//     <AnalyticsCard />
//   </div>
// </div>

//       </div>
//     </section>
//   );
// };

// export default DashboardShowcase;



import styles from "./dashboardShowcase.module.css";
import PhoneMockup from "../phoneMockup/PhoneMockup";
import GpsCard from "../gpsCard/GpsCard";
import AttendanceCard from "../attendanceCard/AttendanceCard";
import AnalyticsCard from "../analyticsCard/AnalyticsCard";

const DashboardShowcase = () => {
  return (
    <section className={styles.section}>

      <div className="container">

        <div className={styles.heading}>

          <span>PRODUCT SHOWCASE</span>

          <h2>
            See AttendFlow
            <br />
            In Action
          </h2>

          <p>
            From QR attendance to GPS verification and live analytics,
            everything works together in one beautiful dashboard built
            for modern schools and universities.
          </p>

        </div>

        <div className={styles.showcase}>

          <PhoneMockup />

          <GpsCard />

          <AttendanceCard />

          <AnalyticsCard />

        </div>

      </div>

    </section>
  );
};

export default DashboardShowcase;