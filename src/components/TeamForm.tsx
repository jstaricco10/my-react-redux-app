import React from 'react';
import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Button,
} from '@material-ui/core';

export default function TeamForm() {
  return (
    <>
      <FormGroup>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input id="my-input-name" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel>Stadium</InputLabel>
          <Input id="my-input-stadium" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel>Date of Fundation</InputLabel>
          <Input id="my-input-birth" aria-describedby="my-helper-text" />
        </FormControl>
      </FormGroup>
      <Button color="secondary" variant="outlined">
        <InputLabel>Add New Player</InputLabel>
      </Button>
    </>
  );
}
