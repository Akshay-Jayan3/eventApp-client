import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import Tab from "../../components/Tab";
import TabePane from "../../components/TabPane";
import TabContent from "../../components/TabContent";
import EventCard from "../../components/EventCard";
import useFetch from "../../hooks/useFetch";
import Search from "../../components/Search";
import noResult from "../../assets/images/nodata.svg";

const UpcomingEvents = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const categoryUrl = "/categories";
  const basePastEventsUrl = "/events/upcomingEvents";
  let url = basePastEventsUrl;

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
        <WelcomeBadge Page="UpcomingEvents" />
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
              tabname={category.category}
              onClick={() => handleTabChange(category.category)}
              key={category._id}
              activeTab={activeTab}
            ></TabePane>
          </>
        ))}
      </Tab>
      <div className="content">
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>error</p>
        ) : (
          upcomingEventData?.upcomingEvents.length !== 0 &&
          upcomingEventData?.upcomingEvents.map((event) => (
            <TabContent>
              <EventCard
                Title={event.title}
                category={event.category}
                date={event.startDate}
                time={event.time}
                location={event.location}
                key={event._id}
                photoUrls={event.photoUrls}
              />
            </TabContent>
          ))
        )}
        <div className="noResult">
          <img src={noResult} style={{ width: "70%" }} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
