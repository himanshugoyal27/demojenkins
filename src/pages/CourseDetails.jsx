import React, { useEffect, useState } from "react";
import styles from "../CourseDetails.module.css";

import logo from "../assests/svg/logo.svg";
import angleLeft from "../assests/svg/angleleft.svg";
import mhfalogohorizontal from "../assests/svg/mhfalogohorizontal-1.svg";
import printSvg from "../assests/svg/print.svg";
import group2Svg from "../assests/svg/group-2.svg";
import searchSvg from "../assests/svg/search.svg";

import api from "../api/graphql";

const CourseDetails = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addDetail, setAddDetail] = useState("");

  const handleRegister = async () => {
    let err = false;
    console.log(
      "fullName--",
      fullName,
      "--email--",
      email,
      "--no--",
      phoneNumber,
      "--deta--",
      addDetail
    );

    const res = await api.addUser(fullName, email, phoneNumber, addDetail);
    console.log("res---", res);
  };

  const getUserList = async () => {
    const res = await api.getUsers();
    console.log("res----", res);
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <div className={styles.courseDetails}>
      <div className={styles.frameParent}>
        <div className={styles.homeGetTrainedFindACoParent}>
          <div className={styles.homeGetContainer}>
            <span>{`Home  •  Get Trained  •  Find a Course • `}</span>
            <span className={styles.courseDetails1}>Course Details</span>
          </div>
          <div className={styles.angleLeftParent}>
            <img className={styles.angleLeftIcon} alt="" src={angleLeft} />
            <div className={styles.backToResults}>back to results</div>
          </div>
          <b className={styles.courseDetails2}>Course details</b>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.nationalCouncilForMentalWeParent}>
            <div className={styles.nationalCouncilFor}>
              ©2023 National Council for Mental Wellbeing. All Rights Reserved.
            </div>
            <div className={styles.faqPrivacy}>
              FAQ | Privacy Policy | Sitemap
            </div>
          </div>
          <img
            className={styles.mhfaLogoHorizontal1Icon}
            alt=""
            src={mhfalogohorizontal}
          />
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.downloadParent}>
          <div className={styles.download}>
            <img className={styles.printIcon} alt="" src={printSvg} />
          </div>
          <div className={styles.download}>
            <img className={styles.downloadChild} alt="" src={group2Svg} />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.courseDetailsParent}>
                    <div className={styles.backToResults}>Course details</div>
                    <div className={styles.div}>$125</div>
                  </div>
                  <div className={styles.frameParent4}>
                    <div className={styles.adultWrapper}>
                      <div className={styles.backToResults}>Adult</div>
                    </div>
                    <div className={styles.inPersonWrapper}>
                      <div className={styles.backToResults}>In-person</div>
                    </div>
                    <div className={styles.courseWrapper}>
                      <div className={styles.course}>2.0 Course</div>
                    </div>
                  </div>
                </div>
                <div
                  className={styles.adultMhfaIs}
                >{`Adult MHFA is designed to teach parents, family members, caregivers, & teachers.`}</div>
                <div className={styles.frameParent5}>
                  <div className={styles.adultWrapper}>
                    <div className={styles.backToResults}>Adult</div>
                  </div>
                  <div className={styles.blendedWithVirtualComponentWrapper}>
                    <div className={styles.backToResults}>
                      Blended with virtual component
                    </div>
                  </div>
                  <div className={styles.courseWrapper}>
                    <div className={styles.course}>2.0 Course</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.courseScheduleParent}>
              <div className={styles.backToResults}>Course Schedule</div>
              <div className={styles.frameParent6}>
                <div className={styles.startDate020220230900Wrapper}>
                  <div className={styles.nationalCouncilFor}>
                    <span className={styles.startDate02022023}>
                      <span className={styles.startDate}>start date</span>
                      <span>{`  02/02/2023  `}</span>
                    </span>
                    <span>
                      <span>09:00</span>
                    </span>
                  </div>
                </div>
                <div className={styles.startDate020220230900Wrapper}>
                  <div className={styles.nationalCouncilFor}>
                    <span className={styles.startDate02022023}>
                      <span className={styles.startDate}>end date</span>
                      <span>{`  02/04/2023  `}</span>
                    </span>
                    <span>
                      <span>15:30</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.venueDetailsParent}>
              <div className={styles.venueDetails}>Venue Details</div>
              <div className={styles.frameParent7}>
                <div className={styles.venueNameParent}>
                  <div className={styles.venueName}>venue name</div>
                  <div className={styles.javitsCenter}>Javits Center</div>
                </div>
                <div className={styles.venueNameParent}>
                  <div className={styles.venueName}>venue address</div>
                  <div className={styles.w34thSt}>
                    655 W 34th St, New York, NY 10014
                  </div>
                </div>
              </div>
              <div className={styles.venueNameParent}>
                <div className={styles.venueName}>venue notes</div>
                <div className={styles.locatedOn34th}>
                  Located on 34th st and 10th Ave.
                </div>
              </div>
            </div>
            <div className={styles.courseScheduleParent}>
              <div className={styles.backToResults}>Instructor Details</div>
              <div className={styles.frameParent8}>
                <div className={styles.instructorNameParent}>
                  <div className={styles.venueName}>Instructor name</div>
                  <div className={styles.javitsCenter}>Fayola Caines</div>
                </div>
                <div className={styles.instructorNameParent}>
                  <div className={styles.venueName}>email</div>
                  <div className={styles.embracethetotalyougmailcom}>
                    embracethetotalyou@gmail.com
                  </div>
                </div>
                <div className={styles.instructorNameParent}>
                  <div className={styles.venueName}>phone</div>
                  <div className={styles.w34thSt}>(212)-322-2222</div>
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.fundingSourceParent}>
                  <div className={styles.nationalCouncilFor}>
                    Funding source
                  </div>
                  <div className={styles.w34thSt}>N/A</div>
                </div>
                <div className={styles.fundingSourceParent}>
                  <div className={styles.nationalCouncilFor}>
                    Community-specific courses
                  </div>
                  <div className={styles.w34thSt}>Fire/EMS</div>
                </div>
              </div>
            </div>
            <div className={styles.courseScheduleParent}>
              <div className={styles.backToResults}>
                Additional Course Information
              </div>
              <div className={styles.frameParent10}>
                <div className={styles.instructorNameParent}>
                  <div className={styles.venueName}>funding source</div>
                  <div className={styles.w34thSt}>N/A</div>
                </div>
                <div className={styles.instructorNameParent}>
                  <div className={styles.venueName}>
                    community-specific courses
                  </div>
                  <div className={styles.w34thSt}>Fire/EMS</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent11}>
            <div className={styles.selfRegistrationParent}>
              <b className={styles.nationalCouncilFor}>Self-registration</b>
              <div className={styles.javitsCenter}>
                To register, contact instructor or enter details below
              </div>
            </div>
            <div className={styles.frameParent12}>
              <input
                className={styles.yourFullNameWrapper}
                placeholder="Your full name"
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                className={styles.yourFullNameWrapper}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={styles.yourFullNameWrapper}
                placeholder="Phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <textarea
                className={styles.messageOrAdditionalDetailsWrapper}
                placeholder="Message or additional details"
                onChange={(e) => setAddDetail(e.target.value)}
              />
              <button
                onClick={handleRegister}
                className={styles.registerWrapper}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent13}>
        <div className={styles.getTrainedParent}>
          <div className={styles.getTrained}>Get Trained</div>
          <div className={styles.backToResults}>Be an Instructor</div>
          <div className={styles.backToResults}>Impact</div>
          <div className={styles.backToResults}>About MHFA</div>
          <img className={styles.searchIcon} alt="" src={searchSvg} />
        </div>
        <img className={styles.mhfaLogoHorizontal1Icon1} alt="" src={logo} />
      </div>
    </div>
  );
};

export default CourseDetails;
