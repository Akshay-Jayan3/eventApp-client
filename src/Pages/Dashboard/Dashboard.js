import React from 'react';
import WelcomeBadge from '../../components/WelcomeBadge';
// import Infocard from '../../components/Infocard';
import TabDash from "../../components/TabDash";
import EventCard from '../../components/EventCard';
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';

const Dashboard = () => {


  const Events = [
    {
      id: 1,
      Title: "Onam",
      date: "03/08/2023",
      location: "kottayam",
      time: "9AM-6PM",
      category: "festival",
    },
    {
      id: 1,
      Title: "Onam",
      date: "03/08/2023",
      location: "kottayam",
      time: "9AM-6PM",
      category: "festival",
    },

  ];
  return (
    <div className='main_container'>
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="Dashboard" />
      </div>
      <div className='card_container'>
        {/* <div><Infocard></Infocard></div> */}
      </div>
      <div className={styles.event}>
        <div className={styles.dhead}>
          <h3>Past events</h3>
          <Link to="/past_events"><p>View All</p></Link>
        </div>
        <div>
          <TabDash>
            {Events.map((event) => (
              <EventCard
                Title={event.Title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                key={event.id}
              />
            ))}
          </TabDash>
        </div>
      </div>
      <div className={styles.event}>
        <div className={styles.dhead}>
          <h3>Upcoming events</h3>
          <Link to="/upcoming_events"><p>View All</p></Link>
        </div>
        <div>
          <TabDash>
            {Events.map((event) => (
              <EventCard
                Title={event.Title}
                category={event.category}
                date={event.date}
                time={event.time}
                location={event.location}
                key={event.id}
              />
            ))}
          </TabDash>
        </div>
      </div>
    </div>
  )
}

export default Dashboard