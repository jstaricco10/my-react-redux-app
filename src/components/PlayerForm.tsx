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
import { Player } from '../helpers/interfaces';

export default function PlayerForm() {
  const dispatch = useDispatch();
  const [player, setPlayer] = useState<Player>({
    id: '',
    name: '',
    lastname: '',
    age: 21,
    dateofbirth: new Date(1999, 6, 16),
  });

  const resetPlayer = (player: Player) => {
    setPlayer({
      id: '',
      name: '',
      lastname: '',
      age: 21,
      dateofbirth: new Date(1999, 6, 16),
    });
  };

  const handleChange = (event: { target: { name: string; value: string } }) =>
    setPlayer({ ...player, [event.target.name]: event.target.value });
  function handleDateChange(date: Date) {
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
    resetPlayer(player);
  };

  return (
    <>
      <FormGroup id="team-form">
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            value={player.name}
            name="name"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Last Name</InputLabel>
          <Input
            value={player.lastname}
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
