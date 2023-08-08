import React, { useState } from "react";
import CallCard from "./CallCard";

const ActivityFeedPage = ({ calls }) => {
  const unarchivedCalls = calls ?? [];
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCalls = unarchivedCalls.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h3>Activity Feed</h3>
      <ul>
        {currentCalls.map((call) => (
          <CallCard key={call.id} call={call} context="feed" />
        ))}
      </ul>
      
      <div>
        {Array.from({ length: Math.ceil(unarchivedCalls.length / itemsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeedPage;

