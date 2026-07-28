import styles from "./navbar.module.css";
import { navBarData } from "../../data.js";
import { NavLink } from "react-router";
import { useState } from "react";
import Logo from "../../assets/logo.png";

import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navContainer}>
        {/* Logo */}

        <div className={styles.logo}>
          <img src={Logo} alt="AttendFlow Logo" className={styles.logoImage} />
        </div>

        {/* navlink start */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ""}`}>
          {navBarData.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.pathUrl}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : styles.navLink
                }
                onClick={handleLinkClick}
              >
                {item.pathName}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* button start */}
        <div className={styles.navButton}>
          <NavLink
            to="/login"
            className={styles.loginBtn}
            onClick={handleLinkClick}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className={styles.registerBtn}
            onClick={handleLinkClick}
          >
            Register
          </NavLink>
        </div>

        {/* mobile button start */}
        <button
          className={styles.menu}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaXmark /> : <FiMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
