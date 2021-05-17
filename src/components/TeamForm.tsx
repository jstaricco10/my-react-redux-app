import React, { useState } from 'react';
import nextId from 'react-id-generator';
import * as teamActions from '../redux/actions/teamActions';
import {
  FormControl,
  Input,
  InputLabel,
  FormGroup,
  Button,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { Team } from '../helpers/interfaces';

export default function TeamForm() {
  const dispatch = useDispatch();
  const [team, setTeam] = useState({
    id: '',
    name: '',
    stadium: '',
    players: [],
    dateofbirth: new Date(1891, 6, 16),
    numberOfPlayers: 0,
  });

  const teams: Team[] = useSelector((state: { teams: Team[] }) => state.teams);

  const handleChange = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setTeam({ ...team, [event.target.name]: event.target.value });
    console.log(team);
  };

  function handleDateChange(date: Date) {
    console.log(date);
    setTeam({ ...team, dateofbirth: date });
    console.log(team);
  }

  const addTeam = () => {
    const newId = nextId('test-id-');
    let validTeam = true;
    const newTeam = { ...team, id: newId };
    teams.map((team) => {
      if (team.stadium === newTeam.stadium) validTeam = false;
    });
    if (!validTeam) {
      alert('Invalid Team, stadium name already exists');
      return;
    }
    if (!newTeam.name) return alert('Team name is required');
    if (!newTeam.stadium) return alert('Team stadium is required');
    dispatch(teamActions.createTeamSuccess(newTeam));
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
          <InputLabel>Stadium</InputLabel>
          <Input
            name="stadium"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Date of Fundation</InputLabel>
          <DatePicker selected={team.dateofbirth} onChange={handleDateChange} />
        </FormControl>
        <br />
      </FormGroup>
      <Button color="secondary" onClick={addTeam} variant="outlined">
        <InputLabel>Add New Team</InputLabel>
      </Button>
    </>
  );
}
