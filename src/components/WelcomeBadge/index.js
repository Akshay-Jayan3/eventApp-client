import React from "react";
import styles from "./styles.module.scss";
const WelcomeBadge = ({ Page, welcomeText }) => {
  return (
    <div
      className={styles.badgeContainer}
      style={{
        backgroundImage:
          Page === "UpcomingEvents"
            ? "linear-gradient(to right, #e91e63, #9b59b6)"
            : Page === "PastEvents"
            ? "linear-gradient(to right, #e67e22, #e74c3c, #e91e63)"
            : Page === "UpcomingBirthday"
            ? "linear-gradient(to right, #27ae60, #3498db)"
            : Page === "Dashboard"
            ? "linear-gradient(to right, #FD5900, #FD5401)"
            : null,
      }}
    >
      <div>
        <p className={styles.mainTag}>{welcomeText?.mainTag}</p>
        <p className={styles.subTag}>{welcomeText?.subTag}</p>
      </div>
    </div>
  );
};

export default WelcomeBadge;
