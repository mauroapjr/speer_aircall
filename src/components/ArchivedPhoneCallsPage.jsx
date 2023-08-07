import React from "react";

const ArchivedPhoneCallsPage = ({ calls }) => {
  const archivedCalls = calls.filter((call) => call.is_archived);

  return (
    <div>
      <h2>Archived Phone Calls</h2>
      <ul>
        {archivedCalls.map((call) => (
          <li key={call.id}>
            <p>From: {call.from}</p>
            <p>To: {call.to}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedPhoneCallsPage;
