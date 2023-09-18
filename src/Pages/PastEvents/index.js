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

const PastEvents = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const categoryUrl = "/categories";
  const basePastEventsUrl = "/events/pastEvents";
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
  const { data: pastEventData, loading, error } = useFetch(url);

  return (
    <div className="main_container">
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="PastEvents" />
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
      <div className="container">
        {loading ? (
          <SpinLoader />
        ) : error ? (
          <div className="error-container">
            <img src={errorImage} style={{ width: "50px" }} alt="error" />
            <p>Oops ,something went wrong.</p>
            <p>Please try again later</p>
          </div>
        ) : pastEventData?.pastEvents.length !== 0 ? (
          <div className="data-container">
            {pastEventData?.pastEvents.map((event) => (
              <EventCard
                Title={event.title}
                category={event.category}
                date={event.startDate}
                time={event.time}
                location={event.location}
                key={event._id}
                photoUrls={event.photoUrls}
              />
            ))}
          </div>

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

export default PastEvents;