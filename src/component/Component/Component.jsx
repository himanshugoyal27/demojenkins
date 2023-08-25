import React from "react";
import { Link } from "react-router-dom";
import { ArrowChevronDown2 } from "../../assests/icons/ArrowChevronDown2";
import "./component.css";

export const Component = ({ className }) => {
  return (
    <div className="row no-gutters p-3">
      <div className="col-2"></div>
      <div className="col-4 ">
        <Link className="group" to="/">
          <div className="row no-gutters">
            <div className="col-1">
              <img
                className="image"
                alt="Image"
                src={require("../../assests/png/image-13-1.png")}
              />
            </div>
            <div className="col-6 text-3">MHFA</div>
          </div>
        </Link>
      </div>
      <div className="col-6">
        <div className="overlap-group">
          <img
            className="ellipse"
            alt="Ellipse"
            src={require("../../assests/png/ellipse-1652.png")}
            height={"100%"}
          />
          <b className="text-wrapper-2">John doe</b>
          <ArrowChevronDown2 className="arrow-chevron-down" />
        </div>
      </div>
    </div>
  );
};
