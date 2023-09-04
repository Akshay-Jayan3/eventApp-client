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
            : null,
      }}
    >
      <p className={styles.mainTag}>Timeless Memories: Explore Past Events !</p>
      <p className={styles.subTag}>
        The past comes alive in our Past Events Gallery.
      </p>
    </div>
  );
};

export default WelcomeBadge;
