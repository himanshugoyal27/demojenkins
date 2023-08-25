// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// import registerApi from "../api/register";
// import doctorApi from "../api/doctorApi";

// import CustomActivityIndicator from "../component/common/CustomActivityIndicator";
// import CustomTextInput from "../component/common/CustomTextInput";
// import ErrorMessage from "../component/common/ErrorMessage";
// import preFunction from "../component/common/CommonFunction";

// import storage from "../auth/storage";
// import useAuth from "../auth/useAuth";
// import PageHeader from "./../pages/pageHeader";
// import doctorRegApi from "../api/doctorRegApi";
// import ErrorLog from "../component/common/ErrorLog";

// const prefixerror = "Register";
// function Register() {
//   //#region const
//   const navigate = useNavigate();
//   const location = useLocation();
//   const authLogin = useAuth();
//   const [load, setLoad] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState();
//   const [firstname, setFirstname] = useState("");
//   const [mobile, setMobile] = useState(location.state.mobile);
//   const [showFirstName, setShowFirstName] = useState(false);
//   const [showLastName, setShowLastName] = useState(false);
//   const [showEmail, setShowEmail] = useState(false);
//   const [lastname, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [terms, setTerms] = useState(false);
//   const [showTerms, setShowTerms] = useState(false);
//   //#endregion

//   const closeErrors = () => {
//     setShowFirstName(false);
//     setShowLastName(false);
//     setShowEmail(false);
//     setShowTerms(false);
//   };

//   const handleVerifyEmail = async (mail) => {
//     try {
//       setLoad(true);
//       const recipientName = firstname + " " + lastname;
//       const mailRes = await doctorRegApi.sendEmailVerification(
//         recipientName,
//         mail
//       );
//       if (!mailRes.ok) {
//         ErrorLog(
//           prefixerror + "handleVerifyEmail " + "sendEmailVerification",
//           JSON.stringify(mailRes),
//           "We are facing some issues.Please try again after sometime.",
//           "recipientName:" + recipientName + "mail:" + mail
//         );
//         return;
//       }
//       console.log("mailRes---", mailRes);
//       return;
//     } catch (error) {
//       console.log("error--", error);
//       ErrorLog(
//         prefixerror + "handleVerifyEmail ",
//         error,
//         "We are facing some issues.Please try again after sometime."
//       );
//       setLoad(false);
//       return;
//     }
//   };

//   const handleSubmit = async () => {
//     try {
//       const leadSource = await storage.getLeadSource();
//       console.log("leadsource--", leadSource);
//       let err = false;
//       if (!terms) {
//         setShowTerms(true);
//         document.getElementById("terms").focus();
//         err = true;
//       }
//       if (email == "" || !email.match(/.+@.+/)) {
//         setShowEmail(true);
//         // document.getElementById("email").className += " form-control-error";
//         document.getElementById("email").focus();
//         err = true;
//       } else {
//         setShowEmail(false);
//       }
//       if (lastname == "" || lastname.length > 100) {
//         setShowLastName(true);
//         // document.getElementById("lastname").className += " form-control-error";
//         document.getElementById("lastname").focus();
//         err = true;
//       } else {
//         setShowLastName(false);
//       }
//       if (firstname == "" || firstname.length < 3 || firstname.length > 100) {
//         setShowFirstName(true);
//         // document.getElementById("firstname").className += " form-control-error";
//         document.getElementById("firstname").focus();
//         err = true;
//       } else {
//         setShowFirstName(false);
//       }
//       if (err) {
//         return;
//       }
//       setLoad(true);
//       const response = await registerApi.signUp(
//         email,
//         firstname,
//         lastname,
//         mobile,
//         "Web",
//         leadSource
//       );
//       console.log("response----", response);

//       if (response.ok === false) {
//         setLoad(false);
//         setOpen(true);
//         setMessage(
//           JSON.parse(JSON.parse(response.data._server_messages)[0]).message
//         );
//       } else if (!response.data.message[0].name) {
//         setLoad(false);
//         setOpen(true);
//         setMessage(response.data.message);
//       } else {
//         const doctorId = response.data.message[0].name;
//         console.log(doctorId, "DoctorID");

//         const confRes = await doctorApi.getAdminConf();
//         const generalPostRes = await doctorApi.createConfiguration(
//           doctorId,
//           confRes.data.message[0]
//         );
//         console.log("generalPostRes---", generalPostRes);

//         await handleVerifyEmail(email);

//         await storage.storeToken(
//           email + ":" + response.data.message[0].api_secret
//         );

//         const status = response.data.message[0].status;
//         await storage.storeStaus(status);
//         await storage.storeId(
//           doctorId,
//           firstname,
//           lastname,
//           email,
//           "Practitioner Permission"
//         );
//         authLogin.logIn(
//           doctorId,
//           firstname,
//           lastname,
//           email,
//           "Practitioner Permission"
//         );
//         navigate("/basicinformation", {
//           replace: true,
//         });
//       }
//       setLoad(false);
//     } catch (error) {
//       console.log("Error1", error);
//       setLoad(false);
//     }
//   };

