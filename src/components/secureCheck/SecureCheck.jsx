import { useEffect, useState } from "react";
import styles from "./secureCheck.module.css";

import {
  FaQrcode,
  FaMapMarkerAlt,
  FaUserCheck,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const SecureCheck = () => {
  const [activeStep, setActiveStep] = useState(0);

  /*
    Automatically move through:

    QR → GPS → Face → Success → repeat
  */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: <FaQrcode />,
      title: "QR Secure™",
      description: "QR code verified",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "GeoLock™",
      description: "Location verified",
    },
    {
      icon: <FaUserCheck />,
      title: "FacePass™",
      description: "Identity verified",
    },
  ];

  /*
    When a user clicks one of the features
    on the left, the verification flow jumps
    to that step.
  */

  const handleFeatureClick = (index) => {
    setActiveStep(index);
  };

  return (
    <section className={styles.secureCheck}>
      <div className="container">

        <div className={styles.wrapper}>

          {/* =================================
              LEFT SIDE
          ================================= */}

          <div className={styles.left}>

            <span className={styles.tag}>
              🛡️ SecureCheck™
            </span>

            <h2>
              Three Layers.
              <br />
              One Trusted Attendance.
            </h2>

            <p>
              AttendFlow verifies every attendance using
              intelligent security checks. Students don't
              just scan a QR code. They must also pass
              location and identity verification before
              attendance is recorded.
            </p>


            {/* ===============================
                FEATURES
            =============================== */}

            <div className={styles.features}>

              {/* QR */}

              <button
                type="button"
                className={`${styles.feature} ${
                  activeStep === 0
                    ? styles.featureActive
                    : ""
                }`}
                onClick={() => handleFeatureClick(0)}
              >

                <div className={styles.featureIcon}>
                  <FaQrcode />
                </div>

                <div className={styles.featureContent}>

                  <span>
                    Dynamic QR Verification
                  </span>

                  <small>
                    Secure attendance code
                  </small>

                </div>

              </button>


              {/* GPS */}

              <button
                type="button"
                className={`${styles.feature} ${
                  activeStep === 1
                    ? styles.featureActive
                    : ""
                }`}
                onClick={() => handleFeatureClick(1)}
              >

                <div className={styles.featureIcon}>
                  <FaMapMarkerAlt />
                </div>

                <div className={styles.featureContent}>

                  <span>
                    GeoLock™ Location Check
                  </span>

                  <small>
                    Verify student's location
                  </small>

                </div>

              </button>


              {/* FACE */}

              <button
                type="button"
                className={`${styles.feature} ${
                  activeStep === 2
                    ? styles.featureActive
                    : ""
                }`}
                onClick={() => handleFeatureClick(2)}
              >

                <div className={styles.featureIcon}>
                  <FaUserCheck />
                </div>

                <div className={styles.featureContent}>

                  <span>
                    FacePass™ Recognition
                  </span>

                  <small>
                    Confirm student's identity
                  </small>

                </div>

              </button>

            </div>


            {/* BUTTON */}

            <button
              type="button"
              className={styles.button}
            >
              Learn More

              <FaArrowRight />

            </button>

          </div>


          {/* =================================
              RIGHT SIDE
          ================================= */}

          <div className={styles.right}>

            <div className={styles.flowCard}>

              {/* ===============================
                  HEADER
              =============================== */}

              <div className={styles.flowHeader}>

                <div>

                  <span>
                    SECURITY SYSTEM
                  </span>

                  <h3>
                    Live Verification
                  </h3>

                </div>


                <div className={styles.liveDot}>

                  <span></span>

                  LIVE

                </div>

              </div>


              {/* ===============================
                  VERIFICATION STEPS
              =============================== */}

              <div className={styles.steps}>

                {steps.map((step, index) => {

                  const isActive =
                    activeStep === index;

                  const isCompleted =
                    activeStep > index;

                  return (
                    <div
                      key={step.title}
                      className={styles.stepWrapper}
                    >

                      <div
                        className={`
                          ${styles.step}
                          ${
                            isActive
                              ? styles.activeStep
                              : ""
                          }
                          ${
                            isCompleted
                              ? styles.completedStep
                              : ""
                          }
                        `}
                      >

                        {/* ICON */}

                        <div className={styles.stepIcon}>

                          {isCompleted ? (
                            <FaCheckCircle />
                          ) : (
                            step.icon
                          )}

                        </div>


                        {/* TEXT */}

                        <div className={styles.stepText}>

                          <h4>
                            {step.title}
                          </h4>

                          <p>

                            {isActive
                              ? "Checking..."
                              : isCompleted
                              ? step.description
                              : "Waiting..."
                            }

                          </p>

                        </div>


                        {/* CHECK */}

                        {isCompleted && (
                          <span className={styles.check}>
                            ✓
                          </span>
                        )}

                      </div>


                      {/* CONNECTOR */}

                      {index <
                        steps.length - 1 && (
                        <div
                          className={`
                            ${styles.connector}
                            ${
                              activeStep > index
                                ? styles.connectorActive
                                : ""
                            }
                          `}
                        />
                      )}

                    </div>
                  );
                })}

              </div>


              {/* ===============================
                  SUCCESS CARD
              =============================== */}

              <div
                className={`
                  ${styles.success}
                  ${
                    activeStep === 3
                      ? styles.successActive
                      : ""
                  }
                `}
              >

                <FaCheckCircle />

                <div>

                  <strong>
                    Attendance Recorded
                  </strong>

                  <span>
                    All security checks passed
                  </span>

                </div>

              </div>


              {/* ===============================
                  PROGRESS
              =============================== */}

              <div className={styles.progressContainer}>

                <div className={styles.progressLabels}>

                  <span>
                    Verification Progress
                  </span>

                  <strong>
                    {(activeStep + 1) * 25}%
                  </strong>

                </div>


                <div className={styles.progressBar}>

                  <div
                    className={styles.progress}
                    style={{
                      width: `${
                        (activeStep + 1) * 25
                      }%`,
                    }}
                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SecureCheck;