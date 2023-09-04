import React from "react";
import styles from "./styles.module.scss";

const TabContent = ({ children }) => {
  return (
    <div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default TabContent;
