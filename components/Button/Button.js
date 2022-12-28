import React from "react";

function Button({ title, bgColor, textColor, borderRadius, height, width }) {
  return (
    <>
      <button
        style={{
          background: bgColor,
          color: textColor,
          borderRadius: borderRadius,
          border: "none",
          height: height,
          width: width,
        }}
      >
        {title}
      </button>
    </>
  );
}

export default Button;
