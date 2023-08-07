// CallInbound.jsx
import React, { useEffect, useState } from "react";
import { getCalls } from "../util/api";
import { secondsToMinutes } from "../util/helpers";

const CallInbound = () => {
  const [calls, setCalls] = useState([]);
  const [phoneCallCounts, setPhoneCallCounts] = useState({});
  const [lastCallIndex, setLastCallIndex] = useState(2);

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
      console.log("PHONE CALL", calls);
      if (phoneCallCounts[phoneNumber]) {
        phoneCallCounts[phoneNumber]++;
      } else {
        phoneCallCounts[phoneNumber] = 1;
      }
    }
    return phoneCallCounts;
  };

  const loadMoreCalls = () => {
    setLastCallIndex((prevIndex) => (prevIndex + 3) % calls.length);
  };

  return (
    <div>
      <ul>
        {calls.map((call, index) => {
          if (index >= lastCallIndex && index < lastCallIndex + 3) {
            const phoneNumber = call.direction === "inbound" ? call.from : call.to;
            return (
              <li key={call.id} className="call-container">
                <span>From {call.from}</span>
                <span>To {call.to}</span>
                <span>Via {call.via}</span>
                <span>Duration {secondsToMinutes(call.duration)} minutes</span>
                <span>Call Type {call.call_type}</span>
                <span style={{ color: "orange" }}>ARCHIVE {call.is_archived}</span>
                <span style={{ color: "blue" }}>Call Time {call.created_at}</span>
                {Object.keys(phoneCallCounts).map((phoneNumber) => (
                  <span key={phoneNumber}>
                    Phone Number: {phoneNumber}, Count: {phoneCallCounts[phoneNumber]}
                  </span>
                ))}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <button onClick={loadMoreCalls}>Load More Calls</button>
    </div>
  );
};

export default CallInbound;
