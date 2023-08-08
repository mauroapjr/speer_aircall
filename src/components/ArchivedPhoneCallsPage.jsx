import React, { useState } from "react";
import CallCard from "./CallCard";

const ArchivedPhoneCallsPage = ({ calls }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const archivedCalls = calls.filter((call) => call.is_archived);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCalls = archivedCalls.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h2>Archived Phone Calls</h2>
      <ul>
        {currentCalls.map((call) => (
          <CallCard key={call.id} call={call} />
        ))}
      </ul>
      
      <div>
        {Array.from({ length: Math.ceil(archivedCalls.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArchivedPhoneCallsPage;


