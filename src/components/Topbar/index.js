import React from "react";
import Styles from "./styles.module.scss";
import profile from "../../assets/images/ProfilePic.jpg";
import { useNavigate } from "react-router";

const Topbar = () => {
 
  
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className={Styles.topbar_container}>
      <div className={Styles.logo}>logo</div>
      <div className={Styles.Profile}>
        <div className={Styles.ProficePic}>
          <img src={profile} alt="profile-pic"></img>
        </div>
        <div></div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
