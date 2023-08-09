import React, { useState, useEffect } from "react";
import { getCalls, updateCall } from "../util/api";
import { countPhoneCalls } from "../util/helpers";
import { Button } from "react-bootstrap";
import ArchiveCallButton from "./ArchiveCallButton";
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


    const handleArchive = (callId) => {
      const updatedCalls = calls.map((call) =>
        call.id === callId ? { ...call, is_archived: true } : call
      );
      updateCall(callId, { is_archived: true })
      .then(() => {
        console.log(`Call ID ${callId} archived successfully!`);
        setCalls(updatedCalls);
      })
      .catch((error) => {
        console.error(`Error archiving call ID ${callId}:`, error);
      });
  };

  return (
    <div>
      <h2 className="m-2">Inbox</h2>
      <ul>
        {currentCalls.map((call) => (
          <div key={call.id}>
            <CallCard call={call} context="detail" onArchive={handleArchive} />
            {!call.is_archived && <ArchiveCallButton call={call} onArchive={handleArchive} />}
          </div>
        ))}
      </ul>

      <div>
      {Array.from(
          { length: Math.ceil(unarchivedCalls.length / itemsPerPage) },
          (_, index) => (
            <Button className="me-2" key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default ActivityDetailPage;
