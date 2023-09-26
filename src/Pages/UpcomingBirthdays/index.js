import React from "react";
import WelcomeBadge from "../../components/WelcomeBadge";
import TabContent from "../../components/TabContent";
import BirthdayCard from '../../components/BirthdayCard'
import useFetch from "../../hooks/useFetch";
import noResult from "../../assets/images/no-data.png";
import SpinLoader from "../../components/SpinLoader";
import errorImage from "../../assets/images/error.png";


const UpcomingBirthdays = () => {
  const { data, loading, error } = useFetch('/auth/users');
  const welcomeText = {
    mainTag: "Upcoming Birthdays: Let's Celebrate Together !",
    subTag: "Keep an eye out for these upcoming birthdays . Let's make each birthday a meaningful part of our collective celebration.",
  };
  return (
    <div className="main_container">
      {" "}
      <div className="welcomeBadge_container">
        <WelcomeBadge Page="UpcomingBirthday" welcomeText={welcomeText}/>
      </div>
      <div className="container">
        {loading ? (
          <SpinLoader />
        ) : error ? (
          <div className="error-container">
            <img src={errorImage} style={{ width: "50px" }} alt="error" />
            <p>Oops ,something went wrong.</p>
            <p>Please try again later</p>
          </div>
        ) : data?.users.length !== 0 ? (
          <TabContent>
            { data?.users.map((user) => (
            <BirthdayCard
              full_name={user.full_name}
              date_of_birth={user.date_of_birth}
              designation={user.designation}
              profile_picture={user.profile_picture}
            />
            ))}
          </TabContent>
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

export default UpcomingBirthdays;
