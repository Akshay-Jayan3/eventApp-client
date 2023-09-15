import React from "react";
import styles from "./styles.module.scss";
import EventPhoto from "../../assets/images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CategoryIcon from '@mui/icons-material/Category';

const EventCard = ({ date, location, category, Title, time ,photoUrls}) => {
  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.EventPhoto}>
        <img src={photoUrls? `${process.env.REACT_APP_API_URL}/${photoUrls}`:EventPhoto} alt="event_Photo" />
      </div>
      <div className={styles.eventDetails}>
      <div className={styles.DetailsWrapper}>
          <div className={styles.item}>
            <p>Dec 12th-15th</p>
          </div>
          <div className={styles.item}>
            <p>12AM-2PM</p>
          </div>
          <div className={styles.category}>
            <p>sports</p>
          </div>
        </div>
        <div className={styles.Title}>
          <h4>{Title}</h4>
        </div>
        <div className={styles.location}>
            <span>
              <LocationOnIcon fontSize="xsmall" />
            </span>
            <p>{location}</p>
          </div>
       
        {/* <div className={styles.DetailsWrapper}>
          <div className={styles.item}>
            <span>
              <LocationOnIcon fontSize="small" />
            </span>
            <p>{location}</p>
          </div>
          <div className={styles.item}>
            <span>
              <CategoryIcon fontSize="small" />
            </span>
            <p>{category}</p>
          </div>
        </div> */}
       
      </div>
    </div>
  );
};

export default EventCard;
