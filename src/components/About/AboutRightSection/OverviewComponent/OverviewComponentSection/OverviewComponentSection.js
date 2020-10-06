import React, { useState } from "react";
import OverviewComponentAddButton from "../OverviewComponentAddButton/OverviewComponentAddButton";
import OverviewComponentNotNullSection from "../OverviewComponentNotNullSection/OverviewComponentNotNullSection";
import OverviewComponentSectionActiveInputs from "../OverviewComponentSectionActiveInputs/OverviewComponentSectionActiveInputs";
import "./OverviewComponentSection.css";

const OverviewComponentSection = (props) => {
  const [activeComponent, setActiveComponent] = useState(false);

  const toggleActiveComponent = (boolean) => {
    boolean ? setActiveComponent(true) : setActiveComponent(false);
  };

  switch (activeComponent) {
    case false:
      return (
        <div className={"OverviewComponent__section"}>
          {props.user === null ? null : Array.isArray(
              props.componentArguments
            ) ? (
            props.componentArguments.length === 0 ? (
              <OverviewComponentAddButton
                title={props.title}
                toggleActiveComponent={toggleActiveComponent}
              />
            ) : (
              props.componentArguments.map((e, index) => {
                return (
                  <OverviewComponentNotNullSection
                    key={index}
                    editTitle={props.editTitle}
                    title={`Company: ${e.company}, Position: ${e.position}`}
                    Icon={props.Icon}
                  />
                );
              })
            )
          ) : props.componentArguments === "" ? (
            <OverviewComponentAddButton title={props.title} />
          ) : (
            <OverviewComponentNotNullSection
              editTitle={props.editTitle}
              title={props.titley}
              Icon={props.Icon}
            />
          )}
        </div>
      );

    case true:

      return (
        <OverviewComponentSectionActiveInputs
          activeInputs={props.activeInputs}
          toggleActiveComponent={toggleActiveComponent}
          componentArguments={props.componentArguments}
          ativeInputPlaceholder1={props.ativeInputPlaceholder1}
          ativeInputPlaceholder2={props.ativeInputPlaceholder2}
          ativeInputPlaceholder3={props.ativeInputPlaceholder3}
          ativeInputPlaceholder4={props.ativeInputPlaceholder4}
        />
      );

    default:
      return null;
  }
};

export default OverviewComponentSection;
