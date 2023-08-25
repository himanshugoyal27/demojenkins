import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ottGroupSvg from "../assests/svg/ott-group.svg";
import vectorSvg from "../assests/svg/vector-2.svg";
import lineSvg from "../assests/svg/line-4.svg";
import depCounsilSvg from "../assests/svg/depression-counseling.svg";
import illustrationSvg from "../assests/svg/illustration.svg";
import logoPng from "../assests/png/nclogofile-horizontal-tagline-registered-1@2x.png";

import ErrorMessage from "../component/common/ErrorMessage";
import preFunction from "../component/common/CommonFunction";

import string from "../string";
import storage from "../auth/storage";
import api from "../api/graphql";

import "./BecomeAnInstructormodule.css";

const BecomeInstructor = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [ott, setOtt] = useState("");
  const [showOTTProcess, setShowOTTProcess] = useState(false);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [otpError, setOtpError] = useState(false);

  const [password, setPassword] = useState("");
  const [passError, setPassError] = useState(false);
  const [userData, setUserData] = useState([]);

  const [params, setParams] = useState([]);

  const checkPassword = async () => {
    console.log("user--", userData);
    console.log("user--", password);
    if (password == userData.password) {
      await storage.storeUserData([userData]);
      navigate("/instructorapplication");
      return;
    } else {
      setPassError(true);
      return;
    }
  };

  const handleOtpVerify = async () => {
    const otpTyped = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    console.log("otpTyped---", otpTyped, "ott--", ott);
    if (otpTyped == ott) {
      navigate("/registration");
    } else {
      setOtpError(true);
      return;
    }
  };

  const handleChangeEmail = () => {
    setOtt("");
    setEmail("");
    setShowOTTProcess(false);
    document.getElementById("emailId") &&
      document.getElementById("emailId").focus();
    return;
  };

  const handleResend = async () => {
    const ott = Math.floor(Math.random() * 900000) + 100000;
    console.log("ott-", ott);
    setOtt(ott);
    setTimeout(() => {
      setOtt("");
    }, 600000);
    const mailOtp = ott.toString().slice(0, 3) + "-" + ott.toString().slice(3);
    console.log("mailOtp----", mailOtp);

    const emailData = {
      recipient: email,
      subject:
        "National Council: A one-time password is required for Registration",
      message: ` <div style="text-align:center"><div>To continue your application as a instructor, please use the following Application Code/OTP</div><div style="font-Size:30px"}>${mailOtp}</div>
        <div>This OTP is valid for only 10 mins. If you require any assistance. Please contact our 24 hr Customer Service Hotline at 1800 xxx xxxx.</div><div>Thank you</div></div>`,
    };
    const response = await axios.post(string.emailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    console.log("response==", response);
    if (response.status == 200) {
      console.log(response.data.message);
      setShowOTTProcess(true);
    } else {
      console.error("Error sending email:", response.statusText);
    }
  };

  const sendEmail = async () => {
    setEmailError(false);
    if (email == "" || !preFunction.isEmail(email)) {
      setEmailError(true);
      document.getElementById("emailId").focus();
      return;
    }

    const res = await api.checkEmail(email);
    console.log("res---", res);
    console.log("res---", res.CheckUserEmail);
    if (res.CheckUserEmail && res.CheckUserEmail.length > 0) {
      setUserData(res.CheckUserEmail[0]);
      setShowPass(true);
      return;
    }
    const ott = Math.floor(Math.random() * 900000) + 100000;
    console.log("ott-", ott);
    setOtt(ott);
    setTimeout(() => {
      setOtt("");
    }, 600000);
    const mailOtp = ott.toString().slice(0, 3) + "-" + ott.toString().slice(3);
    console.log("mailOtp----", mailOtp);

    const emailData = {
      recipient: email,
      subject:
        "National Council: A one-time password is required for Registration",
      message: ` <div style="text-align:center"><div>To continue your application as a instructor, please use the following Application Code/OTP</div><div style="font-Size:30px"}>${mailOtp}</div>
        <div>This OTP is valid for only 10 mins. If you require any assistance. Please contact our 24 hr Customer Service Hotline at 1800 xxx xxxx.</div><div>Thank you</div></div>`,
    };
    const response = await axios.post(string.emailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });
    console.log("response==", response);
    if (response.status == 200) {
      console.log(response.data.message);
      setShowOTTProcess(true);
    } else {
      console.error("Error sending email:", response.statusText);
    }
  };

  const parseParams = async (querystring) => {
    const params = new URLSearchParams(querystring);
    let obj = { email: "", course: "" };
    for (const key of params.keys()) {
      console.log("key===", key);
      if (key == "email") {
        console.log("email--", params.get(key));
        obj.email = params.get(key);
        setEmail(params.get(key));
      } else if (key == "course") {
        obj.course = params.get(key);
      }
    }
    await storage.storeField("adData", obj);
  };

  useEffect(() => {
    parseParams(window.location.search);
    document.getElementById("emailId") &&
      document.getElementById("emailId").focus();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row no-gutters mt-5 mb-5 bgGrad">
          {showOTTProcess ? (
            <>
              <div className="col-lg-6">
                <div
                  className="row no-gutters p-3 pt-5 maskGroupBg border"
                  style={{ height: "100%" }}
                >
                  <img src={ottGroupSvg} className="image" />
                </div>
              </div>
              <div className="col-lg-6 p-3">
                <div className="row no-gutters">
                  <div className="ptext" style={{ textAlign: "right" }}>
                    Need assistance?{" "}
                    <b className="orangeText">Contact us for help</b>
                  </div>
                  <div className="formRight">
                    <div className="mt-5 row no-gutters">
                      <div className="text-center">
                        <img src={logoPng} width={"200"} />
                      </div>
                    </div>
                    <div className="mt-5 sendText">
                      An application code has been sent to <br />
                      <b className="orangeText">{email}</b>
                    </div>
                    <div className="sendText mt-3">Kindly check your email</div>
                    <div className="head text-center mt-3">
                      Enter Your Application Code
                    </div>

                    <div className="text-center mt-5 p-2">
                      <input
                        id="otp1"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp1(e.target.value);
                        }}
                      />
                      <input
                        id="otp2"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp2(e.target.value);
                        }}
                      />
                      <input
                        id="otp3"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp3(e.target.value);
                        }}
                      />{" "}
                      -{" "}
                      <input
                        id="otp4"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp4(e.target.value);
                        }}
                      />
                      <input
                        id="otp5"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp5(e.target.value);
                        }}
                      />
                      <input
                        id="otp6"
                        className="otpWrapper"
                        maxLength={1}
                        onChange={(e) => {
                          setOtpError(false);
                          setOtp6(e.target.value);
                        }}
                      />
                      <ErrorMessage
                        visible={otpError}
                        error="Please enter valid OTP"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        onClick={handleOtpVerify}
                        className="mt-5 buttonWrapper"
                      >
                        Verify
                      </button>
                    </div>
                    <div className="text-center">
                      Didn’t receive code?{" "}
                      <a
                        href="javascript:void(0)"
                        onClick={(e) => handleResend()}
                      >
                        Resend Code
                      </a>
                    </div>
                    <div className="text-center">
                      <a
                        href="javascript:void(0)"
                        className="blueLink"
                        onClick={(e) => handleChangeEmail()}
                      >
                        Change Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="col-lg-6">
                <div className="row no-gutters p-3 pt-5 maskGroupBg">
                  <div className="row no-gutters head">
                    Applying For Instructor Training
                  </div>
                  <div className="row no-gutters mt-3">
                    <div className="col-lg-6 toplink">
                      <div className="row no-gutters">
                        <div className="col-11">
                          Adult and Youth Mental Health First Aid Applicants
                          <img src={lineSvg} width="100%" />
                        </div>
                        <div className="col-1 pt-1">
                          <img src={vectorSvg} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 toplink">
                      <div className="row no-gutters">
                        <div className="col-11">New Applicants</div>
                        <div className="col-1 pt-1">
                          <img src={vectorSvg} />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 toplink">Current Instructors</div>
                  </div>
                  <div className="row no-gutters">
                    <p className="ptext">
                      Adult and Youth Mental Health First Aid (MHFA) Instructor
                      candidates must successfully complete an application that
                      ensures they have a general understanding of the program &
                      the skills that make an Instructor successful, & affirm
                      the requirements of the course. Please look for your
                      application type below and review the instructions before
                      starting the process.
                    </p>
                    <p className="ptext">
                      Please submit an application to view the most current list
                      of available courses in the MHFA Store.
                    </p>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-lg-8">
                      <div className="secHead">
                        Adult and Youth Mental Health First Aid Instructor
                        Applicants – Missouri and Maryland Residents
                      </div>
                      <div>
                        <p className="ptext">
                          If you are a resident of Missouri, please visit our
                          state partner’s website to apply for their in-state
                          Instructor trainings. Open only to Missouri residents:
                          Apply for Missouri Instructor Training. If you are a
                          resident of Maryland, please visit their website to
                          apply for their in-state Instructor trainings. Open
                          only to Maryland residents: Apply for Maryland
                          Instructor Training.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 p-3">
                      <img src={depCounsilSvg} width={"100%"} />
                    </div>
                  </div>
                  <div className="row no-gutters">
                    <div className="col-lg-4 p-3">
                      <img src={illustrationSvg} width={"100%"} />
                    </div>
                    <div className="col-lg-8">
                      <div className="secHead">
                        Teen Mental Health First Aid Instructor Applicants
                      </div>
                      <div>
                        <p className="ptext">
                          To apply for a teen Mental Health First Aid (tMHFA)
                          Instructor training, please complete the tMHFA
                          interest form to start the process. Whether you are an
                          independent Instructor or are planning to teach tMHFA
                          on behalf of an organization, you must speak with a
                          member of our team before you can apply to become a
                          tMHFA Instructor. Our team can assist in answering any
                          questions you may have and advise you on next steps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 p-3">
                <div className="row no-gutters">
                  <div className="ptext" style={{ textAlign: "right" }}>
                    Need assistance?{" "}
                    <b className="orangeText">Contact us for help</b>
                  </div>
                  <div className="formRight">
                    <div className="mt-5 row no-gutters">
                      <div>
                        <img src={logoPng} width={"200"} />
                      </div>
                    </div>
                    <div className="mt-5 row no-gutters emailHead">
                      Enter email for verification
                    </div>
                    {showPass ? (
                      <>
                        <div className="col-lg-6 ptext">
                          Welcome back! Please enter your password.
                        </div>
                        <div className="row no-gutters mt-5  formWrapper">
                          <b className="inputLabel">Password</b>
                          <input
                            type="password"
                            id="passId"
                            className="inputWrapper"
                            // placeholder="Password"
                            onChange={(e) => {
                              setPassError(false);
                              setPassword(e.target.value);
                            }}
                            onKeyUp={(e) => e.keyCode === 13 && checkPassword()}
                          />
                          <ErrorMessage
                            visible={passError}
                            error="Password doesnt match. Please check again"
                          />
                          <button
                            onClick={checkPassword}
                            className="mt-5 buttonWrapper"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-6 ptext">
                          Enter your email address. Use your Connect account
                          email, if you have an account.
                        </div>
                        <div className="row no-gutters mt-5  formWrapper">
                          <b className="inputLabel">Email Address</b>
                          <input
                            id="emailId"
                            className="inputWrapper"
                            placeholder="Email address"
                            onChange={(e) => {
                              setEmailError(false);
                              setEmail(e.target.value);
                            }}
                            value={email}
                            onKeyUp={(e) => e.keyCode === 13 && sendEmail()}
                          />
                          <ErrorMessage
                            visible={emailError}
                            error="Please enter valid Email"
                          />
                          <button
                            onClick={sendEmail}
                            className="mt-5 buttonWrapper"
                          >
                            Next
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default BecomeInstructor;
