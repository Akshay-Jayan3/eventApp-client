import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import BasicDateCalendar from "../../components/calender";
import Fullcalendar from "../../components/fullcalender";
import NewEvent from "../../components/Button/NewEvent";
import Modal from "../../components/Modal";
import EventForm from '../EventForm'



const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
        title={"New Event"}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      >
        <EventForm type={'create'}/>
      </Modal>
    </div>
  );
};

export default Schedule;
