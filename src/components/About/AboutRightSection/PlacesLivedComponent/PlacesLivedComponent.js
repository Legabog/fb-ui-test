import React from "react";
import "./PlacesLivedComponent.css";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import PlacesLivedComponentSection from "./PlacesLivedComponentSection/PlacesLivedComponentSection";

const PlacesLivedComponent = (props) => {
  return (
    <div className={"PlacesLivedComponent__wrapper"}>
      <div className={"PlacesLivedComponent"}>
        <PlacesLivedComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.PlacesLived.CurrentCity
          }
          addReducer={props.overviewAddACurrentCity}
          deleteReducer={props.overviewDeleteACurrentCity}
          title={"Add current city"}
          titleBold={"Current city"}
          editTitle={"Edit current city"}
          deleteTitle={"Delete current city"}
          Icon={LocationCityIcon}
          activeInputs={1}
          ativeInputPlaceholder1={"Current City"}
          {...props}
        />

        <hr />

        <PlacesLivedComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.PlacesLived.HomeTown
          }
          addReducer={props.overviewAddAHometown}
          deleteReducer={props.overviewDeleteAHometown}
          title={"Add hometown"}
          titleBold={"Hometown"}
          editTitle={"Edit hometown"}
          deleteTitle={"Delete hometown"}
          Icon={HomeRoundedIcon}
          activeInputs={1}
          ativeInputPlaceholder1={"Hometown"}
          {...props}
        />

        <hr />

        <PlacesLivedComponentSection
          componentArguments={
            props.fullUserInfoAbout === null
              ? null
              : props.fullUserInfoAbout.PlacesLived.Cities
          }
          addReducer={props.placeslivedAddACity}
          deleteReducer={props.placeslivedDeleteACity}
          title={"Add city"}
          titleBold={"Cities"}
          editTitle={"Add city"}
          deleteTitle={"Delete city"}
          Icon={LocationCityIcon}
          activeInputs={2}
          ativeInputPlaceholder1={"City"}
          ativeInputPlaceholder2={"Description"}
          {...props}
        />

        <hr />

      </div>
    </div>
  );
};

export default PlacesLivedComponent;
