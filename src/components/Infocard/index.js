import React from "react";
import styles from "./styles.module.scss";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import { Link } from "react-router-dom";
const Infocard = () => {
    return (
        <div className={styles.main}>
            <div className={styles.icard}>
                <p className={styles.ntext}>6</p>
                <p className={styles.text}>Events Today</p>
            </div>
            <div className={styles.icard}>
                <p className={styles.ntext}>34</p>
                <p className={styles.text} >Upcoming Events</p>
            </div>
            <div className={styles.icard}>
                <p className={styles.ntext}>50</p>
                <p className={styles.text}>Upcoming Birthdays</p>
            </div>
            <div className={styles.ecard}>
                <div className={styles.econtent}>
                    <EditCalendarOutlinedIcon style={{ width: "20px", height: "20px" }}></EditCalendarOutlinedIcon>
                    <Link to="/schedule" className={styles.underline}>
                        <p className={styles.etext}>Create New Event</p>
                    </Link>
                </div>
                <p className={styles.text}>Schedule your favourite events</p>
            </div>
        </div>
    )
}

export default Infocard;