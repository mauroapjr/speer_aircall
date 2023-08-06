import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { getCalls } from "../util/api";

import Header from "./Header.jsx";
import CallInboundIcon from "./CallInboundIcon";
import CallOutboundIcon from "./CallOutboundIcon";
import PhoneCallCountIcon from "./PhoneCallCountIcon"; 

const App = () => {
  const [calls, setCalls] = useState([]);
  const [phoneCallCounts, setPhoneCallCounts] = useState({});

  useEffect(() => {
    // Fetch the list of calls from the API when the component mounts
    getCalls()
      .then((response) => {
        setCalls(response.data);
        setPhoneCallCounts(countPhoneCalls(response.data));
      })
      .catch((error) => console.error(error));
  }, []);

  const secondsToMinutes = (seconds) => {
    return Math.floor(seconds / 60);
  };

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

  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>

      <h3>Activity Feed</h3>
      <ul>
        {calls.map((call) => {
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
              <span>Via {call.via}</span>
              <span>{secondsToMinutes(call.duration)} minutes</span>
              <span> Call Type {call.call_type}</span>
              <PhoneCallCountIcon count={phoneCallCounts[phoneNumber]} />
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
