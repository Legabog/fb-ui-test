import React from "react";
import "./WorkAndEducationComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import WorkAndEducationComponentSection from "./WorkAndEducationComponentSection/WorkAndEducationComponentSection";

const WorkAndEducationComponent = (props) => {
  return (
    <div className={"WorkAndEducationComponent__wrapper"}>
      <div className={"WorkAndEducationComponent"}>

        <WorkAndEducationComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.WorkAndEducation.WorkPlace
          }
          addReducer={props.overviewAddAWorkplace}
          deleteReducer={props.overviewDeleteAWorkplace}
          editTitle={"Add a workplace"}
          deleteTitle={"Delete a workplace"}
          title={"Add a workplace"}
          titleBold={"Worplace"}
          Icon={WorkIcon}
          activeInputs={4}
          ativeInputPlaceholder1={"Company"}
          ativeInputPlaceholder2={"Position"}
          ativeInputPlaceholder3={"City/Town"}
          ativeInputPlaceholder4={"Description"}
          {...props}
        />

        <hr />

        <WorkAndEducationComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.WorkAndEducation.HighSchool
          }
          addReducer={props.overviewAddAHighSchool}
          deleteReducer={props.overviewDeleteAHighSchool}
          title={"Add a high school"}
          titleBold={"High School"}
          editTitle={"Add a high school"}
          deleteTitle={"Delete a high school"}
          Icon={SchoolIcon}
          activeInputs={2}
          ativeInputPlaceholder1={"High School"}
          ativeInputPlaceholder2={"Description"}
          {...props}
        />

        <hr />

        <WorkAndEducationComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.WorkAndEducation.College
          }
          addReducer={props.overviewAddACollege}
          deleteReducer={props.overviewDeleteACollege}
          title={"Add a college"}
          titleBold={"College"}
          editTitle={"Add a college"}
          deleteTitle={"Delete a college"}
          Icon={SchoolIcon}
          activeInputs={2}
          ativeInputPlaceholder1={"College"}
          ativeInputPlaceholder2={"Description"}
          {...props}
        />

        <hr />
      </div>
    </div>
  );
};

export default WorkAndEducationComponent;
