

import React, { useEffect }from "react";
import { secondsToMinutes, countPhoneCalls } from "../util/helpers";

const ActivityFeedPage = ({ calls }) => {
  const unarchivedCalls = calls ?? [];
 

  return (
    <div>
      <h3>Activity Feed</h3>
      <ul>
        {unarchivedCalls.map((call) => (
          <li key={call.id} className="call-container">
           
            <span>From {call.from}</span>
                 <span>To {call.to}</span>
                 <span>Via {call.via}</span>
                 <span>Duration {secondsToMinutes(call.duration)} minutes</span>
                 <span>Call Type {call.call_type}</span>
                 <span style={{ color: "orange" }}>
                   ARCHIVE {call.is_archived}
                 </span>
                 <span style={{ color: "blue" }}>
                   Call Time {call.created_at}
                 </span>
                 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeedPage;



