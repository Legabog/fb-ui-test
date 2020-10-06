import React, { useState } from "react";
import "./OverviewComponentSectionActiveInputs.css";

const OverviewComponentSectionActiveInputs = (props) => {
  const [input_1, setInput_1] = useState(props.componentArguments[0] || "");
  const [input_2, setInput_2] = useState(props.componentArguments[1]);
  const [input_3, setInput_3] = useState(props.componentArguments[2]);
  const [input_4, setInput_4] = useState(props.componentArguments[3]);

  // changeHandlers

  const toggleInput_1 = (e) => {
    setInput_1(e.target.value);
  };

  const toggleInput_2 = (e) => {
    setInput_2(e.target.value);
  };

  const toggleInput_3 = (e) => {
    setInput_3(e.target.value);
  };

  const toggleInput_4 = (e) => {
    setInput_4(e.target.value);
  };

  switch (props.activeInputs) {
    case 1:
      return (
        <>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={"OverviewComponentSectionActiveInputs__controllButtons"}
          >
            <div
              className={"OverviewComponentSectionActiveInputs__cancelButton"}
              onClick={() => {
                props.toggleActiveComponent(false)
              }}
            >
              <span>Cancel</span>
            </div>

            {input_1.trim() === "" ? (
              <div
                className={
                  "OverviewComponentSectionActiveInputs__saveButton-disabled"
                }
              >
                <span>Save</span>
              </div>
            ) : (
              <div
                className={"OverviewComponentSectionActiveInputs__saveButton"}
              >
                <span>Save</span>
              </div>
            )}
          </div>
        </>
      );

    case 2:
      return (
        <>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>
        </>
      );

    case 3:
      return (
        <>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>

          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_3}
              onChange={toggleInput_3}
              placeholder={props.ativeInputPlaceholder3}
            />
          </div>
        </>
      );

    case 4:
      return (
        <>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_1}
              onChange={toggleInput_1}
              placeholder={props.ativeInputPlaceholder1}
            />
          </div>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_2}
              onChange={toggleInput_2}
              placeholder={props.ativeInputPlaceholder2}
            />
          </div>

          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_3}
              onChange={toggleInput_3}
              placeholder={props.ativeInputPlaceholder3}
            />
          </div>
          <div
            className={"OverviewComponentSectionActiveInputs__input__wrapper"}
          >
            <input
              className={"OverviewComponentSectionActiveInputs__input"}
              value={input_4}
              onChange={toggleInput_4}
              placeholder={props.ativeInputPlaceholder4}
            />
          </div>
        </>
      );
    default:
      return null;
  }
};

export default OverviewComponentSectionActiveInputs;
