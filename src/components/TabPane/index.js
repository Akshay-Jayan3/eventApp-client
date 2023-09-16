import React from "react";
import styles from "./styles.module.scss";

const TabePane = ({ tabname,onClick ,activeTab}) => {
  return (
    <button
    className={`${styles.TabButton} ${activeTab === tabname ? styles.active : ''}`}
    onClick={onClick}
  >
    {tabname}
  </button>
  );
};

export default TabePane;
