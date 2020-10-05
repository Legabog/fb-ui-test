import React from "react";
import "./WorkAndEducationComponent.css";
import WorkAndEducationComponentAddButton from "./WorkAndEducationComponentAddButton/WorkAndEducationComponentAddButton";

const WorkAndEducationComponent = (props) => {
  return (
    <div className={"WorkAndEducationComponent__wrapper"}>
      <div className={"WorkAndEducationComponent"}>
        <div className={"WorkAndEducationComponent__section"}>
          <span>Work</span>
          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .WorkPlace.length === 0 ? (
          <WorkAndEducationComponentAddButton title={"Add a workplace"} />
        ) : null}
        </div>
        
        <div className={"WorkAndEducationComponent__section"}>
          <span>College</span>
          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .College.length === 0 ? (
          <WorkAndEducationComponentAddButton title={"Add a college"} />
        ) : null}
        </div>

        <div className={"WorkAndEducationComponent__section"}>
          <span>High School</span>
          {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .HighSchool.length === 0 ? (
          <WorkAndEducationComponentAddButton title={"Add a high school"} />
        ) : null}
        </div>
      </div>
    </div>
  );
};

export default WorkAndEducationComponent;
