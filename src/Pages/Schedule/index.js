import React, { useState, useRef } from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import BasicDateCalendar from "../../components/calender";
import Fullcalendar from "../../components/fullcalender";
import NewEvent from "../../components/Button/NewEvent";
import Modal from "../../components/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const EventForm = () => {
  const fileInputRef = useRef(null);
  const initialValues = {
    title: "",
    location: "",
    category: "",
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    description: "",
    event_photos: [],
    add_attendees: [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    startDate: Yup.date().required("Start Date is required"),
    endDate: Yup.date().required("End Date is required"),
    startTime: Yup.string().required("Start Time is required"),
    description: Yup.string(),
    add_attendees: Yup.string(),
  });

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };
  const onSubmit = async (values) => {
    try {
      // You can send the form data to your server using axios or another library
      await axios.post("/api/events", values);
      // Handle success or redirect to a success page
    } catch (error) {
      // Handle error
    }
  };
  const categoryOptions = [
    "Category 1",
    "Category 2",
    "Category 3",
    // Add more category options as needed
  ];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="EventForm">
        <div className="detailWrapper">
          <div className="heading">
            <p>Event Details</p>
          </div>
          <div className="input-container">
            <label htmlFor="title"></label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error-message">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="input-container">
            <label htmlFor="location"></label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="location"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="error-message">{formik.errors.location}</div>
            ) : null}
          </div>
          <div className="flex-wrapper">
            <div className="input-container">
              <label htmlFor="category"></label>
              <select
                id="category"
                name="category"
                placeholder="category"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
              >
                <option value="" label="Select a category" />
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formik.touched.category && formik.errors.category ? (
                <div className="error-message">{formik.errors.category}</div>
              ) : null}
            </div>
            <div className="input-container">
              <label htmlFor="event_photos"></label>
              <input
                type="file"
                id="event_photos"
                name="event_photos"
                multiple
                ref={fileInputRef} // Associate the ref with the file input
                style={{ display: "none" }} // Hide the file input
                onChange={(event) =>
                  formik.setFieldValue(
                    "event_photos",
                    Array.from(event.target.files)
                  )
                }
              />
              <button type="button" onClick={handleFileButtonClick}>
                Upload Photos
              </button>
              {formik.values.event_photos.length > 0 && (
                <div>
                  Selected Photos:{" "}
                  {formik.values.event_photos.map((file) => (
                    <span key={file.name}>{file.name}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-wrapper">
            <div className="input-container">
              <label htmlFor="startDate"></label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
              />
              {formik.touched.startDate && formik.errors.startDate ? (
                <div className="error-message">{formik.errors.startDate}</div>
              ) : null}
            </div>
            <div className="input-container">
              <label htmlFor="startTime"></label>
              <input
                type="time"
                id="startTime"
                name="startTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startTime}
              />
              {formik.touched.startTime && formik.errors.startTime ? (
                <div className="error-message">{formik.errors.startTime}</div>
              ) : null}
            </div>
          </div>
          <div className="flex-wrapper">
            <div className="input-container">
              <label htmlFor="endDate"></label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
              />
              {formik.touched.endDate && formik.errors.endDate ? (
                <div className="error-message">{formik.errors.endDate}</div>
              ) : null}
            </div>
            <div className="input-container">
              <label htmlFor="endTime"></label>
              <input
                type="time"
                id="endTime"
                name="endTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endTime}
              />
              {formik.touched.endTime && formik.errors.endTime ? (
                <div className="error-message">{formik.errors.endTime}</div>
              ) : null}
            </div>
          </div>

          <div className="input-container">
            <label htmlFor="description"></label>
            <textarea
              rows={4}
              id="description"
              placeholder="Description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="error-message">{formik.errors.description}</div>
            ) : null}
          </div>
        </div>
        <div className="peopleWrapper">
          <div className="heading">
            <p>People</p>
          </div>
          <div className="input-container">
            <label htmlFor="add_attendees"></label>
            <input
              type="text"
              id="add_attendees"
              name="add_attendees"
              placeholder="Invite someone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
            />
            {formik.touched.location && formik.errors.location ? (
              <div className="error-message">{formik.errors.location}</div>
            ) : null}
          </div>
          <div className="organizer">
            <div>
              <p className="name">Akshay Jayan</p>
              <p className="email">akshay@thinkpalm</p>
            </div>
            <div className="tag">
              <div className="organizer">Organizer</div>
            </div>
          </div>
          <div className="attendees-wrapper">
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
            <div className="attendees">
              <div>
                <p className="name">Akshay Jayan</p>
                <p className="email">akshay@thinkpalm</p>
              </div>
              <div className="tag">
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

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
        <EventForm />
      </Modal>
    </div>
  );
};

export default Schedule;
