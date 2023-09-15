import React from "react";
import styles from "./styles.module.scss";
const WelcomeBadge = ({ Page }) => {
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
                  ? "linear-gradient(to right, #fd7b01, #fe5700) "
                  : null
      }}
    > {Page === "Dashboard" && (
      <div>
        <p className={styles.mainTag}>Welcome Back , Akshay</p>
        <p className={styles.subTag}>Today u have 6 Upcoming events</p>
      </div>)}

      {Page === "PastEvents" && (
        <div>
          <p className={styles.mainTag}>Timeless Memories: Explore Past Events !</p>
          <p className={styles.subTag}>
            The past comes alive in our Past Events Gallery.
          </p>
        </div>)}

    </div>
  );
};

export default WelcomeBadge;
