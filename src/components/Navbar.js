import React from "react";
import styles from "../styles/navbar.module.scss";
import Logo from "../assets/mainstack-logo.svg";
import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import analytics from "../assets/analytics.svg";
import revenue from "../assets/revenue.svg";
import crm from "../assets/crm.svg";
import apps from "../assets/apps.svg";
import notifications from "../assets/notifications.svg";
import chat from "../assets/chat.svg";
import ellipse4 from "../assets/ellipse4.svg";
import menu from "../assets/menu.svg";

const Navbar = () => {
  return (
    <div className={styles.navOverall}>
      <div className={styles.navContainer}>
        <div className={styles.navItems}>
          <div className={styles.navLeft}>
            <img src={Logo} alt="Logo" />
          </div>
          <ul className={styles.unordered}>
            <Link to="/revenue">
              <li>
                <img src={home} alt="Home" /> Home
              </li>
            </Link>
            <li>
              <img src={analytics} alt="Analytics" /> Analytics
            </li>
            <Link to="/revenue">
              <li>
                <img src={revenue} alt="Revenue" /> Revenue
              </li>
            </Link>
            <li>
              <img src={crm} alt="CRM" /> CRM
            </li>
            <li>
              <img src={apps} alt="Apps" /> Apps
            </li>
          </ul>
          <div className={styles.navRight}>
            <div>
              <img src={notifications} alt="Notification" />
            </div>
            <div>
              <img src={chat} alt="Chat" />
            </div>
            <div>
              <img src={notifications} alt="Notification" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
