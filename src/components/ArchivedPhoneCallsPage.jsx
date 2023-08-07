import React from "react";
import CallInboundIcon from "./CallInboundIcon";
import CallOutboundIcon from "./CallOutboundIcon";

import { secondsToMinutes } from "./App";

const ArchivedPhoneCallsPage = ({ calls, currentTab }) => {
  const archivedCalls = calls.filter((call) => call.is_archived);

  return (
    <div className="container">
      <div className="container-view">Some activities should be here</div>

      <h3>Archived calls</h3>
      <ul>
      {currentTab === "archived" &&
          archivedCalls.map((call) => {
            const phoneNumber =
              call.direction === "inbound" ? call.from : call.to;
            return (
              <li key={call.id}>
              {call.direction === "inbound" ? (
                <CallInboundIcon />
              ) : (
                <CallOutboundIcon />
              )}
              <span>From {call.from}</span>

              <span>To {call.to}</span>

              <span>Via {call.via} </span>

              <span>Duration {secondsToMinutes(call.duration)} minutes</span>

              <span> Call Type {call.call_type}</span>

              <span style={{ color: "orange" }}>
                {" "}
                ARCHIVE {call.is_archived}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArchivedPhoneCallsPage;
