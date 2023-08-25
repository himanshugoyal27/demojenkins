import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CustomActivityIndicator from "../component/common/CustomActivityIndicator";
import ErrorMessage from "../component/common/ErrorMessage";
import preFunction from "../component/common/CommonFunction";

import api from "../api/graphql";

import PageHeader from "./pageHeader";
import PageFooter from "./PageFooter";

import storage from "../auth/storage";

import "./Welcomemodule.css";

const Assessment = () => {
  //#region const
  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);
  const [currentQn, setCurrentQn] = useState(0);

  const navigate = useNavigate();
  //#endregion

  const handleNext = () => {
    console.log("currentQn---", currentQn);
    if (currentQn == data.length - 1) {
      //handleSubmit
    } else {
      setCurrentQn(currentQn + 1);
    }
  };

  const handleAssessment = async () => {
    try {
      const res = await api.getAssessmentDetail(1);
      console.log("res---", res);
      if (res.GetAssessmentDetail && res.GetAssessmentDetail.length > 0) {
        setData(res.GetAssessmentDetail);
      }
    } catch (error) {
      console.log("error---", error);
    }
  };
  const getCourses = async () => {
    const userData = await storage.getField("userData");
    console.log("user--", userData);

    const res = await api.getAssessmentDetail(1);
    console.log("res---", res);
    if (res.GetAssessmentDetail && res.GetAssessmentDetail.length > 0) {
      setData(res.GetAssessmentDetail);
    }
  };

  const handleAns = async (id, ans) => {
    let dataarr = data;
    console.log("dataarr--", dataarr);
    dataarr[currentQn].answered = ans;
    console.log("dataarr--", dataarr);

    setData(dataarr);
  };
  useEffect(() => {
    getCourses();
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
            <b className="courseDetails2">Assesment</b>
          </div>
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 p-3 frame-parent12">
              <div>{data[currentQn].qn}</div>
              <div>
                <input
                  type="radio"
                  name="answerOptions"
                  value={1}
                  onClick={(e) => handleAns(data[currentQn].id, 1)}
                />
                {data[currentQn].opt1}
              </div>
              <div>
                <input type="radio" name="answerOptions" value={2} />
                {data[currentQn].opt2}
              </div>
              <div>
                <input type="radio" name="answerOptions" value={3} />
                {data[currentQn].opt3}
              </div>
              <div>
                <input type="radio" name="answerOptions" value={4} />
                {data[currentQn].opt4}
              </div>
              {currentQn == data.length - 1 ? (
                <button onClick={handleAssessment} className="registerWrapper">
                  Submit
                </button>
              ) : (
                <button onClick={handleNext} className="registerWrapper">
                  Next
                </button>
              )}
            </div>
          </div>
          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default Assessment;
