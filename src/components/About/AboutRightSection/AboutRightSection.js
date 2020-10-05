import React from "react";
import { useLocation } from "react-router-dom";
import "./AboutRightSection.css";
import ContactAndBasicInfoComponent from "./ContactAndBasicInfoComponent/ContactAndBasicInfoComponent";
import OverviewComponent from "./OverviewComponent/OverviewComponent";
import PlacedLivedComponent from "./PlacedLivedComponent/PlacedLivedComponent";
import WorkAndEducationComponent from "./WorkAndEducationComponent/WorkAndEducationComponent";

const AboutRightSection = (props) => {
  let location = useLocation();

  return (
    <div className={"AboutRightSection"}>
      {location.pathname === "/profile/about_overview" ||
      location.pathname === "/profile/about" ? (
        <OverviewComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_work_and_education" ? (
        <WorkAndEducationComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_places" ? (
        <PlacedLivedComponent {...props} />
      ) : null}

      {location.pathname === "/profile/about_contact_and_basic_info" ? (
        <ContactAndBasicInfoComponent {...props} />
      ) : null}
    </div>
  );
};

export default AboutRightSection;
