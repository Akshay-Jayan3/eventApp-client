import React from "react";
import styles from "./styles.module.scss";

const TabePane = ({ tabname,onClick ,activeTab}) => {
  return (
    <button
    className={styles.TabButton}
    onClick={onClick}
    style={{color:activeTab===tabname ?"#0D6EFD":"#4A4A4A",backgroundColor:activeTab===tabname ? "#E5F0FF" : "#F4F4F4"}}
  >
    {tabname}
  </button>
  );
};

export default TabePane;
