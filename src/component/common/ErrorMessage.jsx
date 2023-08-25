import React from "react";
import CustomText from "./CustomText";

function ErrorMessage({ error, visible, style }) {
  if (!visible || !error) return null;
  return (
    <CustomText
      // style={{ color: "red", marginLeft: "10px", marginBottom: "-15px" }}
      style={style}
      className="errorMessage"
    >
      <div
        dangerouslySetInnerHTML={{
          __html: error,
        }}
      ></div>
    </CustomText>
  );
}

export default ErrorMessage;
