import React from "react";
import { Button } from "react-bootstrap";

const UnarchiveCallButton = ({ call, onUnarchive }) => {
  const handleUnarchiveClick = () => {
    onUnarchive(call.id);
  };

  return (
    <Button className="m-2" variant="primary" onClick={handleUnarchiveClick}>
      Unarchive
    </Button>
  );
};

export default UnarchiveCallButton;