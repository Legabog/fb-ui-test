import React from "react"
import "./Profile.css"
import ProfileHeader from "./ProfileHeader/ProfileHeader"

const Profile = (props) => {
    return (
        <div className={"profile"}>
            <ProfileHeader {...props}/>
            <div className={"profile__body"}>
            </div>
        </div>
    )
}

export default Profile