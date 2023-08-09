import React, { useState } from "react";
import CallCard from "./CallCard";
import { Button } from "react-bootstrap";

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
      <h2 className="m-2">Archived Phone Calls</h2>
      <ul>
        {currentCalls.map((call) => (
          <CallCard key={call.id} call={call} context="archived"/>
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


