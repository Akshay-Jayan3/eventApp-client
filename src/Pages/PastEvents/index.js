import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import Tab from "../../components/Tab";
import TabePane from "../../components/TabPane";
import TabContent from "../../components/TabContent";
import EventCard from "../../components/EventCard";

const PastEvents = () => {
  const [activeTab, setActiveTab] = useState(1);
  // const [currentTab, setCurrentTab] = useState("All");
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const categories = [
    { CategoryName: "All", key: 1 },
    { CategoryName: "cultural", key: 2 },
    { CategoryName: "Sports", key: 3 },
  ];
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
    <div className="main_container">
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="PastEvents" />
      </div>
      <div className="tabContainer">
        <Tab activeTab={activeTab}>
          {categories.map((category) => (
            <>
              <TabePane
                tabname={category.CategoryName}
                onClick={() => handleTabChange(category.key)}
                key={category.key}
              >
                <div>helli</div>
              </TabePane>
            </>
          ))}
        </Tab>
        <TabContent>
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
        </TabContent>
      </div>
    </div>
  );
};

export default PastEvents;
