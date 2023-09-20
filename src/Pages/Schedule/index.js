import React, { useState } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import BasicDateCalendar from "../../components/calender";
import Fullcalendar from "../../components/fullcalender";
import NewEvent from "../../components/Button/NewEvent";
import Modal from "../../components/Modal";

const Schedule = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
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
          <Modal
            title={"modal"}
            isOpen={isOpen}
            openModal={openModal}
            closeModal={closeModal}
          >
            <div className="addEvent-container">
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    // className={styles.inputContainer}
                    type="text"
                    name="username"
                    placeholder="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <div>
                  <input
                    // className={styles.inputContainer}
                    type="password"
                    name="password"
                    placeholder="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                  />
                </div>
                <br />
                <button type="submit">Login</button>
              </form>
            </div>
          </Modal>
        </div>

        <div className="fullcalender">
          <Fullcalendar />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
