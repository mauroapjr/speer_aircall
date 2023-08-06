import React from "react";

const PhoneCallCountIcon = ({ count }) => {
  return (
    <i className="bi bi-1-circle" style={{ position: "relative" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-1-circle"
        viewBox="0 0 16 16"
      >
        <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
      </svg>
      <span
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          color: "black",
          borderRadius: "50%",
          padding: "2px 4px",
        }}
      >
        {count}
      </span>
    </i>
  );
};

export default PhoneCallCountIcon;