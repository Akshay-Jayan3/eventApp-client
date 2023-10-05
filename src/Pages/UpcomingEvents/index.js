import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import Tab from "../../components/Tab";
import TabePane from "../../components/TabPane";
import TabContent from "../../components/TabContent";
import EventCard from "../../components/EventCard";
import useFetch from "../../hooks/useFetch";
import Search from "../../components/Search";
import noResult from "../../assets/images/no-data.png";
import SpinLoader from "../../components/SpinLoader";
import errorImage from "../../assets/images/error.png";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const welcomeText = {
    mainTag: "Stay Ahead with Our Upcoming Events !",
    subTag: " Explore the calendar, save the dates, and gear up for an unforgettable tech journey",
  };
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const categoryUrl = "/categories";
  const baseUpcomingEventsUrl = "/events/upcomingEvents";
  let url = baseUpcomingEventsUrl;

  if (searchValue !== "") {
    url += `?search=${searchValue}`;
  }

  if (activeTab !== "All") {
    if (url.includes("?")) {
      url += `&category=${activeTab}`;
    } else {
      url += `?category=${activeTab}`;
    }
  }
  const { data: categoryData } = useFetch(categoryUrl);
  const { data: upcomingEventData, loading, error } = useFetch(url);

  return (
    <div className="main_container">
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="UpcomingEvents" welcomeText={welcomeText} />
      </div>
      <Search searchValue={searchValue} handleSearch={handleSearch} />
      <Tab>
        <TabePane
          tabname="All"
          onClick={() => handleTabChange("All")}
          activeTab={activeTab}
        />
        {categoryData?.categories.map((category) => (
          <>
            <TabePane
               tabname={category?.label}
              onClick={() => handleTabChange(category.category)}
              key={category._id}
              activeTab={activeTab}
            ></TabePane>
          </>
        ))}
      </Tab>
      <div className="container">
        {loading ? (
          <SpinLoader />
        ) : error ? (
          <div className="error-container">
            <img src={errorImage} style={{ width: "50px" }} alt="error" />
            <p>Oops ,something went wrong.</p>
            <p>Please try again later</p>
          </div>
        ) : upcomingEventData?.upcomingEvents.length !== 0 ? (
          <TabContent>
            { upcomingEventData?.upcomingEvents.map((event) => (
             <Link to={`/events/${event._id}`} key={event._id} style={{width:"272px" ,textDecoration:"none"}}>
             <EventCard
               Title={event.title}
               location={event.location}
               category={event.category}
               startDate={event.startDate}
               EndDate={event.EndDate}
               StartTime={event.StartTime}
               EndTime={event.EndTime}
               event_photos={event.event_photos[0]?.filepath}
               
             />
           </Link>
            ))}
          </TabContent>
        ) : (
          <div className="noResult">
            <img src={noResult} style={{ width: "100px" }} alt="not found" />
            <p>Sorry! No results found .</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
