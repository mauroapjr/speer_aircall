import React from "react";
import { secondsToMinutes } from "../util/helpers";

const CallCard = ({ call, context }) => {
  const renderCardContent = () => {
    if (context === "feed") {
      return (
        <>
          <div className="call-direction">
            {call.direction === "inbound" ? (
              <i className="bi bi-arrow-down-left"></i>
            ) : (
              <i className="bi bi-arrow-up-right"></i>
            )}
          </div>
          <div className="call-details">
            <span>From: {call.from}</span>
            <span>Call Type: {call.call_type}</span>
            <span>Duration: {secondsToMinutes(call.duration)} minutes</span>
          </div>
        </>
      );
    } else if (context === "detail") {
      return (
        <>
          <span style={{ color: "orange" }}>ARCHIVE {call.is_archived}</span>
          <span style={{ color: "blue" }}>Call Time: {call.created_at}</span>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <li key={call.id} className="call-container">
      {renderCardContent()}
    </li>
  );
};

export default CallCard;
