import React from "react";
import "./ContactAndBasicInfoComponent.css";

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import LinkIcon from "@material-ui/icons/Link";
import TranslateIcon from "@material-ui/icons/Translate";
import CakeIcon from "@material-ui/icons/Cake";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import FaceIcon from "@material-ui/icons/Face";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import LooksIcon from "@material-ui/icons/Looks";
import MoodIcon from "@material-ui/icons/Mood";

import ContactAndBasicInfoComponentAddButton from "./ContactAndBasicInfoComponentAddButton/ContactAndBasicInfoComponentAddButton";
import ContactAndBasicInfoComponentNotNullSection from "./ContactAndBasicInfoComponentNotNullSection/ContactAndBasicInfoComponentNotNullSection";

const ContactAndBasicInfoComponent = (props) => {
  return (
    <div className={"ContactAndBasicInfoComponent__wrapper"}>
      <div className={"ContactAndBasicInfoComponent"}>
        <div className={"ContactAndBasicInfoComponent__section"}>
          <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
            <span>Contact Info</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .Address === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add your address"} />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"a address"}
              title={"Adress: " + props.user.FullInfo.ContactInfo.Address}
              Icon={HomeRoundedIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .MobilePhone.length === 0 ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add a mobile phone"}
            />
          ) : (
            props.user.FullInfo.ContactInfo.MobilePhone.map((e, index) => {
              return (
                <ContactAndBasicInfoComponentNotNullSection
                  key={index}
                  editTitle={"a phone number"}
                  title={"Phone number: " + e.number}
                  Icon={PhoneRoundedIcon}
                />
              );
            })
          )}
        </div>

        <hr />

        <div className={"ContactAndBasicInfoComponent__section"}>
          <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
            <span>Websites and Social Links</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.ContactInfo.Websites
              .length === 0 ? (
            <ContactAndBasicInfoComponentAddButton title={"Add a website"} />
          ) : (
            props.user.FullInfo.ContactInfo.Websites.map((e, index) => {
              return (
                <ContactAndBasicInfoComponentNotNullSection
                  key={index}
                  editTitle={"a website"}
                  title={"Website: " + e}
                  Icon={LinkIcon}
                />
              );
            })
          )}
          {props.user === null ? null : props.user.FullInfo.ContactInfo
              .SocialLinks.length === 0 ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add a social link"}
            />
          ) : (
            props.user.FullInfo.ContactInfo.SocialLinks.map((e, index) => {
              return (
                <ContactAndBasicInfoComponentNotNullSection
                  key={index}
                  editTitle={"a social link"}
                  title={"Social link: " + e}
                  Icon={LinkIcon}
                />
              );
            })
          )}
        </div>

        <hr />

        <div className={"ContactAndBasicInfoComponent__section"}>
          <div className={"ContactAndBasicInfoComponent__sectionTitle"}>
            <span>Basic Info</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.BasicInfo.Gender ===
            "" ? null : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"gender"}
              title={"Gender: " + props.user.FullInfo.BasicInfo.Gender}
              Icon={FaceIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.BasicInfo
              .Language === "" ? (
            <ContactAndBasicInfoComponentAddButton title={"Add a language"} />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"a language"}
              title={"Language: " + props.user.FullInfo.BasicInfo.Language}
              Icon={TranslateIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.BasicInfo
              .ReligionViews === "" ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add your religion views"}
            />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"a religion view"}
              title={
                "Religion view: " + props.user.FullInfo.BasicInfo.ReligionViews
              }
              Icon={LooksIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.BasicInfo
              .PoliticalViews === "" ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add your political views"}
            />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"a political view"}
              title={
                "Political view: " +
                props.user.FullInfo.BasicInfo.PoliticalViews
              }
              Icon={AccountBalanceIcon}
            />
          )}

          {props.user === null ? null : props.user.FullInfo.BasicInfo
              .InterestedMale === "" ? (
            <ContactAndBasicInfoComponentAddButton
              title={"Add who you're interested in"}
            />
          ) : (
            <ContactAndBasicInfoComponentNotNullSection
              editTitle={"interested male"}
              title={
                "Interested in: " + props.user.FullInfo.BasicInfo.InterestedMale
              }
              Icon={MoodIcon}
            />
          )}
        </div>

        {props.user === null ? null : props.user.FullInfo.BasicInfo
            .Birthday_data === "" ? null : (
          <ContactAndBasicInfoComponentNotNullSection
            editTitle={"birth date"}
            title={
              "Birth Date: " +
              props.user.FullInfo.BasicInfo.Birthday_data.slice(0, 5)
            }
            Icon={CakeIcon}
          />
        )}

        {props.user === null ? null : props.user.FullInfo.BasicInfo.Gender ===
          "" ? null : (
          <ContactAndBasicInfoComponentNotNullSection
            editTitle={"birth year"}
            title={
              "Birth Year: " +
              props.user.FullInfo.BasicInfo.Birthday_data.slice(6)
            }
            Icon={CalendarTodayIcon}
          />
        )}
      </div>
    </div>
  );
};

export default ContactAndBasicInfoComponent;
