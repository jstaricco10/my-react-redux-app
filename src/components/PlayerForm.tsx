import React from 'react';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  FormGroup,
  Button,
} from '@material-ui/core';

export default function PlayerForm() {
  return (
    <>
      <FormGroup>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input id="my-input-name" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input id="my-input-lastname" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel>Date of Birth</InputLabel>
          <Input id="my-input-birth" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel>Age</InputLabel>
          <Input id="my-input-age" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Age must be higher or equal to 18
          </FormHelperText>
        </FormControl>
      </FormGroup>
      <Button color="secondary" variant="outlined">
        <InputLabel>Add New Player</InputLabel>
      </Button>
    </>
  );
}
