import React, { useState } from 'react';
import TeamsList from './TeamsList';
import TeamForm from './TeamForm';
import { Button, InputLabel } from '@material-ui/core';

export default function TeamsPage() {
  const [activeForm, setActiveForm] = useState(false);
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setActiveForm(!activeForm);
        }}
      >
        <InputLabel>Team Form</InputLabel>
      </Button>
      {activeForm && <TeamForm />}
      <TeamsList />
    </>
  );
}
