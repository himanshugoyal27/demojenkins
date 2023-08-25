import React, { forwardRef } from "react";
import moment from "moment";

const disablePastDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear() - 1;
  console.log(yyyy + "-" + mm + "-" + dd, "Date");
  return yyyy + "-" + mm + "-" + dd;
};

const disableFutureDate = () => {
  return moment(new Date()).format("yyyy-MM-DD");
};
const getTodayDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
};

const disablePastDateBy100 = () => {
  const today = new Date();
  return moment(
    new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())
  ).format("yyyy-MM-DD");
};

const displayTimeFormat = (time) => {
  return time.split(":")[0] + ":" + time.split(":")[1];
};

// const validatePassword = (pass, id, msgid) => {
//   let msg = "";
//   let passerr = 0;
//   if (pass == "") {
//     passerr = 1;
//     document.getElementById(id).focus();
//     msg += `<div className="passwordErrMessage">8 Characters</div>
//             <div className="passwordErrMessage">1 Uppercase</div>
//             <div className="passwordErrMessage">1 Lowercase</div>
//             <div className="passwordErrMessage">1 Number</div>
//             <div className="passwordErrMessage">1 special case Character<div>`;
//     document.getElementById(msgid).innerHTML = msg;
//     document.getElementById(msgid).style.display = "block";
//     return false;
//   }
//   if (pass.length < 8) {
//     passerr = 1;
//     msg += `<div className="passwordErrMessage">8 Characters<div>`;
//   } else {
//     msg += `<div className="passwordSuccessMessage"><img src=${checkIcon} /> 8 Characters<div>`;
//   }
//   if (!pass.match(/[$#!@%&]/)) {
//     passerr = 1;
//     msg += `<div className="passwordErrMessage">1 special case Character eg: $, #, !, @, %, &<div>`;
//   } else {
//     msg += `<div className="passwordSuccessMessage"><img src=${checkIcon} /> 1 special case Character eg: $, #, !, @, %, &<div>`;
//   }
//   if (!pass.match(/[a-z]/)) {
//     passerr = 1;
//     msg += `<div className="passwordErrMessage">1 Lowercase<div>`;
//   } else {
//     msg += `<div className="passwordSuccessMessage"><img src=${checkIcon} /> 1 Lowercase<div>`;
//   }
//   if (!pass.match(/[A-Z]/)) {
//     passerr = 1;
//     msg += `<div className="passwordErrMessage">1 Uppercase<div>`;
//   } else {
//     msg += `<div className="passwordSuccessMessage"><img src=${checkIcon} /> 1 Uppercase<div>`;
//   }
//   if (!pass.match(/[0-9]/)) {
//     passerr = 1;
//     msg += `<div className="passwordErrMessage">1 Number<div>`;
//   } else {
//     msg += `<div className="passwordSuccessMessage"><img src=${checkIcon} /> 1 Number<div>`;
//   }
//   document.getElementById(msgid).innerHTML = msg;
//   document.getElementById(msgid).style.display = "block";
//   if (passerr === 1) {
//     return false;
//   } else {
//     return true;
//   }
// };
const hideNavbar = () => {
  const a = document.getElementById("DoctorNavBar")
    ? (document.getElementById("DoctorNavBar").className =
        "menulistshow navbarvertical")
    : null;
  const d = document.getElementById("dropdownId")
    ? (document.getElementById("dropdownId").style.display = "none")
    : null;
};

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const durations = (start, stop, step) => {
  let arr = [];
  for (let i = start; i <= stop; i = i + step) {
    var myObject = {
      id: i,
      name: i,
    };
    arr.push(myObject);
  }
  return arr;
};

const DateCustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    id="dobButton"
    className="datepicker form-input"
    onClick={onClick}
    ref={ref}
  >
    {value ? value : "MM/DD/YYYY"}
    <span className="col-1 icofont-calendar ms-2"></span>
  </button>
));

const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const isEmail = (email) => {
  const regex = /^([a-zA-Z0-9_.+-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]{2,6})$/;
  return regex.test(email);
};

const isMobile = (phone) => {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return regex.test(phone);
};

export default {
  disablePastDate,
  disableFutureDate,
  disablePastDateBy100,
  getTodayDate,
  range,
  hideNavbar,
  DateCustomInput,
  durations,
  displayTimeFormat,
  capitalizeFirst,
  isEmail,
  isMobile,
};
