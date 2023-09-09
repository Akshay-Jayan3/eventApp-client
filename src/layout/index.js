import React  from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Styles from './styles.module.scss'

const Layout = ({ children }) => {

  return (
    <div className={Styles.main_container}>
      <div className={Styles.sidebar_container}>
        <Sidebar />
      </div>

      <div className={Styles.content_container}>
        <Topbar />
        <div className={Styles.page}> {children}</div>
       
      </div>
    </div>
  );
};

export default Layout;
