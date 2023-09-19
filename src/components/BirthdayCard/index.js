import React from "react";
import styles from "./styles.module.scss";
import ProfilePhoto from "../../assets/images/milan.png";
// import ProfilePhot from "../../assets/images/birthday-frame.png";


const BirthdayCard = ({ full_name,date_of_birth, designation,profile_picture }) => {
    console.log(full_name)
  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.Profilephoto}>
        <img
          src={
            profile_picture
              ? `${process.env.REACT_APP_API_URL}/${profile_picture}`
              : ProfilePhoto
          }
          alt="ProfilePhoto"
        />
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.Title}>
          <h3>{full_name}</h3>
        </div>
        <div className={styles.designation}>
          <p>{designation}</p>
        </div>
        <div className={styles.date}>
          <p>{date_of_birth}</p>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;
