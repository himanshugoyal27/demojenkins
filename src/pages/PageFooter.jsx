import React, { useEffect, useState } from "react";
import string from "../string";

import logo from "../assests/svg/logo.svg";
import searchSvg from "../assests/svg/search.svg";
import moment from "moment";

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
      <div className="row no-gutters p-3">
        <div className="row no-gutters">
          <div className="col-lg-4">
            <a className="navbar-brand" href="/">
              <img src={logo} alt={string.websiteName + " Home"} />
            </a>
          </div>
          <div className="col-lg-8 text-center">
            <div className="footertext text-center">
              @{moment().format("yyyy")} National Council for Mental Wellbeing.
              All Rights Reserved.
            </div>
            <div className=" text-center">
              <a className="footerlinks" href="/">
                FAQ
              </a>
              |
              <a
                className="footerlinks"
                rel="noreferrer"
                href="javascript:void(0)"
              >
                Privacy Policy
              </a>
              |
              <a
                className="footerlinks"
                rel="noreferrer"
                href="javascript:void(0)"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
