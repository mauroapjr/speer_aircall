import React, { useState, useEffect } from "react";
import { getCalls } from "../util/api";
import { countPhoneCalls } from "../util/helpers";
import CallCard from "./CallCard";

const ActivityDetailPage = ({ calls, setCalls }) => {
  const [phoneCallCounts, setPhoneCallCounts] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    getCalls()
      .then((response) => {
        setCalls(response.data);
        setPhoneCallCounts(countPhoneCalls(response.data));
        console.log("SET CALLS", response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  const unarchivedCalls = calls.filter((call) => !call.is_archived);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCalls = unarchivedCalls.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h3>Inbox</h3>
      <ul>
        {currentCalls.map((call) => (
          <CallCard key={call.id} call={call} context="detail" />
        ))}
      </ul>

      <div>
        {Array.from(
          { length: Math.ceil(unarchivedCalls.length / itemsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default ActivityDetailPage;
