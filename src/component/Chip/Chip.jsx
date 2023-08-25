/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Chip = ({ status, className, divClassName, text = "Submitted" }) => {
  return (
    <div className={`chip ${status} ${className}`}>
      <div className={`completed ${divClassName}`}>
        {status === "accepted" && <>Completed</>}

        {status === "rejected" && <>Rejected</>}

        {status === "submitted" && <>{text}</>}

        {status === "to-do" && <>To Do</>}
      </div>
    </div>
  );
};

Chip.propTypes = {
  status: PropTypes.oneOf(["submitted", "accepted", "rejected", "to-do"]),
  text: PropTypes.string,
};
