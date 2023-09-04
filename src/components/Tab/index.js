import React from 'react'
import styles from './styles.module.scss'
const Tab = ({children,activeTab}) => {
  console.log(activeTab)
  return (
    <div className={styles.Tab_wrapper}><div className={styles.tabs}>{children}</div> <div className={styles.tabBorder} style={{ '--active-tab': activeTab, '--tab-width': `${4}%` }}></div></div>
  )
}

export default Tab