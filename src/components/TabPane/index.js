import React from "react";
import styles from "./styles.module.scss";

const TabePane = ({ tabname,onClick }) => {
  return (
    <button
    className={styles.TabButton}
    onClick={onClick}
  >
    {tabname}
  </button>
    // <div
    //   className={styles.tabContainer}
    //   style={{
    //     borderBottom: currentTab === tabname ? "2px solid #0D6EFD" :"2px solid #fff",
    //   }}
    //   onClick={() => setCurrentTab(tabname)}
    // >
    //   {tabname}
    // </div>
  );
};

export default TabePane;
