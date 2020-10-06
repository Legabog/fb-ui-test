import React from "react";
import "./WorkAndEducationComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

import WorkAndEducationComponentAddButton from "./WorkAndEducationComponentAddButton/WorkAndEducationComponentAddButton";
import WorkAndEducationComponentNotNullSection from "./WorkAndEducationComponentNotNullSection/WorkAndEducationComponentNotNullSection";

const WorkAndEducationComponent = (props) => {
  return (
    <div className={"WorkAndEducationComponent__wrapper"}>
      <div className={"WorkAndEducationComponent"}>
        <div className={"WorkAndEducationComponent__section"}>
          <div className={"WorkAndEducationComponent__sectionTitle"}>
            <span>Work</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
              .WorkPlace.length === 0 ? (
            <WorkAndEducationComponentAddButton title={"Add a workplace"} />
          ) : (
            props.user.FullInfo.WorkAndEducation.WorkPlace.map((e, index) => {
              return (
                <WorkAndEducationComponentNotNullSection
                  key={index}
                  editTitle={"a workplace"}
                  title={e}
                  Icon={WorkIcon}
                />
              );
            })
          )}
        </div>

        <hr />

        <div className={"WorkAndEducationComponent__section"}>
          <div className={"WorkAndEducationComponent__sectionTitle"}>
            <span>College</span>
          </div>
          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
              .College.length === 0 ? (
            <WorkAndEducationComponentAddButton title={"Add a college"} />
          ) : (
            props.user.FullInfo.WorkAndEducation.College.map((e, index) => {
              return (
                <WorkAndEducationComponentNotNullSection
                  key={index}
                  editTitle={"a college"}
                  title={e}
                  Icon={SchoolIcon}
                />
              );
            })
          )}
        </div>

        <hr />

        <div className={"WorkAndEducationComponent__section"}>
          <div className={"WorkAndEducationComponent__sectionTitle"}>
            <span>High School</span>
          </div>
          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
              .HighSchool.length === 0 ? (
            <WorkAndEducationComponentAddButton title={"Add a high school"} />
          ) : (
            props.user.FullInfo.WorkAndEducation.HighSchool.map((e, index) => {
              return (
                <WorkAndEducationComponentNotNullSection
                  key={index}
                  editTitle={"a school"}
                  title={e}
                  Icon={SchoolIcon}
                />
              );
            })
          )}
        </div>

        <hr />
      </div>
    </div>
  );
};

export default WorkAndEducationComponent;
