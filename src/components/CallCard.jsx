import React from "react";
import { secondsToMinutes } from "../util/helpers";
import "../css/callCard.css";

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
            <span>
              Call Type:{" "}
              {call.call_type === "missed" ? (
                <i className="bi bi-telephone-x"></i>
              ) : call.call_type === "answered" ? (
                <i className="bi bi-telephone-inbound"></i>
              ) : (
                <i className="bi bi-telephone-outbound"></i>
              )}
            </span>
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
    } else if (context === "archived") {
      return (
        <>
          <span>From: {call.from}</span>
          <span>To: {call.to}</span>
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
