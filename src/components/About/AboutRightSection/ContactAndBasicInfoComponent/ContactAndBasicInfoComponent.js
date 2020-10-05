import React from "react";
import "./ContactAndBasicInfoComponent.css";
import ContactAndBasicInfoComponentAddButton from "./ContactAndBasicInfoComponentAddButton/ContactAndBasicInfoComponentAddButton";

const ContactAndBasicInfoComponent = (props) => {
  return (
    <div className={"ContactAndBasicInfoComponent__wrapper"}>
      <div className={"ContactAndBasicInfoComponent"}>
        <div className={"ContactAndBasicInfoComponent__section"}>
          <span>Contact Info</span>
          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .Address === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add your address"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .MobilePhone.length === 0 ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add a mobile phone"}
            />
          ) : (
            <ContactAndBasicInfoComponentAddButton
              title={"Add a mobile phone"}
            />
          )}
        </div>

        <div className={"ContactAndBasicInfoComponent__section"}>
          <span>Websites and Social Links</span>
          {props.user === null ? null : props.user.FullInfo.ContactInfo.Websites
              .length === 0 ? (
            <ContactAndBasicInfoComponentAddButton title={"Add a website"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .SocialLinks.length === 0 ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add a social link"}
            />
          ) : null}
        </div>

        <div className={"ContactAndBasicInfoComponent__section"}>
          <span>Basic Info</span>
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .CurrentCity === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add current city"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .HomeTown === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add hometown"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived.Cities
              .length === 0 ? (
            <ContactAndBasicInfoComponentAddButton title={"Add city"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .CurrentCity === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add current city"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .HomeTown === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add hometown"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived.Cities
              .length === 0 ? (
            <ContactAndBasicInfoComponentAddButton title={"Add city"} />
          ) : null}
          {props.user === null ? null : props.user.FullInfo.PlacesLived
              .CurrentCity === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add current city"} />
          ) : null}
        </div>

        <div className={"ContactAndBasicInfoComponent__sectionGender"}>
          <h1>Gender</h1>
        </div>

        <div className={"ContactAndBasicInfoComponent__sectionBirthDate"}>
          <h1>Birth Date</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactAndBasicInfoComponent;
