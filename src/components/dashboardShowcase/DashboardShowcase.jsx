import styles from "./dashboardShowcase.module.css";
import DashboardUI from "../dashboardUI/DashboardUI";
import FloatingCard from "../floatingCard/FloatingCard";
import PhoneMockup from "../phoneMockup/PhoneMockup";
import GpsCard from "../gpsCard/GpsCard";
import AttendanceCard from "../attendanceCard/AttendanceCard";
import AnalyticsCard from "../analyticsCard/AnalyticsCard";

const DashboardShowcase = () => {
  return (







    
    <section className={styles.section}>
      {/* <div className="container"> */}
      <div className={`${styles.container} container`}>

        {/* Left Side */}
        <div className={styles.left}>
          {/* Heading */}
          {/* Description */}
          {/* Buttons */}
        </div>

        {/* Right Side */}
        {/* <div className={styles.right}> */}
        {/* <div className={styles.right}>

          
              <PhoneMockup />
                  <GpsCard />
                      <AttendanceCard />
                         <AnalyticsCard />

          <FloatingCard
            icon="📍"
            title="GPS Verified"
            value="Within Campus"
          />

          <FloatingCard
            icon="✅"
            title="QR Scan"
            value="Successful"
          />

          <FloatingCard
            icon="📊"
            title="Attendance"
            value="92%"
          />

        </div> */}



        <div className={styles.right}>
  <div className={styles.showcase}>
    <PhoneMockup />
    <GpsCard />
    <AttendanceCard />
    <AnalyticsCard />
  </div>
</div>

      </div>
    </section>
  );
};

export default DashboardShowcase;