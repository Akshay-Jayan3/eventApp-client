import React from "react";
import styles from "./styles.module.scss";
import { SidebarData } from "../../utils/SidebarData";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className={styles.sidebar_container}>
      <div className={styles.menu}>
        <div className={styles.sidemenu}>
          <ul className={styles.menu_wrapper}>
            {SidebarData.map((item) => {
              return (
                <li
                  key={item.key}
                  className={
                    item.path === location.pathname
                      ? styles.active_menu
                      : styles.menu_items
                  }
                >
                  <Link to={item.path} className={styles.menu_link}>
                    <div style={{flex:1}}>{item.icon}</div>
                    <div style={{height:'100%',marginLeft:"5px"}}>{item.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
