import React, { useState, useEffect } from "react";
import { getCalls } from "../util/api";
import Header from "./Header";
import ActivityFeedPage from "./ActivityFeedPage";
import ActivityDetailPage from "./ActivityDetailPage";
import ArchivedPhoneCallsPage from "./ArchivedPhoneCallsPage";
import ArchiveButton from "./ArchiveButton";

import 'bootstrap/dist/css/bootstrap.min.css';

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
  const archivedCalls = calls.filter((call) => call.is_archived);

  return (
    <div>
      <div className="container">
        <Header />
        <div className="container-view">
          <ul>
            <button onClick={() => handleTabChange("all")}>
              Activity Feed
            </button>
            <button onClick={() => handleTabChange("archived")}>
              Archived Calls
            </button>
            <button onClick={() => setCurrentTab("detail")}>INBOX</button>
            <ArchiveButton calls={calls} setCalls={setCalls} />
          </ul>
        </div>

        {currentTab === "all" ? (
          <ActivityFeedPage calls={unarchivedCalls} />
        ) : currentTab === "archived" ? (
          <ArchivedPhoneCallsPage calls={archivedCalls} />
        ) : (
          <ActivityDetailPage calls={unarchivedCalls} setCalls={setCalls} />
        )}
      </div>
    </div>
  );
};

export default App;
