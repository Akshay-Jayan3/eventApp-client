import React from "react";
import styles from "./styles.module.scss";
import EventPhoto from "../../assets/images/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EventCard = ({
  startDate,
  EndDate,
  location,
  category,
  Title,
  StartTime,
  EndTime,
  photoUrls,
}) => {
  console.log(category)
  const convertDate = (startDate, EndDate) => {
    const startDateFormat = new Date(startDate);
    const EndDateFormat = new Date(EndDate);
    const ordinalFormat = (number) => {
      if (number > 3 && number < 21) return `${number}th`;
      switch (number % 10) {
        case 1:
          return `${number}st`;
        case 2:
          return `${number}nd`;
        case 3:
          return `${number}rd`;
        default:
          return `${number}th`;
      }
    };
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (startDateFormat.getFullYear() === EndDateFormat.getFullYear()) {
      if (
        startDateFormat.getDate() === EndDateFormat.getDate() &&
        startDateFormat.getMonth() === EndDateFormat.getMonth()
      ) {
        return `${ordinalFormat(startDateFormat.getDate())} ${
          monthNames[startDateFormat.getMonth()]
        } ${startDateFormat.getFullYear()}`;
      } else if (startDateFormat.getMonth() === EndDateFormat.getMonth()) {
        return `${ordinalFormat(startDateFormat.getDate())} - ${ordinalFormat(
          EndDateFormat.getDate()
        )} ${
          monthNames[startDateFormat.getMonth()]
        } ${startDateFormat.getFullYear()}`;
      } else {
        return `${ordinalFormat(startDateFormat.getDate())} ${
          monthNames[startDateFormat.getMonth()]
        } - ${ordinalFormat(EndDateFormat.getDate())} ${
          monthNames[EndDateFormat.getMonth()]
        } ${startDateFormat.getFullYear()}`;
      }
    }
    return `${ordinalFormat(startDateFormat.getDate())} ${
      monthNames[startDateFormat.getMonth()]
    } ${startDateFormat.getFullYear()} - ${ordinalFormat(
      EndDateFormat.getDate()
    )} ${monthNames[EndDateFormat.getMonth()]} ${EndDateFormat.getFullYear()}`;
  };

  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.EventPhoto}>
        <div style={{backgroundColor: category?.subColor, color: category?.mainColor}} className={styles.category}>
          <p>{category?.label}</p>
        </div>
        <img
          src={
            photoUrls
              ? `${process.env.REACT_APP_API_URL}/${photoUrls}`
              : EventPhoto
          }
          alt="event_Photo"
        />
      </div>
      <div className={styles.eventDetails}>
        <div className={styles.Title}>
          <h4>{Title}</h4>
        </div>
        <div className={styles.DetailsWrapper}>
          <div className={styles.item}>
            <p>{convertDate(startDate, EndDate)}</p>
          </div>
          <div className={styles.item}>
            <p>
              {StartTime} - {EndTime}
            </p>
          </div>
        </div>
        <div className={styles.location} style={{color:category?.mainColor}}>
          <span style={{color:category?.mainColor}}>
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
