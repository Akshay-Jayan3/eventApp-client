import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Profile from "../../assets/images/ProfilePic.jpg";
import Tab from "../../components/Tab";
import TabePane from "../../components/TabPane";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import noResult from "../../assets/images/no-data.png";
import SpinLoader from "../../components/SpinLoader";
import errorImage from "../../assets/images/error.png";
import Modal from "../../components/Modal";
import EventForm from '../EventForm'



const EventDetails = () => {
  const { eventId } = useParams();
  const { loading, data:eventDetails, error } = useFetch(`events/eventDetails/${eventId}`);
  const [activeTab, setActiveTab] = useState("About");
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="event-container">
      {loading ? (
        <SpinLoader />
      ) : error ? (
        <div className="error-container">
          <img src={errorImage} style={{ width: "50px" }} alt="error" />
          <p>Oops ,something went wrong.</p>
          <p>Please try again later</p>
        </div>
      ) : eventDetails ? (
        <div className="event-wrapper">
          <div className="event-header">
            <div className="event-heading">
              <div>
                <h2>{eventDetails?.title}</h2>
                <p>organized by {eventDetails?.organizedBy?.full_name}</p>
              </div>
              <div className="editEvent">
                <button onClick={openModal}>
                  <EditOutlinedIcon />
                </button>
              </div>
            </div>

            <div className="event-details">
              <div className="details">
                <CalendarMonthOutlinedIcon fontSize="small" />
                <p>date</p>
              </div>
              <div className="details">
                <ScheduleOutlinedIcon fontSize="small" />
                <p>{eventDetails?.StartTime} - {eventDetails?.EndTime}</p>
              </div>
              <div className="details">
                <LocationOnOutlinedIcon fontSize="small" />
                <p>{eventDetails?.location}</p>
              </div>
              <div className="details">
                <CategoryOutlinedIcon fontSize="small" />
                <p>{eventDetails?.category}</p>
              </div>
            </div>
          </div>
          <div className="event-participants">
            <div className="participants">
              <p>5 people invited</p>
              <div className="profiles">
                <img src={Profile} />
              </div>
            </div>
            <div className="add-participants">
              <button>Add</button>
            </div>
          </div>
          <Tab>
            <TabePane
              tabname="About"
              onClick={() => handleTabChange("About")}
              activeTab={activeTab}
            />
            <TabePane
              tabname="Photos"
              onClick={() => handleTabChange("Photos")}
              activeTab={activeTab}
            />
          </Tab>
          <div className="event-content">
            <div className="about">
              <p>
               {eventDetails?.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="noResult">
          <img src={noResult} style={{ width: "100px" }} alt="not found" />
          <p>Sorry! No results found .</p>
        </div>
      )}
       <Modal
        title={"Edit Event"}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <EventForm eventDetails={eventDetails} id={eventDetails?._id}/>
      </Modal>
    </div>
  );
};

export default EventDetails;
