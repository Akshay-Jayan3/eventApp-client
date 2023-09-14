import React, { Children } from "react";
import styles from './styles.module.scss';

const TabDash = ({children})=>{
  return(
    <div>
        <div className={styles.container}>{children}</div>
    </div>
  )
}
export default TabDash