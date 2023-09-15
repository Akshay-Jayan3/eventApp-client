import React from "react";
import styles from "./styles.module.scss";
const Tab = ({ children}) => {
  return (
    <div className={styles.Tab_wrapper}>
      <div className={styles.tabs}>{children}</div>
    </div>
  );
};

export default Tab;
