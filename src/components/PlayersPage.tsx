import React, { useState } from 'react';
import PlayersList from './PlayersList';
import PlayerForm from './PlayerForm';
import { Button, InputLabel } from '@material-ui/core';

export default function PlayersPage() {
  const [activeForm, setActiveForm] = useState(false);
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => {
          setActiveForm(!activeForm);
        }}
      >
        <InputLabel>Player Form</InputLabel>
      </Button>
      {activeForm && <PlayerForm />}
      <PlayersList />
    </>
  );
}
