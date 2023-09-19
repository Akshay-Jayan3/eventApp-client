import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import EditCalendarOutlinedIcon from "@mui/icons-material/EditCalendarOutlined";
import CelebrationOutlinedIcon from "@mui/icons-material/CelebrationOutlined";
const EventUpcoming = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7917 18.3334V17.0834H16.2501V8.12502H3.75008V12.7084H2.50008V4.16669C2.50008 3.83335 2.62508 3.54169 2.87508 3.29169C3.12508 3.04169 3.41675 2.91669 3.75008 2.91669H5.10425V1.66669H6.45842V2.91669H13.5417V1.66669H14.8959V2.91669H16.2501C16.5834 2.91669 16.8751 3.04169 17.1251 3.29169C17.3751 3.54169 17.5001 3.83335 17.5001 4.16669V17.0834C17.5001 17.4167 17.3751 17.7084 17.1251 17.9584C16.8751 18.2084 16.5834 18.3334 16.2501 18.3334H11.7917ZM6.66675 19.7084L5.79175 18.8334L8.14592 16.4584H1.04175V15.2084H8.14592L5.79175 12.8334L6.66675 11.9584L10.5417 15.8334L6.66675 19.7084ZM3.75008 6.87502H16.2501V4.16669H3.75008V6.87502Z"
        fill="#4A4A4A"
      />
    </svg>
  );
};


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    key: "_dashboard",
    icon: <DashboardOutlinedIcon fontSize="small"/>,
  },
  {
    title: "Past Events",
    path: "/past_events",
    key: "_past_events",
    icon: <EventAvailableOutlinedIcon fontSize="small"/>,
  },
  {
    title: "Upcoming Events",
    path: "/upcoming_events",
    key: "_upcoming_events",
      icon: <EventUpcoming fontSize="small"/>,
  },

  {
    title: "Upcoming Birthdays",
    path: "/upcoming_birthdays",
    key: "_upcoming_birthdays",
      icon: <CelebrationOutlinedIcon fontSize="small"/>,
  },
  {
    title: "Schedule",
    path: "/schedule",
    key: "_schedule",
    icon: <EditCalendarOutlinedIcon fontSize="small"/>,
  },
];
