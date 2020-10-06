import React from "react";
import "./PlacedLivedComponent.css";

import LocationCityIcon from "@material-ui/icons/LocationCity";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

import PlacedLivedComponentAddButton from "./PlacedLivedComponentAddButton/PlacedLivedComponentAddButton";
import PlacedLivedComponentNotNullSection from "./PlacedLivedComponentNotNullSection/PlacedLivedComponentNotNullSection";

const PlacedLivedComponent = (props) => {
  return (
    <div className={"PlacedLivedComponent__wrapper"}>
      <div className={"PlacedLivedComponent"}>
        <div className={"PlacedLivedComponent__section"}>
          <div className={"PlacedLivedComponent__sectionTitle"}>
            <span>Places lived</span>
          </div>
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .CurrentCity === "" ? (
            <PlacedLivedComponentAddButton title={"Add current city"} />
          ) : (
            <PlacedLivedComponentNotNullSection
              editTitle={"a current city"}
              title={"Current city: " + props.user.FullInfo.PlacesLived.CurrentCity}
              Icon={LocationCityIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .HomeTown === "" ? (
            <PlacedLivedComponentAddButton title={"Add hometown"} />
          ) : (
            <PlacedLivedComponentNotNullSection
              editTitle={"a hometown"}
              title={"Hometown: " + props.user.FullInfo.PlacesLived.HomeTown}
              Icon={HomeRoundedIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.PlacesLived.Cities
              .length === 0 ? (
            <PlacedLivedComponentAddButton title={"Add city"} />
          ) : (
            props.user.FullInfo.PlacesLived.Cities.map((e, index) => {
              return (
                <PlacedLivedComponentNotNullSection
                  key={index}
                  editTitle={"a city"}
                  title={e}
                  Icon={LocationCityIcon}
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

export default PlacedLivedComponent;
