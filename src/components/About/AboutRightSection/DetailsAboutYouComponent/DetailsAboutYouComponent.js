import React from "react";
import "./DetailsAboutYouComponent.css";

import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import DetailsAboutYouComponentAddButton from "./DetailsAboutYouComponentAddButton/DetailsAboutYouComponentAddButton";
import DetailsAboutYouComponentNotNullSection from "./DetailsAboutYouComponentNotNullSection/DetailsAboutYouComponentNotNullSection";

const DetailsAboutYouComponent = (props) => {
  return (
    <div className={"DetailsAboutYouComponent__wrapper"}>
      <div className={"DetailsAboutYouComponent"}>
        <div className={"DetailsAboutYouComponent__section"}>
          <div className={"DetailsAboutYouComponent__sectionTitle"}>
            <span>About You</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.DetailsAboutYou
              .AboutYou === "" ? (
            <DetailsAboutYouComponentAddButton
              title={"Write some details about yourself"}
            />
          ) : (
            <DetailsAboutYouComponentNotNullSection
              editTitle={"details about yourself"}
              title={props.user.FullInfo.DetailsAboutYou.AboutYou}
              Icon={InfoOutlinedIcon}
            />
          )}
        </div>

        <hr />

        <div className={"DetailsAboutYouComponent__section"}>
          <div className={"DetailsAboutYouComponent__sectionTitle"}>
            <span>Name Pronunciation</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.DetailsAboutYou
              .NamePronunciation.length === 0 ? (
            <DetailsAboutYouComponentAddButton
              title={"Add a name pronunciation"}
            />
          ) : (
            props.user.FullInfo.DetailsAboutYou.NamePronunciation.map(
              (e, index) => {
                return (
                  <DetailsAboutYouComponentNotNullSection
                    key={index}
                    editTitle={"a name pronunciation"}
                    title={"Pronunciation: " + e}
                    Icon={PanoramaFishEyeIcon}
                  />
                );
              }
            )
          )}
        </div>

        <hr />

        <div className={"DetailsAboutYouComponent__section"}>
          <div className={"DetailsAboutYouComponent__sectionTitle"}>
            <span>Other Names</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.DetailsAboutYou
              .OtherNames.length === 0 ? (
            <DetailsAboutYouComponentAddButton
              title={"Add a nickname, a birth name..."}
            />
          ) : (
            props.user.FullInfo.DetailsAboutYou.OtherNames.map((e, index) => {
              return (
                <DetailsAboutYouComponentNotNullSection
                  key={index}
                  editTitle={"a nickname"}
                  title={"Nickname: " + e}
                  Icon={PanoramaFishEyeIcon}
                />
              );
            })
          )}
        </div>

        <hr />

        <div className={"DetailsAboutYouComponent__section"}>
          <div className={"DetailsAboutYouComponent__sectionTitle"}>
            <span>Favorite Quotes</span>
          </div>

          {props.user === null ? null : props.user.FullInfo.DetailsAboutYou
              .FavoriteQuotes === "" ? (
            <DetailsAboutYouComponentAddButton
              title={"Add your favorite quotations"}
            />
          ) : (
            <DetailsAboutYouComponentNotNullSection
              editTitle={"a quotation"}
              title={props.user.FullInfo.DetailsAboutYou.FavoriteQuotes}
              Icon={ChatBubbleOutlineIcon}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsAboutYouComponent;
