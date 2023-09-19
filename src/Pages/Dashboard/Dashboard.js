import React, { useContext } from "react";
import { UserContext } from "../../contexts/authContext";
import WelcomeBadge from '../../components/WelcomeBadge';
import Infocard from '../../components/Infocard';
import TabDash from "../../components/TabDash";
import EventCard from '../../components/EventCard';
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";


const Dashboard = () => {
  const { user } = useContext(UserContext);
  const {data}=useFetch('/events/count')
  const welcomeText={mainTag:`Welcome Back , ${user?.full_name}` ,subTag:`Today you have ${data?.totalEvents} upcoming events!`}

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
        <WelcomeBadge Page="Dashboard" welcomeText={welcomeText}/>
      </div>
      <div className='card_container'>
        <div><Infocard TodayCount={data?.totalEvents} upcomingCount={data?.upcomingEventCount}></Infocard></div>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
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
        <div className={styles.right}>
           {/* <SmallCalendar></SmallCalendar> */}
        </div>
      </div>
    </div>
  )
}

export default Dashboard