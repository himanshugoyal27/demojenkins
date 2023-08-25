import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomActivityIndicator from "../component/common/CustomActivityIndicator";
import ErrorMessage from "../component/common/ErrorMessage";
import preFunction from "../component/common/CommonFunction";

import api from "../api/graphql";

import PageHeader from "./pageHeader";
import PageFooter from "../pages/PageFooter";
import "./Welcomemodule.css";

const Welcome = () => {
  //#region const
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [invalidError, setInvalidError] = useState(false);

  const navigate = useNavigate();
  //#endregion
  const errorClose = () => {
    setEmailError(false);
    setPasswordError(false);
  };
  const handleLogin = async () => {
    errorClose();
    let err = false;
    if (email === "" || !preFunction.isEmail(email)) {
      setEmailError(true);
      err = true;
    }
    if (password === "") {
      setPasswordError(true);
      err = true;
    }
    console.log("err---", err);
    if (err) return;
    try {
      setLoad(true);
      const res = await api.checkUser(email, password);
      // const res = await api.getUsers();
      console.log("res---", res);
      console.log("res---", res.CheckUser);
      if (res.CheckUser.length === 0) {
        setInvalidError(true);
        setLoad(false);
        return;
      }
      // let found = 0;
      // for (let i = 0; i < res.GetUser.length; i++) {
      //   if (
      //     res.GetUser[i].email == email &&
      //     res.GetUser[i].password == password
      //   ) {
      //     found = 1;
      //     break;
      //   }
      // }
      // if (found) navigate("/coursedetails");
      // else {
      //   setInvalidError(true);
      //   setLoad(false);
      //   return;
      // }
      navigate("/coursedetails");
      setLoad(false);
    } catch (error) {
      setLoad(false);
      console.log("catch error---", error);
    }
  };

  return (
    <>
      <CustomActivityIndicator
        style={{
          height: 100,
          alignSelf: "center",
        }}
        visible={load}
      />
      <div className="container-fluid welcome-font">
        <div className="row outermargin">
          <PageHeader />
          <div className="homeGetTrainedFindACoParent">
            <b className="courseDetails2">Login</b>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 p-3 frame-parent12">
              <input
                className="yourFullNameWrapper"
                placeholder="Email address"
                onChange={(e) => {
                  errorClose();
                  setEmail(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleLogin()}
              />
              <ErrorMessage
                visible={emailError}
                error="Please enter valid Email"
              />
              <input
                type="password"
                className="yourFullNameWrapper"
                placeholder="Password"
                onChange={(e) => {
                  errorClose();
                  setPassword(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleLogin()}
              />
              <ErrorMessage
                visible={passwordError}
                error="Please enter valid Password"
              />
              <ErrorMessage
                visible={invalidError}
                error="Invalid Email or Password"
              />
              <button onClick={handleLogin} className="registerWrapper">
                Login
              </button>
              <div>
                Dont you have account? <a href="/registration">Sign Up</a> now.
              </div>
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default Welcome;
