/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Circle13 } from "../../assests/icons/Circle13";
import { Circle9 } from "../../assests/icons/Circle9";
import "./style.css";

export const ButtonBase = ({
  size,
  icon,
  className,
  textClassName,
  text = "Button CTA",
}) => {
  return (
    <div className={`button-base ${size} ${icon} ${className}`}>
      {icon === "false" && (
        <div className={`text ${textClassName}`}>{text}</div>
      )}

      {icon === "trailing" && <div className="text-wrapper">{text}</div>}

      {((icon === "leading" && size === "lg") ||
        (icon === "leading" && size === "md") ||
        (icon === "leading" && size === "sm") ||
        (icon === "leading" && size === "xl") ||
        (icon === "only" && size === "lg") ||
        (icon === "only" && size === "md") ||
        (icon === "only" && size === "sm") ||
        (icon === "only" && size === "xl") ||
        (icon === "trailing" && size === "lg") ||
        (icon === "trailing" && size === "md") ||
        (icon === "trailing" && size === "sm") ||
        (icon === "trailing" && size === "xl")) && (
        <Circle9 className="circle" />
      )}

      {size === "two-xl" && ["leading", "only", "trailing"].includes(icon) && (
        <Circle13 className="circle-13" />
      )}

      {icon === "dot" && (
        <div className="dot-wrapper">
          <div className="div" />
        </div>
      )}

      {["dot", "leading"].includes(icon) && (
        <div className="text-2">{text}</div>
      )}
    </div>
  );
};

ButtonBase.propTypes = {
  size: PropTypes.oneOf(["xl", "lg", "two-xl", "sm", "md"]),
  icon: PropTypes.oneOf(["only", "leading", "false", "dot", "trailing"]),
  text: PropTypes.string,
};
