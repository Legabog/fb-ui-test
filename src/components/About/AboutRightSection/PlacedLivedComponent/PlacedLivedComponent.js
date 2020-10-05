import React from "react";
import "./PlacedLivedComponent.css";
import PlacedLivedComponentAddButton from "./PlacedLivedComponentAddButton/PlacedLivedComponentAddButton";

const PlacedLivedComponent = (props) => {
  return (
    <div className={"PlacedLivedComponent__wrapper"}>
      <div className={"PlacedLivedComponent"}>
        <div className={"PlacedLivedComponent__section"}>
          <span>Placed Lived</span>
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .CurrentCity === "" ? (
            <PlacedLivedComponentAddButton title={"Add current city"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .HomeTown === "" ? (
            <PlacedLivedComponentAddButton title={"Add hometown"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived.Cities
              .length === 0 ? (
            <PlacedLivedComponentAddButton title={"Add city"} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PlacedLivedComponent;
