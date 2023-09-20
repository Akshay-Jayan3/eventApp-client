import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import BasicDateCalendar from "../../components/calender";
import Fullcalendar from "../../components/fullcalender";
import NewEvent from "../../components/Button/NewEvent";
import Modal from "../../components/Modal";
import Datepicker from "../../components/Datepicker";
import Timepicker from "../../components/Timepicker";

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [credentials, setCredentials] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    startDate: "",
    EndDate: "",
    StartTime: "",
    EndTime: "",
    attendees: "",
    organizedBy: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="main_container">
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="UpcomingBirthday" />
      </div>
      <div className="calender">
        <div className="calender_wrapper">
          <div className="button">
            <NewEvent onclick={openModal} />
          </div>
          <BasicDateCalendar />
        </div>
        <div className="fullcalender">
          <Fullcalendar />
        </div>
      </div>
      <Modal
            title={"modal"}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          >
              <form onSubmit={handleSubmit} className="addEventForm">
                <div className="addEventContainer">
                <div className="detailWrapper">
                <div className="heading">
                 <p>Event Details</p>
                </div>
                <div className="input-container">
                  <input
                    id="title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={credentials.title}
                    onChange={handleInputChange}
                  />
                </div>
                {/* <br /> */}
                <div className="input-container">
                  <input
                    type="text"
                    name="location"
                    placeholder="location"
                    value={credentials.location}
                    onChange={handleInputChange}
                  />
                </div>
                <div  className="date-container"><Datepicker/><Timepicker/></div>
                
                <textarea></textarea>
                </div>
                <div className="peopleWrapper">
                <div className="heading">
                 <p>People</p>
                </div>
                </div>
                </div>
              
               
              </form>
          </Modal>
    </div>
  );
};

export default Schedule;
