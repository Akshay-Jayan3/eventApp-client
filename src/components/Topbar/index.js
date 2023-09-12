import React,{useContext} from "react";
import Styles from "./styles.module.scss";
import { UserContext } from '../../contexts/authContext'; 
import profile from "../../assets/images/ProfilePic.jpg";
import { useNavigate } from "react-router";

const Topbar = () => {
  const { user ,updateUser} = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    updateUser(null)
    localStorage.removeItem("token");
    localStorage.removeItem('userData');
    navigate("/login");
  };

  return (
    <div className={Styles.topbar_container}>
      <div className={Styles.logo}>logo</div>
      <div className={Styles.Profile}>
        <div className={Styles.ProficePic}>
          <img src={profile} alt="profile-pic"></img>
        </div>
        <div>{user?.full_name}</div>
        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
