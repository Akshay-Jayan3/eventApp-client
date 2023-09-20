import * as React from "react";
import styles from "./styles.module.scss";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import TodayOutlinedIcon from '@mui/icons-material/TodayOutlined';

export default function BasicDateCalendar() {
  return (
    <div className={styles.calenderContainer}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar style={{ width: '230px'}}/>
      </LocalizationProvider>
      <div className={styles.eventsWrapper}>
        <div className={styles.heading}><TodayOutlinedIcon/>Todays Events</div>
        <div className={styles.item}>
          <div className={styles.time}>
            <p>9 AM - 10 AM</p>
          </div>
          <div className={styles.title}>
            <p>Meeting with Client</p>
          </div>
          <div className={styles.location}>
            <p>fort kochi</p>
          </div>
        </div>
        
        <div className={styles.item}>1</div>
        <div className={styles.item}>1t</div>
        <div className={styles.item}>1</div>
      </div>
    </div>
  );
}
