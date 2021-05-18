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
  const [team, setTeam] = useState<Team>({
    id: '',
    name: '',
    stadium: '',
    players: [],
    dateofbirth: new Date(1891, 6, 16),
    numberOfPlayers: 0,
  });

  const teams: Team[] = useSelector(
    (state: { teamsData: { teams: Team[] } }) => state.teamsData.teams
  );

  const resetTeam = (team: Team) => {
    setTeam({
      id: '',
      name: '',
      stadium: '',
      players: [],
      dateofbirth: new Date(1891, 6, 16),
      numberOfPlayers: 0,
    });
  };

  const handleChange = (event: { target: { name: string; value: string } }) => {
    setTeam({ ...team, [event.target.name]: event.target.value });
  };

  function handleDateChange(date: Date) {
    setTeam({ ...team, dateofbirth: date });
  }

  const addTeam = () => {
    const newId = nextId('test-id-');
    let validTeam = true;
    const newTeam = { ...team, id: newId };
    teams.forEach((team) => {
      if (team.stadium === newTeam.stadium) validTeam = false;
    });
    if (!validTeam) {
      alert('Invalid Team, stadium name already exists');
      return;
    }
    if (!newTeam.name) return alert('Team name is required');
    if (!newTeam.stadium) return alert('Team stadium is required');
    dispatch(teamActions.createTeamSuccess(newTeam));
    resetTeam(team);
  };

  return (
    <>
      <FormGroup>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input
            value={team.name}
            name="name"
            aria-describedby="my-helper-text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <InputLabel>Stadium</InputLabel>
          <Input
            value={team.stadium}
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
