import React, { useState, useEffect } from "react";
import { getCalls } from "../util/api";
import { secondsToMinutes, countPhoneCalls } from "../util/helpers";

const ActivityDetailPage = ({ calls, setCalls }) => {
  const [phoneCallCounts, setPhoneCallCounts] = useState({});
  const [visibleCalls, setVisibleCalls] = useState(3); 

  useEffect(() => {
    getCalls()
      .then((response) => {
        setCalls(response.data);
        setPhoneCallCounts(countPhoneCalls(response.data));
        console.log("SET CALLS", response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const unarchivedCalls = calls.filter((call) => !call.is_archived);

  const loadMoreCalls = () => {
    setVisibleCalls((prevVisibleCalls) => prevVisibleCalls + 3); 
  };

  return (
    <div>
      <h3>Inbox</h3>
      <ul>
        {unarchivedCalls.slice(0, visibleCalls).map((call) => {
          const phoneNumber =
            call.direction === "inbound" ? call.from : call.to;
          return (
            <li key={call.id} className="call-container">
              <span>From {call.from}</span>
              <span>To {call.to}</span>
              <span>Via {call.via}</span>
              <span>Duration {secondsToMinutes(call.duration)} minutes</span>
              <span>Call Type {call.call_type}</span>
              <span style={{ color: "orange" }}>
                ARCHIVE {call.is_archived}
              </span>
              <span style={{ color: "blue" }}>Call Time {call.created_at}</span>
              {Object.keys(phoneCallCounts).map((phoneNumber) => (
                <span key={phoneNumber}>
                  Phone Number: {phoneNumber}, Count:{" "}
                  {phoneCallCounts[phoneNumber]}
                </span>
              ))}
            </li>
          );
        })}
      </ul>
      {visibleCalls < unarchivedCalls.length && (
        <div style={{ textAlign: "center" }}>
          <button onClick={loadMoreCalls}>Load More Calls</button>
        </div>
      )}
    </div>
  );
};

export default ActivityDetailPage;



