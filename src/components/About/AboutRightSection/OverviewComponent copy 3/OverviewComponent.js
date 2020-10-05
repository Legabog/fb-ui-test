import React from "react";

import "./OverviewComponent.css";
import OverviewComponentAddButton from "./OverviewComponentAddButton/OverviewComponentAddButton";

const OverviewComponent = (props) => {
  return (
    <div className={"OverviewComponent__wrapper"}>
      <div className={"OverviewComponent"}>
        {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .WorkPlace.length === 0 ? (
          <OverviewComponentAddButton title={"Add a workplace"} />
        ) : null}

        {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .HighSchool.length === 0 ? (
          <OverviewComponentAddButton title={"Add a high school"} />
        ) : null}

        {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .College.length === 0 ? (
          <OverviewComponentAddButton title={"Add a college"} />
        ) : null}

        {props.user === null ? null : props.user.FullInfo.PlacesLived
            .CurrentCity === "" ? (
          <OverviewComponentAddButton title={"Add a current city"} />
        ) : null}

        {props.user === null ? null : props.user.FullInfo.PlacesLived
            .HomeTown === "" ? (
          <OverviewComponentAddButton title={"Add hometown"} />
        ) : null}

        {props.user === null ? null : props.user.FullInfo.FamilyAndRelationships
            .Relationship === "" ? (
          <OverviewComponentAddButton title={"Add a relationship status"} />
        ) : null}
      </div>
    </div>
  );
};

export default OverviewComponent;
