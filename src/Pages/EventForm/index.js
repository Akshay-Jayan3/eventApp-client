import React, { useRef, useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useFetch from "../../hooks/useFetch";
import { client } from "../../services/api";
import { UserContext } from "../../contexts/authContext";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";

const EventForm = ({ id, eventDetails }) => {
  // console.log(id)
  // console.log(eventDetails)
  const { user } = useContext(UserContext);
  const [eventId, setEventId] = useState(id);
  const [details, setDetails] = useState(eventDetails);
  const [attendees, setAttendees] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedAttendee, setSelectedAttendee] = useState([]);
  const categoryUrl = "/categories";
  const UsersUrl = searchValue !== "" && `/auth/users?search=${searchValue}`;
  const { data: categoryData } = useFetch(categoryUrl);
  const { data: userData } = useFetch(UsersUrl);
  const url = eventId ? `/events/update/${eventId}` : "events/create";
  console.log(details);
  useEffect(() => {
    if (eventDetails) {
      setSelectedAttendee(eventDetails.attendees);
    } else {
      setAttendees(userData);
    }
  }, [userData, eventDetails]);
  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    if (newValue === "") {
      setAttendees(null);
    }
  };
  const handleRemoveAttendee = (userId) => {
    console.log(userId);
    const updatedAttendees = selectedAttendee.filter(
      (user) => user._id !== userId
    );
    setSelectedAttendee(updatedAttendees);
  };

  const fileInputRef = useRef(null);
  const initialValues = {
    title: details ? details.title : "",
    location: details ? details.location : "",
    category: details ? details.category._id : "",
    startDate: details ? details.startDate : "",
    EndDate: details ? details.EndDate : "",
    StartTime: details ? details.startTime : "",
    EndTime: details ? details.endTime : "",
    description: details ? details.description : "",
    event_photos: details ? details.event_photos : [],
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Category is required"),
    startDate: Yup.date().required("Start Date is required"),
    EndDate: Yup.date().required("End Date is required"),
  });

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };
  const onSubmit = async (values) => {
    console.log(values)
    values.attendees = selectedAttendee.map((attendee) => attendee._id);
    values.organizedBy = user?.id;
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("location", values.location);
    formData.append("category", values.category);
    formData.append("startDate", values.startDate);
    formData.append("EndDate", values.EndDate);
    formData.append("StartTime", values.StartTime);
    formData.append("EndTime", values.EndTime);
    formData.append("description", values.description);
    formData.append("attendees", values.attendees);
    formData.append("organizedBy", values.organizedBy);
    formData.append("event_photos", values.event_photos[0])
    // details && details.event_photos.length > 0
    //   ? formData.append("event_photos", details.event_photos)
    //   : formData.append("event_photos", values.event_photos[0]);
    try {
      const response = id
        ? await client.put(url, formData)
        : await client.post(url, formData);
      if (response.status === 200) {
        alert("Event Added successfully");
        setDetails(undefined);
        //  setEventId(undefined)
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "An error occurred during adding new event:",
        error.message
      );
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  function truncateText(text, maxLength) {
    if (text?.length > maxLength) {
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
                  {categoryData?.categories.map((option) => (
                    <option key={option._id} value={option._id}>
                      {option?.label}
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

              {formik.values.event_photos?.length > 0 && (
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
                <label htmlFor="StartTime"></label>
                <input
                  type="time"
                  id="StartTime"
                  name="StartTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.StartTime}
                />
              </div>

              {formik.touched.StartTime && formik.errors.StartTime ? (
                <div className="error-message">{formik.errors.StartTime}</div>
              ) : null}
            </div>
          </div>
          <div className="flex-wrapper">
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="EndDate"></label>
                <input
                  type="date"
                  id="EndDate"
                  name="EndDate"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.EndDate}
                />
              </div>

              {formik.touched.EndDate && formik.errors.EndDate ? (
                <div className="error-message">{formik.errors.EndDate}</div>
              ) : null}
            </div>
            <div className="input-container">
              <div className="input-content">
                <label htmlFor="EndTime"></label>
                <input
                  type="time"
                  id="EndTime"
                  name="EndTime"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.EndTime}
                />
              </div>

              {formik.touched.EndTime && formik.errors.EndTime ? (
                <div className="error-message">{formik.errors.EndTime}</div>
              ) : null}
            </div>
          </div>

          <div className="input-container">
            <div className="input-content">
              <label htmlFor="description">
                <DescriptionOutlinedIcon fontSize="small" />
              </label>
              <textarea
                rows={5}
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
                onChange={handleSearch}
                value={searchValue}
              />
            </div>

            {formik.touched.location && formik.errors.location ? (
              <div className="error-message">{formik.errors.location}</div>
            ) : null}
          </div>
          <div className="organizer">
            <div>
              <p className="name">{user?.full_name}</p>
              <p className="email">{user?.email}</p>
            </div>
            <div className="tag">
              <div className="organizer">Organizer</div>
            </div>
          </div>
          {selectedAttendee?.length !== 0 &&
            selectedAttendee?.map((user) => (
              <div className="attendees-wrapper">
                <div className="attendees">
                  <div>
                    <p className="name">{user.full_name}</p>
                    <p className="email">{user.email}</p>
                  </div>
                  <div className="tag">
                    <button onClick={() => handleRemoveAttendee(user._id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          {attendees?.length !== 0
            ? attendees?.users?.map((user) => (
                <div className="attendees-wrapper">
                  <div className="attendees">
                    <div>
                      <p className="name">{user.full_name}</p>
                      <p className="email">{user.email}</p>
                    </div>
                    <div className="tag">
                      <button
                        onClick={() => {
                          setSelectedAttendee((prev) => [...prev, user]);
                          setAttendees([]);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      <div className="form-buttons">
        <button className="cancel-button">Cancel</button>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
