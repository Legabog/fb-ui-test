import React, { useState } from "react";
import "./RegistrationBlock.css";
import BackDrop from "../../common/BackDrop/BackDrop";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import { IconButton } from "@material-ui/core";

const RegistrationBlock = (props) => {
  const [name, setName] = useState("");
  const [sername, setSername] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [bday, setBday] = useState("00");
  const [mday, setMday] = useState("00");
  const [yday, setYday] = useState("0000");

  const [sex, setSex] = useState(0);

  // --------Inputs handlers
  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const inputSernameHandler = (e) => {
    setSername(e.target.value);
  };

  const inputTelephoneHandler = (e) => {
    setTelephone(e.target.value);
  };

  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  // ---------Selects handlers

  const bdayHandler = (e) => {
    setBday(e.target.value);
  };

  const mdayHandler = (e) => {
    setMday(e.target.value);
  };

  const ydayHandler = (e) => {
    setYday(e.target.value);
  };

  const sexHandler = (e) => {
    setSex(e);
  };

  //

  return (
    <div
      className="registrationtable"
      style={{
        visibility: `${props.visibilityRegistrationBlock}`,
        opacity: `${props.opacityRegistrationBlock}`,
      }}
    >
      <div className="registrationblock">
        <div className="registrationblock__main">
          <div className="registrationblock__main__q">
            <div className="registrationblock__top">
              <div className="registrationblock__top__main">Registration</div>
              <div className="registrationblock__top__description">
                Fast and easily
              </div>
              <div className="close__icon">
                <IconButton onClick={props.displayRegistrationBlockFalse}>
                  <CloseOutlinedIcon />
                </IconButton>
              </div>
            </div>
            <hr
              style={{
                height: "0",
                border: "none",
                borderTop: "1px solid #f0ecec",
              }}
            />
            <div className="registrationblock__body">
              <div className="fullname__field">
                <div className="namefield">
                  <input
                    type="text"
                    className="nameinput"
                    data-type="text"
                    name="firstname"
                    placeholder="Name"
                    value={name}
                    onChange={inputNameHandler}
                  />
                </div>
                <div className="sernamefield">
                  <input
                    type="text"
                    className="sernameinput"
                    data-type="text"
                    name="secondname"
                    placeholder="Sername"
                    value={sername}
                    onChange={inputSernameHandler}
                  />
                </div>
              </div>
              <div className="telephone__field">
                <input
                  type="text"
                  className="telephoneinput"
                  datatype="text"
                  name="telephone"
                  placeholder="Telephone number"
                  value={telephone}
                  onChange={inputTelephoneHandler}
                />
              </div>
              <div className="email__field">
                <input
                  type="text"
                  className="emailinput"
                  datatype="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={inputEmailHandler}
                />
              </div>
              <div className="password__field">
                <input
                  type="password"
                  className="passwordinput"
                  datatype="text"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={inputPasswordHandler}
                />
              </div>
              <div className="birthday">
                <div className="birthday__description">
                  Date of birth
                  <IconButton>
                    <HelpOutlinedIcon
                      style={{ width: "12px", height: "12px" }}
                    />
                  </IconButton>
                </div>
                <div className="birthday__selects">
                  <div className="birthday__day__div">
                    <select className="birthday__day" onClick={bdayHandler}>
                      <option value={0} defaultValue>
                        Day
                      </option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                    </select>
                  </div>

                  <div className="birthday__month__div">
                    <select className="birthday__month" onClick={mdayHandler}>
                      <option value={0} defaultValue>
                        Month
                      </option>
                      <option value={1}>Jan</option>
                      <option value={2}>Feb</option>
                      <option value={3}>Mar</option>
                      <option value={4}>Apr</option>
                      <option value={5}>May</option>
                      <option value={6}>Jun</option>
                      <option value={7}>Jul</option>
                      <option value={8}>Aug</option>
                      <option value={9}>Sep</option>
                      <option value={10}>Otc</option>
                      <option value={11}>Nov</option>
                      <option value={12}>Dec</option>
                    </select>
                  </div>

                  <div className="birthday__year__div">
                    <select className="birthday__year" onClick={ydayHandler}>
                      <option value={0} defaultValue>
                        Year
                      </option>
                      <option value={2020} defaultValue>
                        2020
                      </option>
                      <option value={2019} defaultValue>
                        2019
                      </option>
                      <option value={2018} defaultValue>
                        2018
                      </option>
                      <option value={2017} defaultValue>
                        2017
                      </option>
                      <option value={2016} defaultValue>
                        2016
                      </option>
                      <option value={2015} defaultValue>
                        2015
                      </option>
                      <option value={2014} defaultValue>
                        2014
                      </option>
                      <option value={2013} defaultValue>
                        2013
                      </option>
                      <option value={2012} defaultValue>
                        2012
                      </option>
                      <option value={2011} defaultValue>
                        2011
                      </option>
                      <option value={2010} defaultValue>
                        2010
                      </option>
                      <option value={2009} defaultValue>
                        2009
                      </option>
                      <option value={2008} defaultValue>
                        2008
                      </option>
                      <option value={2007} defaultValue>
                        2007
                      </option>
                      <option value={2006} defaultValue>
                        2006
                      </option>
                      <option value={2005} defaultValue>
                        2005
                      </option>
                      <option value={2004} defaultValue>
                        2004
                      </option>
                      <option value={2003} defaultValue>
                        2003
                      </option>
                      <option value={2002} defaultValue>
                        2002
                      </option>
                      <option value={2001} defaultValue>
                        2001
                      </option>
                      <option value={2000} defaultValue>
                        2000
                      </option>
                      <option value={1999} defaultValue>
                        1999
                      </option>
                      <option value={1998} defaultValue>
                        1998
                      </option>
                      <option value={1997} defaultValue>
                        1997
                      </option>
                      <option value={1996} defaultValue>
                        1996
                      </option>
                      <option value={1995} defaultValue>
                        1995
                      </option>
                      <option value={1994} defaultValue>
                        1994
                      </option>
                      <option value={1993} defaultValue>
                        1993
                      </option>
                      <option value={1992} defaultValue>
                        1992
                      </option>
                      <option value={1991} defaultValue>
                        1991
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="gender">
                <div className="gender__description">
                  Gender
                  <IconButton>
                    <HelpOutlinedIcon
                      style={{ width: "12px", height: "12px" }}
                    />
                  </IconButton>
                </div>
                <div className="gender__selects">
                  <div className="gender__female">
                    <label
                      className="gender__female__label"
                      htmlFor="gender__female__input"
                    >
                      Female
                    </label>
                    <input
                      name="gender"
                      id="femaleinput"
                      className="gender__female__input"
                      type="radio"
                      value={1}
                      onClick={() => {
                        sexHandler(1);
                      }}
                    />
                  </div>
                  <div className="gender__male">
                    <label
                      className="gender__male__label"
                      htmlFor="gender__male__input"
                    >
                      Male
                    </label>
                    <input
                      name="gender"
                      id="maleinput"
                      className="gender__male__input"
                      type="radio"
                      value={2}
                      onClick={() => {
                        sexHandler(2);
                      }}
                    />
                  </div>
                  <div className="gender__other">
                    <label
                      className="gender__other__label"
                      htmlFor="gender__other__input"
                    >
                      Other
                    </label>
                    <input
                      name="gender"
                      id="otherinput"
                      className="gender__other__input"
                      type="radio"
                      value={-1}
                      onClick={() => {
                        sexHandler(-1);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="policy__message">
                <p>
                  Нажимая кнопку Регистрация, вы принимаете Условия, Политику
                  использования данных и Политику в отношении файлов cookie. Вы
                  можете получать от нас SMS-уведомления, отказаться от которых
                  можно в любой момент.
                </p>
              </div>
              <div className="registration__button">
                <button
                  type="submit"
                  className="regbutton"
                  onClick={() => {
                    console.log(
                      name,
                      sername,
                      telephone,
                      email,
                      password,
                      bday + "." + mday + "." + yday,
                      sex === 1 ? "female" : sex === 2 ? "male" : "other"
                    );
                  }}
                >
                  Registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackDrop />
    </div>
  );
};

export default RegistrationBlock;
