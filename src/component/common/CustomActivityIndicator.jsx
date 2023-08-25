import React from "react";
import Lottie from "lottie-react";
import squareLoad from "../../assests/json/square-load.json";

function CustomActivityIndicator({ visible = false, style }) {
  if (!visible) return null;
  return (
    <div
      style={{
        backgroundColor: "#feffffc2",
        width: "100%",
        position: "fixed",
        height: "100%",
        opacity: 1,
        zIndex: 9999,
        left: "0px",
        top: "0px",
      }}
    >
      <div
        style={{
          marginTop: "20%",
        }}
      >
        <Lottie style={style} animationData={squareLoad} loop={true} />
      </div>
    </div>
  );
}

export default CustomActivityIndicator;
