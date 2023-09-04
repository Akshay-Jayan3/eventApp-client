import React from "react";
import Styles from "./styles.module.scss";
import profile from '../../assets/images/ProfilePic.jpg'

const Topbar = () => {
  return (
    <div className={Styles.topbar_container}>
      <div className={Styles.logo}>logo</div>
      <div className={Styles.Profile}>
       <div className={Styles.ProficePic}><img src={profile} alt="profile-pic"></img></div>
        <div>Akshay Jayan</div>
      </div>
    </div>
  );
};

export default Topbar;
