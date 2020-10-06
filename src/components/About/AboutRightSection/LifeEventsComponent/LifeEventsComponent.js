import React from "react";
import "./LifeEventsComponent.css";

import EventBusyIcon from "@material-ui/icons/EventBusy";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

import LifeEventsComponentAddButton from "./LifeEventsComponentAddButton/LifeEventsComponentAddButton";
import LifeEventsComponentNullSection from "./LifeEventsComponentNullSection/LifeEventsComponentNullSection";

const LifeEventsComponent = (props) => {
  return (
    <div className={"LifeEventsComponent__wrapper"}>
      <div className={"LifeEventsComponent"}>
        <div className={"LifeEventsComponent__section"}>
          <div className={"LifeEventsComponent__sectionTitle"}>
            <span>Life Events</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.LifeEvents
              .length === 0 ? (
            <LifeEventsComponentAddButton title={"Add a life event"} />
          ) : (
            props.user.FullInfo.LifeEvents.map((e, index) => {
              return (
                <LifeEventsComponentNullSection
                  key={index}
                  editTitle={"a life event"}
                  title={"Life event: " + e}
                  Icon={EventAvailableIcon}
                />
              );
            })
          )}

          {props.user === null ? null : props.user.FullInfo.LifeEvents
              .length === 0 ? (
            <div className={"LifeEventsComponent__section__description"}>
              <EventBusyIcon />
              <span>No life events to show</span>
            </div>
          ) : null}
        </div>

        <hr />
      </div>
    </div>
  );
};

export default LifeEventsComponent;
