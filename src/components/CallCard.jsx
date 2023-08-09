import React from "react";
import { secondsToMinutes, formatDate } from "../util/helpers";
import "../css/callCard.css";

const CallCard = ({ call, context }) => {
  const renderCardContent = () => {
    if (context === "feed") {
      return (
        <>
          <div className="call-direction">
            {call.direction === "inbound" ? (
              <i className="bi bi-arrow-down-circle me-2"></i>
            ) : (
              <i className="bi bi-arrow-up-circle me-2"></i>
            )}
          </div>
          <div className="call-details">
            <span>From: {call.from}</span>
            <span>
              Call Type:{" "}
              {call.call_type === "missed" ? (
                <i className="bi bi-telephone-x-fill me-2"></i>
              ) : call.call_type === "answered" ? (
                <i className="bi bi-telephone-inbound-fill text-success me-2"></i>
              ) : (
                <i className="bi bi-telephone-outbound-fill text-danger me-2"></i>
              )}
            </span>
            <span style={{ color: "blue" }}>
              {formatDate(call.created_at)}
            </span>
            <span>Duration: {secondsToMinutes(call.duration)} </span>
          </div>
        </>
      );
    } else if (context === "detail") {
      return (
        <>
          <div className="call-direction">
            {call.direction === "inbound" ? (
              <i className="bi bi-arrow-down-circle me-2"></i>
            ) : (
              <i className="bi bi-arrow-up-circle me-2"></i>
            )}
          </div>
          <div className="call-details">
            <span>From: {call.from}  </span>
            <span> 
              
              {call.call_type === "missed" ? (
                <i className="bi bi-telephone-x-fill me-2"></i>
              ) : call.call_type === "answered" ? (
                <i className="bi bi-telephone-inbound-fill text-success me-2"></i>
              ) : (
                <i className="bi bi-telephone-outbound-fill text-danger me-2"></i>
              )}
            </span>
            <span style={{ color: "blue" }}>
               {formatDate(call.created_at)}
            </span>
            <div className="call-archived">
              {call.is_archived ? (
                <i className="bi bi-archive-fill" style={{ color: "orange" }}>
                  {" "}
                  Archived
                </i>
              ) : (
                <i className="bi bi-archive" style={{ color: "blue" }}>
                  {" "}
                  Unarchived
                </i>
              )}
            </div>
            <span>Duration: {secondsToMinutes(call.duration)} </span>
          </div>
        </>
      );
    } else if (context === "archived") {
      return (
        <>
        <div className="call-direction">
            {call.direction === "inbound" ? (
              <i className="bi bi-arrow-down-circle me-2"></i>
            ) : (
              <i className="bi bi-arrow-up-circle me-2"></i>
            )}
          </div>
          <span className="me-2">From: {call.from} </span>
          <span className="me-2">To: {call.to} </span>
          <span>
               Call Type: {" "}
              {call.call_type === "missed" ? (
                <i className="bi bi-telephone-x-fill me-2"></i>
              ) : call.call_type === "answered" ? (
                <i className="bi bi-telephone-inbound-fill text-success me-2"></i>
              ) : (
                <i className="bi bi-telephone-outbound-fill text-danger me-2"></i>
              )}
            </span>
          <div className="call-archived">
            {call.is_archived ? (
              <i className="bi bi-archive-fill me-2" style={{ color: "orange" }}>
                {" "}
                Archived
              </i>
            ) : (
              <i className="bi bi-archive me-2" style={{ color: "blue" }}>
                {" "}
                Unarchived
              </i>
            )}
            <span>Duration: {secondsToMinutes(call.duration)} </span>
          </div>
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
