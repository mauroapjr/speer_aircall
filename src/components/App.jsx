import React, { useState, useEffect } from "react";
import { getCalls, updateCall } from "../util/api";
import Header from "./Header";
import ActivityFeedPage from "./ActivityFeedPage";
import ActivityDetailPage from "./ActivityDetailPage";
import ArchivedPhoneCallsPage from "./ArchivedPhoneCallsPage";
import ArchiveButton from "./ArchiveButton";
import { Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [calls, setCalls] = useState([]);
  const unarchivedCalls = calls.filter((call) => !call.is_archived);
  const archivedCalls = calls.filter((call) => call.is_archived);
  console.log('CALLS', calls)

  useEffect(() => {
    getCalls()
      .then((response) => {
        setCalls(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
 
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
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
      <div className="container">
        <Header />
        <div className="container-buttons">
          <ul>
            <Button  className="me-2" onClick={() => handleTabChange("all")}>
              Activity Feed
            </Button>
            <Button  className="me-2" onClick={() => handleTabChange("archived")}>
              Archived Calls
            </Button>
            <Button  className="me-2" onClick={() => setCurrentTab("detail")}>Inbox</Button>
            
          </ul>
        </div>

        {currentTab === "all" ? (
          <ActivityFeedPage calls={unarchivedCalls} />
        ) : currentTab === "archived" ? (
          <ArchivedPhoneCallsPage calls={archivedCalls} />
        ) : (
          <ActivityDetailPage calls={unarchivedCalls} setCalls={setCalls} onArchive={handleArchive}/>
        )}
        <ArchiveButton calls={calls} setCalls={setCalls} />
      </div>
    </div>
  );
};

export default App;
