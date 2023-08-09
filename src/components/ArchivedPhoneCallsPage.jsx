import React, { useState } from "react";
import CallCard from "./CallCard";
import { updateCall } from "../util/api";
import { Button } from "react-bootstrap";
import UnarchiveCallButton from "./UnarchiveCallButton";

const ArchivedPhoneCallsPage = ({ calls, setCalls, onUnarchive }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 
  
  const archivedCalls = calls.filter((call) => call.is_archived);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCalls = archivedCalls.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleUnarchive = (callId) => {
    const updatedCalls = calls.map((call) =>
      call.id === callId ? { ...call, is_archived: false } : call
    );
    updateCall(callId, { is_archived: false })
    .then(() => {
      console.log(`Call ID ${callId} unarchived successfully!`);
      setCalls(updatedCalls);
    })
    .catch((error) => {
      console.error(`Error unarchiving call ID ${callId}:`, error);
    });
};

  return (
    <div>
      <h2 className="m-2">Archived Phone Calls</h2>    
      <ul>
        {currentCalls.map((call) => (
          <div key={call.id}>
            <CallCard call={call} context="archived" onUnarchive={handleUnarchive} />
            <UnarchiveCallButton call={call} onUnarchive={handleUnarchive} />
          </div>
        ))}
      </ul>
      
      <div className="count-pages-button">
        {Array.from({ length: Math.ceil(archivedCalls.length / itemsPerPage) }, (_, index) => (
          <Button className="me-2" variant="primary" key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ArchivedPhoneCallsPage;


