import React from "react";
import { Button } from "react-bootstrap";

const ArchiveCallButton = ({ call, onArchive }) => {
  const handleArchiveClick = () => {
    onArchive(call.id);
  };

  return (
    <Button variant="primary" onClick={handleArchiveClick}>
      Archive
    </Button>
  );
};

export default ArchiveCallButton;
