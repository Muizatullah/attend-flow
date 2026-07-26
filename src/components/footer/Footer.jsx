import styles from "./footer.module.css";

import Logo from "../../assets/AF Logo.png";

import {
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={`container ${styles.footerContainer}`}>

        {/* Brand */}
        <div className={styles.brand}>

          <img src={Logo} alt="AttendFlow Logo" />

          <p>
            One Move Ahead.
            <br />
            Accuracy in Every Flow.
          </p>

          <div className={styles.socials}>
            <a href="#">
              {/* <FaFacebookF /> */}
              <FaWhatsapp />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaGithub />
            </a>
          </div>

        </div>

        {/* Quick Links */}

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Features</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* Product */}

        <div>

          <h3>Product</h3>

          <ul>

            <li>Dashboard</li>

            <li>Analytics</li>

            <li>Reports</li>

            <li>QR Attendance</li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3>Contact</h3>

          <ul>

            <li>support@attendflow.com</li>

            <li>+234 913 176 7490</li>

            <li>Lagos, Nigeria</li>

          </ul>

        </div>

      </div>

      <div className={styles.copy}>
        © 2026 AttendFlow. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;