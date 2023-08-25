import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactSelect from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CustomActivityIndicator from "../component/common/CustomActivityIndicator";
import ErrorMessage from "../component/common/ErrorMessage";
import preFunction from "../component/common/CommonFunction";
import {
  entryReasonList,
  // MHFAGroupsList,
  YesNoList,
} from "../component/common/CommonArray";

import api from "../api/graphql";

import PageHeader from "./pageHeader";
import PageFooter from "../pages/PageFooter";
import "./Welcomemodule.css";
import moment from "moment";
const DateCustomInput = preFunction.DateCustomInput;

const Registration = () => {
  //#region const
  const [load, setLoad] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [invalidError, setInvalidError] = useState(false);
  const [MHFAGroupsList, setMHFAGroupsList] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [entryReason, setEntryReason] = useState("");
  const [workAddressLine1, setWorkAddressLine1] = useState("");
  const [workAddressLine1Error, setWorkAddressLine1Error] = useState("");
  const [workAddressLine2, setWorkAddressLine2] = useState("");
  const [workAddressCity, setWorkAddressCity] = useState("");
  const [workAddressCityError, setWorkAddressCityError] = useState("");
  const [workAddressState, setWorkAddressState] = useState("");
  const [workAddressStateError, setWorkAddressStateError] = useState("");
  const [workAddressZipCode, setWorkAddressZipCode] = useState("");
  const [WorkAddressZipCodeError, setWorkAddressZipCodeError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [MHFAgroup, setMHFAgroup] = useState("");
  const [partofOrganization, setPartofOrganization] = useState(false);
  const [organization, setOrganization] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [receiveNews, setReceiveNews] = useState("");
  const [instructorPublicProfile, setInstructorPublicProfile] = useState(false);
  const [instructorPublicProfileError, setInstructorPublicProfileError] =
    useState(false);
  const [instructorCertificationStatus, setInstructorCertificationStatus] =
    useState("");
  const [instructorAccreditedDate, setInstructorAccreditedDate] = useState("");
  const [instructorAnniversaryDate, setInstructorAnniversaryDate] =
    useState("");
  const [instructorDietaryRestrictions, setInstructorDietaryRestrictions] =
    useState("");
  const [
    otherInstructorDietaryRestrictions,
    setOtherInstructorDietaryRestrictions,
  ] = useState("");
  const [adultCertificationDate, setAdultCertificationDate] = useState("");
  const [adultAnniversaryDate, setAdultAnniversaryDate] = useState("");
  const [youthCertificationDate, setYouthCertificationDate] = useState("");
  const [youthAnniversaryDate, setYouthAnniversaryDate] = useState("");
  const [teenCertificationDate, setTeenCertificationDate] = useState("");
  const [teenAnniversaryDate, setTeenAnniversaryDate] = useState("");
  const [sponsorStatus, setSponsorStatus] = useState("");
  const [primaryOrganizationName, setPrimaryOrganizationName] = useState("");
  const [primaryOrganizationID, setPrimaryOrganizationID] = useState("");
  const [secondaryOrganizationName, setSecondaryOrganizationName] =
    useState("");
  const [secondaryOrganizationID, setSecondaryOrganizationID] = useState("");
  const [tertiaryOrganizationName, setTertiaryOrganizationName] = useState("");
  const [tertiaryOrganizationID, setTertiaryOrganizationID] = useState("");

  const navigate = useNavigate();
  //#endregion
  const errorClose = () => {
    setEmailError(false);
    setPasswordError(false);
  };
  const handleRegistration = async () => {
    errorClose();
    let err = false;
    console.log("confirmPassword---", confirmPassword, "---", password);
    if (firstName == "") {
      document.getElementById("firstNameId").focus();
      setFirstNameError(true);
      err = true;
    }
    if (confirmPassword != password) {
      document.getElementById("confirmPassId").focus();
      setConfirmPasswordError(true);
      err = true;
    }
    if (password === "") {
      document.getElementById("passId").focus();
      setPasswordError(true);
      err = true;
    }
    if (email === "" || !preFunction.isEmail(email)) {
      setEmailError(true);
      err = true;
      document.getElementById("emailId").focus();
    }
    console.log("err---", err);
    if (err) return;
    try {
      setLoad(true);
      console.log("email--", email);
      const res = await api.checkEmail(email);
      console.log("res---", res);
      console.log("res---", res.CheckUserEmail);
      if (res.CheckUserEmail.length > 0) {
        setInvalidError(true);
        setLoad(false);
        return;
      }
      const addUserRes = await api.addUser(
        email,
        password,
        firstName,
        middleName,
        lastName,
        entryReason.name,
        workAddressLine1,
        workAddressLine2,
        workAddressCity,
        workAddressState,
        parseInt(workAddressZipCode),
        phoneNumber,
        MHFAgroup.value ? parseInt(MHFAgroup.value) : 0,
        partofOrganization.value === 1 ? true : false,
        organization,
        jobTitle,
        receiveNews && receiveNews.value && receiveNews.value === 1
          ? true
          : false,
        instructorPublicProfile &&
          instructorPublicProfile.value &&
          instructorPublicProfile.value === 1
          ? true
          : false,
        instructorCertificationStatus,
        instructorAccreditedDate
          ? moment(instructorAccreditedDate).format("yyyy-MM-DD")
          : "",
        instructorAnniversaryDate
          ? moment(instructorAnniversaryDate).format("yyyy-MM-DD")
          : "",
        instructorDietaryRestrictions,
        otherInstructorDietaryRestrictions,
        adultCertificationDate ? adultCertificationDate.toISOString() : "",
        adultAnniversaryDate ? adultAnniversaryDate.toISOString() : "",
        youthCertificationDate ? youthCertificationDate.toISOString() : "",
        youthAnniversaryDate ? youthAnniversaryDate.toISOString() : "",
        teenCertificationDate ? teenCertificationDate.toISOString() : "",
        teenAnniversaryDate ? teenAnniversaryDate.toISOString() : "",
        sponsorStatus,
        primaryOrganizationName,
        primaryOrganizationID,
        secondaryOrganizationName,
        secondaryOrganizationID,
        tertiaryOrganizationName,
        tertiaryOrganizationID
      );
      console.log("addUserRes---", addUserRes);
      setLoad(false);
      return;
      navigate("/coursedetails");
      setLoad(false);
    } catch (error) {
      setInvalidError(true);
      setLoad(false);
      console.log("catch error---", error);
    }
  };

  const getMaster = async () => {
    setLoad(false);
    const res = await api.getGroup();
    console.log("test---", res);
    if (res.GetGroup.length > 0) {
      var obj = [];
      for (let i = 0; i < res.GetGroup.length; i++) {
        obj.push({
          label: res.GetGroup[i].group_name,
          value: res.GetGroup[i].id,
        });
      }
      setMHFAGroupsList(obj);
    }
  };

  useEffect(() => {
    getMaster();
    document.getElementById("emailId") &&
      document.getElementById("emailId").focus();
  }, []);
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
            <b className="courseDetails2">Registration</b>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 p-3 frame-parent12">
              <input
                id="emailId"
                className="yourFullNameWrapper"
                placeholder="Email address"
                onChange={(e) => {
                  errorClose();
                  setEmail(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <ErrorMessage
                visible={emailError}
                error="Please enter valid Email"
              />
              <input
                id="passId"
                type="password"
                className="yourFullNameWrapper"
                placeholder="Password"
                onChange={(e) => {
                  errorClose();
                  setPassword(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <ErrorMessage
                visible={passwordError}
                error="Please enter valid Password"
              />
              <input
                id="confirmPassId"
                type="password"
                className="yourFullNameWrapper"
                placeholder="Confirm Password"
                onChange={(e) => {
                  errorClose();
                  setConfirmPassword(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <ErrorMessage
                visible={confirmPasswordError}
                error="Password and Confirm Password didnt match"
              />
              <input
                id="firstNameId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="First Name"
                onChange={(e) => {
                  errorClose();
                  setFirstName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                type="text"
                className="yourFullNameWrapper"
                placeholder="Middle Name"
                onChange={(e) => {
                  errorClose();
                  setMiddleName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="lastNameId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Last Name"
                onChange={(e) => {
                  errorClose();
                  setLastName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <div className="yourFullNameWrapper p-0">
                <ReactSelect
                  inputId="entryReasonId"
                  placeholder="What brings you to MHFA Connect? "
                  options={entryReasonList}
                  onChange={(etxt) => {
                    errorClose();
                    setEntryReason(etxt);
                  }}
                  onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
                />
              </div>
              <input
                id="addressLine1Id"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Work Address Line 1"
                onChange={(e) => {
                  errorClose();
                  setWorkAddressLine1(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                type="text"
                className="yourFullNameWrapper"
                placeholder="Work Address Line 2"
                onChange={(e) => {
                  errorClose();
                  setWorkAddressLine2(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="cityId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Work Address City"
                onChange={(e) => {
                  errorClose();
                  setWorkAddressCity(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="stateId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Work Address State"
                onChange={(e) => {
                  errorClose();
                  setWorkAddressState(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="zipCodeId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Work Address Zip Code"
                onChange={(e) => {
                  errorClose();
                  setWorkAddressZipCode(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="phoneId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Phone Number"
                onChange={(e) => {
                  errorClose();
                  setPhoneNumber(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <div className="yourFullNameWrapper p-0">
                <ReactSelect
                  inputId="groupId"
                  placeholder="Do you teach MHFA in or for one of the following groups?"
                  options={MHFAGroupsList}
                  onChange={(etxt) => {
                    errorClose();
                    setMHFAgroup(etxt);
                  }}
                />
              </div>
              <div className="yourFullNameWrapper p-0">
                <ReactSelect
                  inputId="partId"
                  placeholder="Are you part of a member organization?"
                  options={YesNoList}
                  onChange={(etxt) => {
                    errorClose();
                    setPartofOrganization(etxt);
                  }}
                />
              </div>
              <input
                id="organizationId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Organization"
                onChange={(e) => {
                  errorClose();
                  setOrganization(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="jobTitleId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Job Title"
                onChange={(e) => {
                  errorClose();
                  setJobTitle(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <div className="yourFullNameWrapper p-0">
                <ReactSelect
                  inputId="newsId"
                  placeholder="Would you like to receive news and updates from MHFA and the National Council for Mental Wellbeing?"
                  options={YesNoList}
                  onChange={(etxt) => {
                    errorClose();
                    setReceiveNews(etxt);
                  }}
                />
              </div>
              <div className="yourFullNameWrapper p-0">
                <ReactSelect
                  inputId="publicProfileId"
                  placeholder="Instructor Public Profile"
                  options={YesNoList}
                  onChange={(etxt) => {
                    errorClose();
                    setInstructorPublicProfile(etxt);
                  }}
                />
              </div>
              <input
                id="certStatusId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Instructor Certification Status"
                onChange={(e) => {
                  errorClose();
                  setInstructorCertificationStatus(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              {/* <input
                id="accDateId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Instructor Accredited Date"
                onChange={(e) => {
                  errorClose();
                  setInstructorAccreditedDate(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              /> */}
              Instructor Accredited Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={instructorAccreditedDate}
                onChange={(e) => {
                  errorClose();
                  setInstructorAccreditedDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Instructor Anniversary Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={instructorAnniversaryDate}
                onChange={(e) => {
                  errorClose();
                  setInstructorAnniversaryDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              <input
                id="dietRestId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Instructor Dietary Restrictions"
                onChange={(e) => {
                  errorClose();
                  setInstructorDietaryRestrictions(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="dietRestOtherId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Instructor Dietary Restrictions - If Allergies/Other Preferences, please describe"
                onChange={(e) => {
                  errorClose();
                  setOtherInstructorDietaryRestrictions(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              Adult Certification Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={adultCertificationDate}
                onChange={(e) => {
                  errorClose();
                  setAdultCertificationDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Adult Anniversary Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={adultAnniversaryDate}
                onChange={(e) => {
                  errorClose();
                  setAdultAnniversaryDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Youth Certification Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={youthCertificationDate}
                onChange={(e) => {
                  errorClose();
                  setYouthCertificationDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Youth Anniversary Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={youthAnniversaryDate}
                onChange={(e) => {
                  errorClose();
                  setYouthAnniversaryDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Teen Certification Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={teenCertificationDate}
                onChange={(e) => {
                  errorClose();
                  setTeenCertificationDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              Teen Anniversary Date
              <DatePicker
                id="accDateId"
                className="yourFullNameWrapper"
                selected={teenAnniversaryDate}
                onChange={(e) => {
                  errorClose();
                  setTeenAnniversaryDate(e);
                }}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="scroll"
                customInput={<DateCustomInput />}
              />
              <input
                id="sponsorStatusId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Sponsor Status"
                onChange={(e) => {
                  errorClose();
                  setSponsorStatus(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="primOrgNameId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Primary Organization Name"
                onChange={(e) => {
                  errorClose();
                  setPrimaryOrganizationName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="primOrgId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Primary Organization ID"
                onChange={(e) => {
                  errorClose();
                  setPrimaryOrganizationID(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="secOrgNameId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Secondary Organization Name"
                onChange={(e) => {
                  errorClose();
                  setSecondaryOrganizationName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="secOrgId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Secondary Organization ID"
                onChange={(e) => {
                  errorClose();
                  setSecondaryOrganizationID(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="terOrgNameId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Tertiary Organization Name"
                onChange={(e) => {
                  errorClose();
                  setTertiaryOrganizationName(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <input
                id="terOrgId"
                type="text"
                className="yourFullNameWrapper"
                placeholder="Tertiary Organization ID"
                onChange={(e) => {
                  errorClose();
                  setTertiaryOrganizationID(e.target.value);
                }}
                onKeyUp={(e) => e.keyCode === 13 && handleRegistration()}
              />
              <ErrorMessage
                visible={invalidError}
                error="Email already registered"
              />
              <button onClick={handleRegistration} className="registerWrapper">
                Register
              </button>
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default Registration;
