import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";


const EventForm = ({ id, eventDetails }) => {
  const [eventId, setEventId] = useState(id);
  const [details, setDetails] = useState(eventDetails);

  const fileInputRef = useRef(null);
  const initialValues = {
    title: details ? details.title : "",
    location: details ? details.location : "",
    category: details ? details.category : "",
    startDate: details ? details.startDate : "",
    endDate: details ? details.endDate : "",
    startTime: details ? details.startTime : "",
    endTime: details ? details.endTime : "",
    description: details ? details.description : "",
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
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="EventForm">
        <div className="detailWrapper">
          <div className="heading">
            <p>Event Details</p>
          </div>
          <div className="input-container">
            <div className="input-content">
              <label htmlFor="title">
                <EventNoteOutlinedIcon fontSize="small" />
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Title"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />
            </div>
            {formik.touched.title && formik.errors.title ? (
              <div className="error-message">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="input-container">
            <div className="input-content">
              <label htmlFor="location">
                <AddLocationAltOutlinedIcon fontSize="small" />
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
            </div>

            {formik.touched.location && formik.errors.location ? (
              <div className="error-message">{formik.errors.location}</div>
            ) : null}
          </div>
          <div className="flex-wrapper">
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="category">
                  <CategoryOutlinedIcon fontSize="small" />
                </label>
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
              </div>

              {formik.touched.category && formik.errors.category ? (
                <div className="error-message">{formik.errors.category}</div>
              ) : null}
            </div>
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="event_photos">
                  <AddPhotoAlternateOutlinedIcon fontSize="small" />
                </label>
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
                  <FileUploadOutlinedIcon fontSize="small" />
                </button>
              </div>

              {formik.values.event_photos.length > 0 && (
                <div className="selected">
                  {formik.values.event_photos.map((file) => (
                    <span key={file.name}>{truncateText(file.name, 25)}</span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-wrapper">
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="startDate">
                  <ScheduleOutlinedIcon fontSize="small" />
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.startDate}
                />
              </div>

              {formik.touched.startDate && formik.errors.startDate ? (
                <div className="error-message">{formik.errors.startDate}</div>
              ) : null}
            </div>
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="startTime"></label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.startTime}
                />
              </div>

              {formik.touched.startTime && formik.errors.startTime ? (
                <div className="error-message">{formik.errors.startTime}</div>
              ) : null}
            </div>
          </div>
          <div className="flex-wrapper">
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="endDate"></label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.endDate}
                />
              </div>

              {formik.touched.endDate && formik.errors.endDate ? (
                <div className="error-message">{formik.errors.endDate}</div>
              ) : null}
            </div>
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="endTime"></label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.endTime}
                />
              </div>

              {formik.touched.endTime && formik.errors.endTime ? (
                <div className="error-message">{formik.errors.endTime}</div>
              ) : null}
            </div>
          </div>

          <div className="input-container">
            <div className="input-content">
              <label htmlFor="description">
                <DescriptionOutlinedIcon fontSize="small" />
              </label>
              <textarea
                rows={4}
                id="description"
                placeholder="Description"
                name="description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.description}
              />
            </div>

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
            <div className="input-content">
              <label htmlFor="add_attendees">
                <GroupAddOutlinedIcon fontSize="small" />
              </label>
              <input
                type="text"
                id="add_attendees"
                name="add_attendees"
                placeholder="Invite someone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
              />
            </div>

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
      <div className='form-buttons'>
        <button className='cancel-button'>
          Cancel
        </button>
        <button type="submit" className="submit-button" >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
