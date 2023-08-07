import React, { useEffect, useState } from "react";
import { getCalls } from "../util/api";
import Header from "./Header.jsx";

import CallInboundIcon from "./CallInboundIcon";
import CallOutboundIcon from "./CallOutboundIcon";
import AllPhoneCallsPage from "./AllPhoneCallsPage";
import ArchivedPhoneCallsPage from "./ArchivedPhoneCallsPage";
import PhoneCallCountIcon from "./PhoneCallCountIcon";

export const secondsToMinutes = (seconds) => {
  return Math.floor(seconds / 60);
};

const App = () => {
  const [calls, setCalls] = useState([]);
  const [phoneCallCounts, setPhoneCallCounts] = useState({});
  const [currentTab, setCurrentTab] = useState("all");
  const [callsToShow, setCallsToShow] = useState(3);

  useEffect(() => {
    // Fetch the list of calls from the API when the component mounts
    getCalls()
      .then((response) => {
        setCalls(response.data);
        setPhoneCallCounts(countPhoneCalls(response.data));
        console.log("SET CALLS", response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const countPhoneCalls = (calls) => {
    const phoneCallCounts = {};
    for (const call of calls) {
      const phoneNumber = call.direction === "inbound" ? call.from : call.to;
      if (phoneCallCounts[phoneNumber]) {
        phoneCallCounts[phoneNumber]++;
      } else {
        phoneCallCounts[phoneNumber] = 1;
      }
    }
    return phoneCallCounts;
  };

  const allCalls = calls;
  const archivedCalls = calls.filter((call) => call.is_archived);

  const loadMoreCalls = () => {
    setCallsToShow((prevCalls) => prevCalls + 3);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div className="container-view">
          Some activities should be here
          <ul>          
            <button onClick={() => setCurrentTab("all")}>All Calls</button>
            <button onClick={() => setCurrentTab("archived")}>Archived Calls</button>
          </ul>
        </div>

        <h3>Activity Feed</h3>

        {currentTab === "all" ? (
          <AllPhoneCallsPage calls={allCalls} />
        ) : (
          <ArchivedPhoneCallsPage calls={archivedCalls} />
        )}

        <ul>
        {calls.slice(0, callsToShow).map((call)  => {
            const phoneNumber =
              call.direction === "inbound" ? call.from : call.to;
            return (
              <li key={call.id} className="call-container">
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

                <span style={{ color: "blue" }}>
                  {" "}
                  Call Time {call.created_at}
                </span>
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
      </div>
    </div>
  );
};

export default App;
