import React from "react";
import styles from './styles.module.scss'

const SpinLoader = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default SpinLoader;
