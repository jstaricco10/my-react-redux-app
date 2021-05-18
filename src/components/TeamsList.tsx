import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem,
  ListItemText,
  Divider,
  List,
  MenuItem,
  Select,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { Team, Player } from '../helpers/interfaces';
import * as teamActions from '../redux/actions/teamActions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TeamsList() {
  const dispatch = useDispatch();
  const teams: Team[] = useSelector((state: { teams: Team[] }) => state.teams);
  const players: Player[] = useSelector(
    (state: { players: Player[] }) => state.players
  );
  const classes = useStyles();

  const handleSelectorChange = (event: any) => {
    const playerToAddId = event.target.value;
    const teamIdToAdd = event.target.name;
    const filteredTeams = teams.filter((t) => t.id === teamIdToAdd);
    const filteredPlayers = players.filter((p) => p.id === playerToAddId);
    if (filteredTeams.length > 0 && filteredPlayers.length > 0) {
      const newTeamPlayers = [...filteredTeams[0].players, filteredPlayers[0]];
      const newTeam = {
        ...filteredTeams[0],
        players: newTeamPlayers,
        numberOfPlayers: filteredTeams[0].numberOfPlayers + 1,
      };
      dispatch(teamActions.addPlayerToTeam(newTeam, filteredPlayers[0]));
    }
  };

  return (
    <div className={classes.root}>
      TEAMS LIST
      <List>
        <Divider />
        {teams.map((team: Team) => {
          return (
            <>
              <ListItem button>
                <ListItemText>
                  {team.name} | {team.stadium} | Number of Players:{' '}
                  {team.numberOfPlayers} |{' '}
                  {format(team.dateofbirth, 'MM/dd/yyyy')} |
                </ListItemText>
                <Select
                  name={team.id}
                  value={players}
                  onChange={handleSelectorChange}
                >
                  {players.map((player: Player) => {
                    const ps = team.players.filter(
                      (p: Player) => p.id === player.id
                    ).length;
                    if (ps < 1) {
                      return (
                        <MenuItem value={player.id}>
                          {player.name} {player.lastname}
                        </MenuItem>
                      );
                    }
                  })}
                </Select>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}
