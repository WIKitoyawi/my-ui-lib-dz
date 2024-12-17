import React from 'react';
import { Button } from 'react-bootstrap';

function UpdateButton({ updateData }) {
  return (
    <Button onClick={updateData}>Update</Button>
  );
}

export default UpdateButton;
