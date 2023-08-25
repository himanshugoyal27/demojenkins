import React, { useEffect } from "react";
import { ButtonBase } from "../component/ButtonBase";
import { Chip } from "../component/Chip";
import { Component } from "../component/Component";
import "./InstructorApplicationModule.css";
import PageHeader from "./pageHeader";

import api from "../api/graphql";

import line191svg from "../assests/svg/line-19-1.svg";
import line192svg from "../assests/svg/line-19-2.svg";
import line19svg from "../assests/svg/line-19.svg";

const InstructorApplication = () => {
  const getCourses = async () => {
    const res = await api.getCourse();
    console.log("res---", res);
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      <div className="row no-gutters">
        <Component />
        <div className="become-an-instructor">
          <div className="group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img
                  className="img"
                  alt="Image"
                  src={require("../assests/png/image-6-1.png")}
                />
                <img
                  className="image-2"
                  alt="Image"
                  src={require("../assests/png/image-7-2.png")}
                />
                <img
                  className="intersect"
                  alt="Intersect"
                  src={require("../assests/png/intersect-2.png")}
                />
              </div>
            </div>
            <img
              className="image-3"
              alt="Image"
              src={require("../assests/png/image-9.png")}
            />
          </div>
          <div className="group-3">
            <div className="div-wrapper">
              <div className="overlap-group-3">
                <img
                  className="image-4"
                  alt="Image"
                  src={require("../assests/png/image-6.png")}
                />
                <img
                  className="image-5"
                  alt="Image"
                  src={require("../assests/png/image-7-1.png")}
                />
                <img
                  className="intersect-2"
                  alt="Intersect"
                  src={require("../assests/png/intersect-1.png")}
                />
              </div>
            </div>
            <div className="intersect-wrapper">
              <img
                className="intersect-3"
                alt="Intersect"
                src={require("../assests/png/intersect.png")}
              />
            </div>
          </div>
          <diV className="row no-gutters mb-5">
            <diV className="col-2"></diV>
            <diV className="col-9">
              <div className="instructorTitle">INSTRUCTOR APPLICATION</div>
              <p className="there-are-many">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&#39;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&#39;t anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
              </p>
              <div className="text-wrapper-3">Apply For</div>
              <div>
                <img className="line" alt="Line" src={line192svg} />
              </div>
              <div className="frame-5">
                <div className="text-wrapper-4">Adult</div>
                <p className="p mt-3">
                  Lorem ipsum dolor sit amet consectetur. Est non vestibulum
                  condimentum volutpat donec in.
                </p>

                <div className="text-center border" style={{ width: "100%" }}>
                  <ButtonBase
                    className="button-base-instance"
                    icon="false"
                    size="lg"
                    text="Apply"
                    textClassName="design-component-instance-node"
                  />
                </div>
              </div>
              <div className="text-wrapper-3 mt-4">Instructor Application</div>
              <div>
                <img className="line" alt="Line" src={line191svg} />
              </div>
              <div className="row no-gutters">
                <table className="insCertTable">
                  <tr>
                    <th width="5%">#</th>
                    <th>Certification Name</th>
                    <th width="20%">Certification Date</th>
                    <th width="20%">Expiry Date</th>
                    <th width="20%">Status</th>
                  </tr>
                  <tr>
                    <td width="5%">1</td>
                    <td>Youth</td>
                    <td>03-01-2023</td>
                    <td>06-15-2023</td>
                    <td>
                      <Chip
                        className="chip-instance"
                        divClassName="chip-2"
                        status="submitted"
                        text="Completed"
                      />
                    </td>
                  </tr>
                </table>
              </div>

              <div className="text-wrapper-3 mt-4">Past Applications</div>
              <div>
                <img className="line" alt="Line" src={line191svg} />
              </div>
              <div className="row no-gutters">
                <table className="insCertTable">
                  <tr>
                    <th width="5%">#</th>
                    <th>Certification Name</th>
                    <th width="20%">Start Date</th>
                    <th width="20%">End Date</th>
                    <th width="20%">Status</th>
                  </tr>
                  <tr>
                    <td width="5%">1</td>
                    <td>Youth</td>
                    <td>10-25-2023</td>
                    <td>01-11-2023</td>
                    <td>
                      <Chip
                        className="chip-3"
                        divClassName="chip-4"
                        status="submitted"
                        text="Failed"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            </diV>
          </diV>
        </div>
      </div>
    </>
  );
};
export default InstructorApplication;