//   useEffect(() => {
//     setMobile(location.state.mobile);
//     document.getElementById("firstname") &&
//       document.getElementById("firstname").focus();
//   }, []);

//   return (
//     <>
//       <CustomActivityIndicator
//         style={{ height: 100, alignSelf: "center" }}
//         visible={load}
//       />
//       <div className="container-fluid welcome-font">
//         <div className="row outermargin">
//           <PageHeader />
//           <div className="row mb-5">
//             <div className="col-lg-2"></div>
//             <div className="col-lg-8">
//               <div className="row login-right">
//                 <div className="col-lg-7 p-0">
//                   <div className="loginbluebgbox">
//                     <div className="loginlefttext">
//                       Revolutionize <br />
//                       your clinical experience <br />
//                       with MyClinic!
//                     </div>
//                     <div className="streamtext">
//                       Streamlines electronic patient
//                       <br /> record keeping.
//                     </div>
//                     <div className="row no-gutters">
//                       <div className="col-lg-4 mt-4">
//                         <button
//                           className="aboutbut"
//                           type="submit"
//                           title="About Us"
//                           onClick={(e) => navigate("/aboutus")}
//                         >
//                           About Us
//                         </button>
//                       </div>
//                       <div className="col-lg-5 mt-4">
//                         <button
//                           className="privacybut"
//                           type="submit"
//                           title="Privacy Policy"
//                           onClick={(e) => navigate("/privacypolicy")}
//                         >
//                           Privacy Policy
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-5  p-0">
//                   <div style={{ margin: "35% 15%" }}>
//                     <div className="logheader">Register</div>
//                     <div className="logtext">First Name:</div>
//                     <div className="row no-gutters">
//                       <CustomTextInput
//                         type="text"
//                         name="firstname"
//                         id="firstname"
//                         className="regtextinput"
//                         placeholder="First Name"
//                         onChange={(e) => {
//                           setFirstname(
//                             preFunction.capitalizeFirst(e.target.value)
//                           );
//                           closeErrors();
//                         }}
//                         onKeyUp={(e) =>
//                           e.keyCode == 13 ? handleSubmit() : null
//                         }
//                         onClick={() => setOpen(false)}
//                       />
//                       <ErrorMessage
//                         error={"Please enter your First Name"}
//                         visible={showFirstName}
//                       />
//                     </div>
//                     <div className="logtext">Last Name:</div>
//                     <div className="row no-gutters">
//                       <CustomTextInput
//                         type="text"
//                         name="lastname"
//                         id="lastname"
//                         className="regtextinput"
//                         placeholder="Last Name"
//                         onClick={() => setOpen(false)}
//                         onChange={(e) => {
//                           setLastName(e.target.value);
//                           closeErrors();
//                         }}
//                         onKeyUp={(e) =>
//                           e.keyCode == 13 ? handleSubmit() : null
//                         }
//                       />
//                       <ErrorMessage
//                         error={"Please enter your Last Name"}
//                         visible={showLastName}
//                       />
//                     </div>
//                     <div className="logtext">Email:</div>
//                     <div className="row no-gutters">
//                       <CustomTextInput
//                         type="email"
//                         name="email"
//                         id="email"
//                         onChange={(e) => {
//                           setEmail(e.target.value);
//                           closeErrors();
//                         }}
//                         onKeyUp={(e) =>
//                           e.keyCode == 13 ? handleSubmit() : null
//                         }
//                         className="regtextinput"
//                         placeholder="Email"
//                         onClick={() => setOpen(false)}
//                       />
//                       <ErrorMessage
//                         error={"Please enter valid Email"}
//                         visible={showEmail}
//                       />
//                       <ErrorMessage error={message} visible={open} />
//                     </div>
//                     <div className="mt-2">
//                       <CustomTextInput
//                         type="checkbox"
//                         name="terms"
//                         id="terms"
//                         value={terms}
//                         onChange={(e) => {
//                           setTerms(!terms);
//                           closeErrors();
//                         }}
//                       />{" "}
//                       I have read and agree with the{" "}
//                       <a
//                         href="./termsandcondition"
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         Terms and Conditions
//                       </a>
//                       <ErrorMessage
//                         error={
//                           "Please read and accept our Terms and Conditions"
//                         }
//                         visible={showTerms}
//                       />
//                     </div>
//                     <div className="text-center mt-3">
//                       <button
//                         className="otpbut"
//                         type="submit"
//                         onClick={handleSubmit}
//                       >
//                         <i className="icofont-login"></i>
//                         Register
//                       </button>
//                     </div>
//                     <div className="mt-1 logtext">
//                       Have an account? <a href="/doctormobileotp">Login!</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-2"></div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;

// src/App.js

import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query Query {
    getUser {
      email
      password
      phoneNumber
      additionalDetails
    }
  }
`;

function Register() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log("data----", data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.getUser.map((book, index) => (
          <li key={index}>
            <strong>{book.email}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Register;
