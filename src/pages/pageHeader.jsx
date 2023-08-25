import React, { useEffect, useState } from "react";
import string from "../string";

import logo from "../assests/svg/logo.svg";
import searchSvg from "../assests/svg/search.svg";

const PageHeader = () => {
  const [currentPage, setCurrentPage] = useState("");

  const handleToggle = () => {
    if (
      document.getElementById("mynavbar").style.display == "" ||
      document.getElementById("mynavbar").style.display == "none"
    )
      document.getElementById("mynavbar").style.display = "flex";
    else document.getElementById("mynavbar").style.display = "none";
  };

  useEffect(() => {
    const currentpage = window.location.href;
    const currPage = currentpage.substring(
      currentpage.lastIndexOf("/") + 1,
      currentpage.length
    );
    setCurrentPage(currPage);
  }, []);
  return (
    <>
      <div className="row no-gutters">
        <nav className="navbar navbar-expand-lg navbar p-3">
          <div className="container-fluid p-0">
            <div className="row no-gutters">
              <div className="col-10">
                <a className="navbar-brand" href="/">
                  <img src={logo} alt={string.websiteName + " Home"} />
                </a>
              </div>
              <div className="col-2">
                <button
                  className="navbar-toggler mt-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#mynavbar"
                  onClick={(e) => handleToggle()}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
            <div className="row collapse navbar-collapse " id="mynavbar">
              <div className="col-lg-5 toptext" id="txtnav"></div>
              <div className="col-lg-7">
                <ul className="navbar-nav" style={{ float: "right" }}>
                  <li className="welcome-nav-item">
                    <a
                      className={
                        currentPage == "" ? "nav-link navSelected" : "nav-link"
                      }
                      href="/"
                    >
                      Get Trained
                    </a>
                  </li>
                  <li className="welcome-nav-item">
                    <a
                      className="nav-link"
                      rel="noreferrer"
                      href="javascript:void(0)"
                    >
                      Be an Instructor
                    </a>
                  </li>
                  <li className="welcome-nav-item">
                    <a
                      className="nav-link"
                      rel="noreferrer"
                      href="javascript:void(0)"
                    >
                      Impact
                    </a>
                  </li>
                  <li className="welcome-nav-item">
                    <a
                      className={
                        currentPage == "doctormobileotp"
                          ? "nav-link navSelected"
                          : "nav-link"
                      }
                      href="javascript:void(0)"
                    >
                      About MHFA
                    </a>
                  </li>
                  <li className="welcome-nav-item">
                    <a
                      className={
                        currentPage == "doctorregisterotp"
                          ? "nav-link navSelected"
                          : "nav-link"
                      }
                      href="javascript:void(0)"
                    >
                      <img src={searchSvg} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default PageHeader;
