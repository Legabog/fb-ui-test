import React from "react";
import "./OverviewComponent.css";

import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

import OverviewComponentAddButton from "./OverviewComponentAddButton/OverviewComponentAddButton";
import OverviewComponentNotNullSection from "./OverviewComponentNotNullSection/OverviewComponentNotNullSection";
import OverviewComponentSection from "./OverviewComponentSection/OverviewComponentSection";

const OverviewComponent = (props) => {
  return (
    <div className={"OverviewComponent__wrapper"}>
      <div className={"OverviewComponent"}>

        <OverviewComponentSection
          componentArguments={
            props.user === null
              ? null
              : props.user.FullInfo.WorkAndEducation.WorkPlace
          }
          title={"Add a workplace"}
          editTitle={"a workplace"}
          Icon={WorkIcon}
          activeInputs={1}
          ativeInputPlaceholder1={"Company"}
          ativeInputPlaceholder2={"Position"}
          ativeInputPlaceholder3={"City/Town"}
          ativeInputPlaceholder4={"Description"}
          {...props}
        />

        <hr />

        {/* <div className={"OverviewComponent__section"}>
      {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .WorkPlace.length === 0 ? (
          <OverviewComponentAddButton title={"Add a workplace"} />
        ) : (
          props.user.FullInfo.WorkAndEducation.WorkPlace.map((e, index) => {
            return (
              <OverviewComponentNotNullSection
                key={index}
                editTitle={"a workplace"}
                title={e}
                Icon={WorkIcon}
              />
            );
          })
        )}
      </div> */}

       

        {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .HighSchool.length === 0 ? (
          <OverviewComponentAddButton title={"Add a high school"} />
        ) : (
          props.user.FullInfo.WorkAndEducation.HighSchool.map((e, index) => {
            return (
              <OverviewComponentNotNullSection
                key={index}
                editTitle={"a school"}
                title={e}
                Icon={SchoolIcon}
              />
            );
          })
        )}

        {props.user === null ? null : props.user.FullInfo.WorkAndEducation
            .College.length === 0 ? (
          <OverviewComponentAddButton title={"Add a college"} />
        ) : (
          props.user.FullInfo.WorkAndEducation.College.map((e, index) => {
            return (
              <OverviewComponentNotNullSection
                key={index}
                editTitle={"a college"}
                title={e}
                Icon={SchoolIcon}
              />
            );
          })
        )}

        <hr />

        {props.user === null ? null : props.user.FullInfo.PlacesLived
            .CurrentCity === "" ? (
          <OverviewComponentAddButton title={"Add a current city"} />
        ) : (
          <OverviewComponentNotNullSection
            editTitle={"a current city"}
            title={
              "Current city: " + props.user.FullInfo.PlacesLived.CurrentCity
            }
            Icon={LocationCityIcon}
          />
        )}

        {props.user === null ? null : props.user.FullInfo.PlacesLived
            .HomeTown === "" ? (
          <OverviewComponentAddButton title={"Add hometown"} />
        ) : (
          <OverviewComponentNotNullSection
            editTitle={"a hometown"}
            title={"Hometown: " + props.user.FullInfo.PlacesLived.HomeTown}
            Icon={HomeRoundedIcon}
          />
        )}

        <hr />

        {props.user === null ? null : props.user.FullInfo.FamilyAndRelationships
            .Relationship === "" ? (
          <OverviewComponentAddButton title={"Add a relationship status"} />
        ) : (
          <OverviewComponentNotNullSection
            editTitle={"a relationship status"}
            title={props.user.FullInfo.FamilyAndRelationships.Relationship}
            Icon={FavoriteRoundedIcon}
          />
        )}
      </div>
    </div>
  );
};

export default OverviewComponent;
