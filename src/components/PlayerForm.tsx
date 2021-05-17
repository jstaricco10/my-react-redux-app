import React, { useState } from 'react';
import nextId from 'react-id-generator';
import * as playerActions from '../redux/actions/playerActions';
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  FormGroup,
  Button,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { calculateAge } from '../helpers/fns';

export default function PlayerForm() {
  const dispatch = useDispatch();
  const [player, setPlayer] = useState({
    id: '',
    name: '',
    lastname: '',
    age: 21,
    dateofbirth: new Date(1999, 6, 16),
  });

  const handleChange = (event: any) =>
    setPlayer({ ...player, [event.target.name]: event.target.value });
  function handleDateChange(date: Date) {
    console.log(date);
    const newAge = calculateAge(date);
    if (newAge < 18) {
      alert('Invalid Date, player age must be > than 18');
      return;
    }
    setPlayer({ ...player, dateofbirth: date, age: newAge });
  }

  const addPlayer = () => {
    const newId = nextId('test-id-');
    const newPlayer = { ...player, id: newId };
    if (!newPlayer.name) return alert('Player name is required');
    if (!newPlayer.lastname) return alert('Player lastname is required');
    dispatch(playerActions.createPlayerSuccess(newPlayer));
  };

  return (
    <>
      <FormGroup>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            name="name"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input
            name="lastname"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Date of Birth</InputLabel>
          <DatePicker
            selected={player.dateofbirth}
            onChange={handleDateChange}
          />
        </FormControl>
        <FormControl></FormControl>
        <FormControl>
          <InputLabel>Age {player.age}</InputLabel>
          <br />
          <br />
          <FormHelperText id="my-helper-text">
            Age must be higher or equal to 18
          </FormHelperText>
        </FormControl>
      </FormGroup>
      <Button color="secondary" onClick={addPlayer} variant="outlined">
        <InputLabel>Add New Player</InputLabel>
      </Button>
    </>
  );
}
