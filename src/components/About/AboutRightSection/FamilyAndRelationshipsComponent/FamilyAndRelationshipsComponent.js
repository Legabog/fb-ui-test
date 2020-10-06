import React from "react";
import "./FamilyAndRelationshipsComponent.css";

import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

import FamilyAndRelationshipsComponentAddButton from "./FamilyAndRelationshipsComponentAddButton/FamilyAndRelationshipsComponentAddButton";
import FamilyAndRelationshipsComponentNotNullSection from "./FamilyAndRelationshipsComponentNotNullSection/FamilyAndRelationshipsComponentNotNullSection";

const FamilyAndRelationshipsComponent = (props) => {
  return (
    <div className={"FamilyAndRelationshipsComponent__wrapper"}>
      <div className={"FamilyAndRelationshipsComponent"}>
        <div className={"FamilyAndRelationshipsComponent__section"}>
          <div className={"FamilyAndRelationshipsComponent__sectionTitle"}>
            <span>Relationship</span>
          </div>

          {props.user === null ? null : props.user.FullInfo
              .FamilyAndRelationships.Relationship === "" ? (
            <FamilyAndRelationshipsComponentAddButton
              title={"Add a relationship status"}
            />
          ) : (
            <FamilyAndRelationshipsComponentNotNullSection
              editTitle={"a relationship status"}
              title={props.user.FullInfo.FamilyAndRelationships.Relationship}
              Icon={FavoriteIcon}
            />
          )}
        </div>

        <hr />

        <div className={"FamilyAndRelationshipsComponent__section"}>
          <div className={"FamilyAndRelationshipsComponent__sectionTitle"}>
            <span>Family Members</span>
          </div>

          {props.user === null ? null : props.user.FullInfo
              .FamilyAndRelationships.FamilyMembers.length === 0 ? (
            <FamilyAndRelationshipsComponentAddButton
              title={"Add a family member"}
            />
          ) : (
            props.user.FullInfo.FamilyAndRelationships.FamilyMembers.map(
              (e, index) => {
                return (
                  <FamilyAndRelationshipsComponentNotNullSection
                    editTitle={"a family member"}
                    title={e.name + " " + e.sername + " Status: " + e.status}
                    Icon={PersonIcon}
                  />
                );
              }
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FamilyAndRelationshipsComponent;
