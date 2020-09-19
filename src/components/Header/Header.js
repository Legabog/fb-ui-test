import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Axios from "axios";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" placeholder="Search something..." />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar
            src={
              "https://avatars0.githubusercontent.com/u/44378669?s=460&u=079ef1f1a38cec38b2b6ba37b9f71cfccc88ce1f&v=4"
            }
          />
          <h4>{"legabog"}</h4>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton onClick={() => {
            Axios.post(``)
          }}>
            <ForumIcon />
          </IconButton>
          <IconButton
            onClick={() => {
              Axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6fVPBle0emEYn8Jg-tqAQ4fCSC-JTeFI`,
                {
                  requestType: "VERIFY_EMAIL",
                  idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjUxMDM2YWYyZDgzOWE4NDJhZjQzY2VjZmJiZDU4YWYxYTc1OGVlYTIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc29jaWFsLW5ldHdvcmstbGVnYWJvZyIsImF1ZCI6InNvY2lhbC1uZXR3b3JrLWxlZ2Fib2ciLCJhdXRoX3RpbWUiOjE1OTkxMzEzMjAsInVzZXJfaWQiOiJ6NFcwYmpCZ1BZY1FMYnlnQVQ2RXJMNnF6M1QyIiwic3ViIjoiejRXMGJqQmdQWWNRTGJ5Z0FUNkVyTDZxejNUMiIsImlhdCI6MTU5OTEzMTMyMCwiZXhwIjoxNTk5MTM0OTIwLCJlbWFpbCI6InByb2JyaW5nZXJAbWFpbC5ydSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJwcm9icmluZ2VyQG1haWwucnUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.sB_b3L8rEpQvuLaFw6h-crQHrIEbsUzHGMj22P-LnamnuAgZPb59wzxmENtPRcf50WZhB1GzW0uEinr9eCDbMCr_Fb-lUK8dL194GxqqSF8kNwKMfhtuk0WJtH3Od4j2JqCVmnHMQ0EsVj_aKkRjTMDyiR4mqOtLgsG4-3UlPKOxuzsfF9xnTzKPPRAUoIO0gbBxO-Tva6cePEq7zgbqAUI4-KP0aXoAtv0wdJJ0Vo4S3jxmzjRzIr7Xq3ylBqNgLXYb0Hei7YtbLaswP9uaBfcNls6fRLtImiqpY3mMy2KFlCGQNS4wgICNM8J9H0uB1yk47dnqh2Q6B1uenEo9xA",
                }
              );
            }}
          >
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton onClick={props.logout}>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;