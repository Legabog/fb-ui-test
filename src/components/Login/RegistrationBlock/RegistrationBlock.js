import React, { useState } from "react";
import "./RegistrationBlock.css";
import BackDrop from "../../common/BackDrop/BackDrop";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";
import ErrorIcon from "@material-ui/icons/Error";
import { IconButton } from "@material-ui/core";

import is from "is_js";
import db from "../../../utils/firebase/firebase";
import Axios from "axios";

const RegistrationBlock = (props) => {
  const [name, setName] = useState("");

  // -----------Check filed handler

  // ----------Name input
  const [checkedName, setCheckedName] = useState(false);

  const checkNameField = (boolean) => {
    setCheckedName(boolean);
  };
  //

  const [sername, setSername] = useState("");

  // ----------Sername input
  const [checkedSername, setCheckedSername] = useState(false);

  const checkSernameField = (boolean) => {
    setCheckedSername(boolean);
  };
  //

  const [telephone, setTelephone] = useState("");

  // ----------Telephone input
  const [checkedTelephone, setCheckedTelephone] = useState(false);

  const checkTelephoneField = (boolean) => {
    setCheckedTelephone(boolean);
  };
  //

  const [email, setEmail] = useState("");

  // ----------Email input
  const [checkedEmail, setCheckedEmail] = useState(false);

  const checkEmailField = (boolean) => {
    setCheckedEmail(boolean);
  };
  //

  const [password, setPassword] = useState("");

  // ----------Password input
  const [checkedPassword, setCheckedPassword] = useState(false);

  const checkPasswordField = (boolean) => {
    setCheckedPassword(boolean);
  };
  //

  const [bday, setBday] = useState("00");
  const [mday, setMday] = useState("00");
  const [yday, setYday] = useState("0000");

  // ----------Birthday input
  const [checkedBirthdayInput, setCheckedBirthday] = useState(false);

  const checkBirthdayField = (boolean) => {
    setCheckedBirthday(boolean);
  };
  //

  const [sex, setSex] = useState(0);

  // ---------Valid sex input

  const [validSex, setValidSex] = useState(true);

  const validSexInput = (boolean) => {
    setValidSex(boolean);
  };
  //

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

  //----------Validation of inputs

  const spacesValidator = (inputValue) => {
    return inputValue.trim() !== "";
  };

  const nameValidator = () => {
    return is.empty(name) || !spacesValidator(name);
  };

  const sernameValidator = () => {
    return is.empty(sername) || !spacesValidator(sername);
  };

  const telephoneValidator = () => {
    return is.empty(telephone) || !spacesValidator(telephone);
  };

  const emailValidator = () => {
    return is.empty(email) || !spacesValidator(email) || !is.email(email);
  };

  const passwordValidator = () => {
    return is.empty(password) || !spacesValidator(password);
  };

  const birthdayValidator = () => {
    return bday === "00" || mday === "00" || yday === "0000";
  };

  const sexValidator = () => {
    return sex !== 1 && sex !== 2 && sex !== -1;
  };

  const validationResult = () => {
    if (nameValidator()) {
      return null;
    } else {
      if (sernameValidator()) {
        return null;
      } else {
        if (telephoneValidator()) {
          return null;
        } else {
          if (emailValidator()) {
            return null;
          } else {
            if (passwordValidator()) {
              return null;
            } else {
              if (birthdayValidator()) {
                return null;
              } else {
                if (sex === 0) {
                  return null;
                } else {
                  db.collection("users_database").add({
                    Name: name,
                    Sername: sername,
                    "Telephone number": telephone,
                    Email: email,
                    Password: password,
                    "Birthday data": `${bday}.${mday}.${yday}`,
                    Gender:
                      sex === 1
                        ? "Female"
                        : sex === 2
                        ? "Male"
                        : sex === -1
                        ? "Other"
                        : "None",
                  });

                  console.log(
                    "Name: " + name,
                    "Sername: " + sername,
                    "Telephone number: " + telephone,
                    "Email: " + email,
                    "Password: " + password,
                    "Birthday data: " + bday + "." + mday + "." + yday,
                    `Gender: ${
                      sex === 1
                        ? "Female"
                        : sex === 2
                        ? "Male"
                        : sex === -1
                        ? "Other"
                        : "None"
                    }`
                  );
                }
              }
            }
          }
        }
      }
    }
  };

  // ----------Set default input values
  const setDefaultInputsValues = () => {
    setName("");
    setCheckedName(false);

    setSername("");
    setCheckedSername(false);

    setTelephone("");
    setCheckedTelephone(false);

    setEmail("");
    setCheckedEmail(false);

    setPassword("");
    setCheckedPassword(false);

    document.getElementById("birthday__day__input").selectedIndex = 0;
    document.getElementById("birthday__month__input").selectedIndex = 0;
    document.getElementById("birthday__year__input").selectedIndex = 0;
    setCheckedBirthday(false);

    sexHandler(0);
    document.getElementById("femaleinput").checked = false;
    document.getElementById("maleinput").checked = false;
    document.getElementById("otherinput").checked = false;
    setValidSex(true);
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
                <IconButton
                  onClick={() => {
                    props.displayRegistrationBlockFalse();
                    setDefaultInputsValues();
                  }}
                >
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
              <div className="registration__error" style={{display: props.registrationError ? null : "none"}}>
                <div className="registration__error__main">
                  We could not create your account.
                  <br />
                  We were not able to register you on our Social network.
                  <br />
                  It is possible that an account with such mail already exists.
                </div>
              </div>
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
                    onBlur={() => {
                      checkNameField(true);
                    }}
                    onFocus={() => {
                      checkNameField(false);
                    }}
                    style={{
                      border:
                        checkedName && nameValidator() ? "1px solid red" : null,
                    }}
                  />

                  <ErrorIcon
                    className="error__icon"
                    style={{
                      display: checkedName && nameValidator() ? null : "none",
                    }}
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
                    onBlur={() => {
                      checkSernameField(true);
                    }}
                    onFocus={() => {
                      checkSernameField(false);
                    }}
                    style={{
                      border:
                        checkedSername && sernameValidator()
                          ? "1px solid red"
                          : null,
                    }}
                  />
                  <ErrorIcon
                    className="error__icon"
                    style={{
                      display:
                        checkedSername && sernameValidator() ? null : "none",
                    }}
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
                  onBlur={() => {
                    checkTelephoneField(true);
                  }}
                  onFocus={() => {
                    checkTelephoneField(false);
                  }}
                  style={{
                    border:
                      checkedTelephone && telephoneValidator()
                        ? "1px solid red"
                        : null,
                  }}
                />
                <ErrorIcon
                  className="error__icon"
                  style={{
                    display:
                      checkedTelephone && telephoneValidator() ? null : "none",
                  }}
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
                  onBlur={() => {
                    checkEmailField(true);
                  }}
                  onFocus={() => {
                    checkEmailField(false);
                  }}
                  style={{
                    border:
                      checkedEmail && emailValidator() ? "1px solid red" : null,
                  }}
                />
                <ErrorIcon
                  className="error__icon"
                  style={{
                    display: checkedEmail && emailValidator() ? null : "none",
                  }}
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
                  onBlur={() => {
                    checkPasswordField(true);
                  }}
                  onFocus={() => {
                    checkPasswordField(false);
                  }}
                  style={{
                    border:
                      checkedPassword && passwordValidator()
                        ? "1px solid red"
                        : null,
                  }}
                />
                <ErrorIcon
                  className="error__icon"
                  style={{
                    display:
                      checkedPassword && passwordValidator() ? null : "none",
                  }}
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
                  <ErrorIcon
                    className="error__birthday"
                    style={{
                      display:
                        checkedBirthdayInput && birthdayValidator()
                          ? null
                          : "none",
                    }}
                  />
                </div>
                <div className="birthday__selects">
                  <div className="birthday__day__div">
                    <select
                      className="birthday__day"
                      id="birthday__day__input"
                      onClick={bdayHandler}
                      onBlur={() => {
                        checkBirthdayField(true);
                      }}
                      onFocus={() => {
                        checkBirthdayField(false);
                      }}
                      style={{
                        border:
                          checkedBirthdayInput && birthdayValidator()
                            ? "1px solid red"
                            : null,
                      }}
                    >
                      <option value={"00"} defaultValue>
                        Day
                      </option>
                      <option value={"01"}>1</option>
                      <option value={"02"}>2</option>
                      <option value={"03"}>3</option>
                      <option value={"04"}>4</option>
                      <option value={"05"}>5</option>
                      <option value={"06"}>6</option>
                      <option value={"07"}>7</option>
                      <option value={"08"}>8</option>
                      <option value={"09"}>9</option>
                      <option value={"10"}>10</option>
                      <option value={"11"}>11</option>
                      <option value={"12"}>12</option>
                      <option value={"13"}>13</option>
                      <option value={"14"}>14</option>
                      <option value={"15"}>15</option>
                      <option value={"16"}>16</option>
                      <option value={"17"}>17</option>
                      <option value={"18"}>18</option>
                      <option value={"19"}>19</option>
                      <option value={"20"}>20</option>
                      <option value={"21"}>21</option>
                      <option value={"22"}>22</option>
                      <option value={"23"}>23</option>
                      <option value={"24"}>24</option>
                      <option value={"25"}>25</option>
                      <option value={"26"}>26</option>
                      <option value={"27"}>27</option>
                      <option value={"28"}>28</option>
                      <option value={"29"}>29</option>
                      <option value={"30"}>30</option>
                      <option value={"31"}>31</option>
                    </select>
                  </div>

                  <div className="birthday__month__div">
                    <select
                      className="birthday__month"
                      id="birthday__month__input"
                      onClick={mdayHandler}
                      onBlur={() => {
                        checkBirthdayField(true);
                      }}
                      onFocus={() => {
                        checkBirthdayField(false);
                      }}
                      style={{
                        border:
                          checkedBirthdayInput && birthdayValidator()
                            ? "1px solid red"
                            : null,
                      }}
                    >
                      <option value={"00"} defaultValue>
                        Month
                      </option>
                      <option value={"01"}>Jan</option>
                      <option value={"02"}>Feb</option>
                      <option value={"03"}>Mar</option>
                      <option value={"04"}>Apr</option>
                      <option value={"05"}>May</option>
                      <option value={"06"}>Jun</option>
                      <option value={"07"}>Jul</option>
                      <option value={"08"}>Aug</option>
                      <option value={"09"}>Sep</option>
                      <option value={"10"}>Oct</option>
                      <option value={"11"}>Nov</option>
                      <option value={"12"}>Dec</option>
                    </select>
                  </div>

                  <div className="birthday__year__div">
                    <select
                      className="birthday__year"
                      id="birthday__year__input"
                      onClick={ydayHandler}
                      onBlur={() => {
                        checkBirthdayField(true);
                      }}
                      onFocus={() => {
                        checkBirthdayField(false);
                      }}
                      style={{
                        border:
                          checkedBirthdayInput && birthdayValidator()
                            ? "1px solid red"
                            : null,
                      }}
                    >
                      <option value={"0000"} defaultValue>
                        Year
                      </option>
                      <option value={"2020"} defaultValue>
                        2020
                      </option>
                      <option value={"2019"} defaultValue>
                        2019
                      </option>
                      <option value={"2018"} defaultValue>
                        2018
                      </option>
                      <option value={"2017"} defaultValue>
                        2017
                      </option>
                      <option value={"2016"} defaultValue>
                        2016
                      </option>
                      <option value={"2015"} defaultValue>
                        2015
                      </option>
                      <option value={"2014"} defaultValue>
                        2014
                      </option>
                      <option value={"2013"} defaultValue>
                        2013
                      </option>
                      <option value={"2012"} defaultValue>
                        2012
                      </option>
                      <option value={"2011"} defaultValue>
                        2011
                      </option>
                      <option value={"2010"} defaultValue>
                        2010
                      </option>
                      <option value={"2009"} defaultValue>
                        2009
                      </option>
                      <option value={"2008"} defaultValue>
                        2008
                      </option>
                      <option value={"2007"} defaultValue>
                        2007
                      </option>
                      <option value={"2006"} defaultValue>
                        2006
                      </option>
                      <option value={"2005"} defaultValue>
                        2005
                      </option>
                      <option value={"2004"} defaultValue>
                        2004
                      </option>
                      <option value={"2003"} defaultValue>
                        2003
                      </option>
                      <option value={"2002"} defaultValue>
                        2002
                      </option>
                      <option value={"2001"} defaultValue>
                        2001
                      </option>
                      <option value={"2000"} defaultValue>
                        2000
                      </option>
                      <option value={"1999"} defaultValue>
                        1999
                      </option>
                      <option value={"1998"} defaultValue>
                        1998
                      </option>
                      <option value={"1997"} defaultValue>
                        1997
                      </option>
                      <option value={"1996"} defaultValue>
                        1996
                      </option>
                      <option value={"1995"} defaultValue>
                        1995
                      </option>
                      <option value={"1994"} defaultValue>
                        1994
                      </option>
                      <option value={"1993"} defaultValue>
                        1993
                      </option>
                      <option value={"1992"} defaultValue>
                        1992
                      </option>
                      <option value={"1991"} defaultValue>
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
                  <ErrorIcon
                    className="error__gender"
                    style={{
                      display: !validSex && sexValidator() ? null : "none",
                    }}
                  />
                </div>
                <div className="gender__selects">
                  <div
                    className="gender__female"
                    style={{
                      border:
                        !validSex && sexValidator() ? "1px solid red" : null,
                    }}
                  >
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
                      value={sex}
                      onClick={() => {
                        sexHandler(1);
                      }}
                    />
                  </div>
                  <div
                    className="gender__male"
                    style={{
                      border:
                        !validSex && sexValidator() ? "1px solid red" : null,
                    }}
                  >
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
                      value={sex}
                      onClick={() => {
                        sexHandler(2);
                      }}
                    />
                  </div>
                  <div
                    className="gender__other"
                    style={{
                      border:
                        !validSex && sexValidator() ? "1px solid red" : null,
                    }}
                  >
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
                      value={sex}
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
                    nameValidator()
                      ? checkNameField(true)
                      : checkNameField(false);
                    sernameValidator()
                      ? checkSernameField(true)
                      : checkSernameField(false);
                    telephoneValidator()
                      ? checkTelephoneField(true)
                      : checkTelephoneField(false);
                    emailValidator()
                      ? checkEmailField(true)
                      : checkEmailField(false);
                    passwordValidator()
                      ? checkPasswordField(true)
                      : checkPasswordField(false);
                    birthdayValidator()
                      ? checkBirthdayField(true)
                      : checkBirthdayField(false);
                    sexValidator() ? validSexInput(false) : validSexInput(true);

                    validationResult();

                    props.signUp(email, password);
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
