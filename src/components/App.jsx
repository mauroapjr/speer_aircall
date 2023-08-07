import React, { useState } from "react";
import Header from "./Header.jsx";
import AllPhoneCallsPage from "./AllPhoneCallsPage";
import ArchivedPhoneCallsPage from "./ArchivedPhoneCallsPage";
import CallInbound from "./CallInbound";

const App = () => {
  const [currentTab, setCurrentTab] = useState("all");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <div className="container-view">
          Some activities should be here
          <ul>
            <button onClick={() => handleTabChange("all")}>All Calls</button>
            <button onClick={() => handleTabChange("archived")}>Archived Calls</button>
          </ul>
        </div>

        <h3>Activity Feed</h3>

        {currentTab === "all" ? (
          <AllPhoneCallsPage />
        ) : (
          <ArchivedPhoneCallsPage />
        )}

        {currentTab === "all" && <CallInbound />}
      </div>
    </div>
  );
};

export default App;
