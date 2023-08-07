import React, { useState, useEffect } from "react";
import { getCalls, archiveCalls } from "../util/api";
import Header from "./Header.jsx";
import AllPhoneCallsPage from "./AllPhoneCallsPage";
import ArchivedPhoneCallsPage from "./ArchivedPhoneCallsPage";
import CallInbound from "./ActivityDetailPage";
import InboxPage from "./InboxPage";
import ArchiveButton from "./ArchiveButton";

const App = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [calls, setCalls] = useState([]);

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

  const unarchivedCalls = calls.filter((call) => !call.is_archived);

  return (
    <div>
      <div className="container">
        <Header />
        <div className="container-view">
          Some activities should be here
          <ul>
            <button onClick={() => handleTabChange("all")}>All Calls</button>
            <button onClick={() => handleTabChange("archived")}>
              Archived Calls
            </button>
            <button onClick={() => setCurrentTab("inbox")}>Inbox</button>

            <ArchiveButton calls={calls} setCalls={setCalls} />
          </ul>
        </div>

        <h3>Activity Feed</h3>

        {currentTab === "all" ? (
          <AllPhoneCallsPage calls={calls} />
        ) : currentTab === "archived" ? (
          <ArchivedPhoneCallsPage calls={calls} />
        ) : (
          <InboxPage calls={unarchivedCalls} />
        )}

        {currentTab === "all" && <CallInbound />}
      </div>
    </div>
  );
};

export default App;
