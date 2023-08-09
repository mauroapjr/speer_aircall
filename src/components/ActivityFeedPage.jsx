import React, { useState } from "react";
import CallCard from "./CallCard";
import { Button } from "react-bootstrap";

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
      <h2 className="m-2">Activity Feed</h2>
      <ul>
        {currentCalls.map((call) => (
          <CallCard key={call.id} call={call} context="feed" />
        ))}
      </ul>
      
      <div>
        {Array.from({ length: Math.ceil(unarchivedCalls.length / itemsPerPage) }, (_, index) => (
          <Button className="me-2" key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeedPage;

