import React from "react";
import { updateCall } from "../util/api";
import { Button } from "react-bootstrap";
import "../css/archiveButton.css";

const ArchiveButton = ({ calls, setCalls }) => {
  const handleArchiveAll = () => {
    const updatedCalls = calls.map((call) => ({ ...call, is_archived: true }));

    // Create an array to store the promises for archiving calls
    const archivePromises = updatedCalls.map((call) =>
      updateCall(call.id, { is_archived: true })
        .then(() => {
          console.log(`Call ID ${call.id} archived successfully!`);
          return call.id;
        })
        .catch((error) => {
          console.error(`Error archiving call ID ${call.id}:`, error);
          return null;
        })
    );

    // Wait for all promises to resolve using Promise.all
    Promise.all(archivePromises)
      .then((archivedCallIds) => {
        const successfulArchivedCallIds = archivedCallIds.filter(
          (id) => id !== null
        );
        if (successfulArchivedCallIds.length > 0) {
          console.log("All calls archived successfully!");
          setCalls(updatedCalls);
        } else {
          console.error("All calls failed to be archived.");
        }
      })
      .catch((error) => {
        console.error("Error archiving calls:", error);
      });
  };

  const handleUnarchiveAll = () => {
    const updatedCalls = calls.map((call) => ({ ...call, is_archived: false }));

    // Create an array to store the promises for unarchiving calls
    const unarchivePromises = updatedCalls.map((call) =>
      updateCall(call.id, { is_archived: false })
        .then(() => {
          console.log(`Call ID ${call.id} unarchived successfully!`);
          return call.id;
        })
        .catch((error) => {
          console.error(`Error unarchiving call ID ${call.id}:`, error);
          return null;
        })
    );

    // Wait for all promises to resolve using Promise.all
    Promise.all(unarchivePromises)
      .then((unarchivedCallIds) => {
        const successfulUnarchivedCallIds = unarchivedCallIds.filter(
          (id) => id !== null
        );
        if (successfulUnarchivedCallIds.length > 0) {
          console.log("All calls unarchived successfully!");
          setCalls(updatedCalls);
        } else {
          console.error("All calls failed to be unarchived.");
        }
      })
      .catch((error) => {
        console.error("Error unarchiving calls:", error);
      });
  };

  return (
    <div className="buttons-to-archive-calls mb-3">
      <Button className="me-2" variant="primary" onClick={handleArchiveAll}>
        Archive all Calls
      </Button>
      <Button className="me-2" variant="primary" onClick={handleUnarchiveAll}>
        Unarchive all Calls
      </Button>
    </div>
  );
};

export default ArchiveButton;
