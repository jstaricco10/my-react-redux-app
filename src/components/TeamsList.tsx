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
      const team = filteredTeams[0];
      const player = filteredPlayers[0];
      const newTeamPlayersExtra = [...team.players, player];
      const newTeamPlayersDeleted = team.players.filter(
        (p) => p.id !== player.id
      );
      const newTeamWithExtraPlayer = {
        ...team,
        players: newTeamPlayersExtra,
        numberOfPlayers: team.numberOfPlayers + 1,
      };
      const newTeamWithPlayerDeleted = {
        ...team,
        players: newTeamPlayersDeleted,
        numberOfPlayers: team.numberOfPlayers - 1,
      };
      // tenemos que checkear ahora si el player esta en el team de antes
      const addPlayerToTeam =
        team.players.filter((p: Player) => p.id === player.id).length > 0
          ? false
          : true;
      addPlayerToTeam
        ? dispatch(teamActions.addPlayerToTeam(newTeamWithExtraPlayer, player))
        : dispatch(
            teamActions.deletePlayerFromTeam(newTeamWithPlayerDeleted, player)
          );
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
                    return team.players.filter(
                      (p: Player) => p.id === player.id
                    ).length > 0 ? (
                      <MenuItem
                        value={player.id}
                        style={{ backgroundColor: '#b3fcbc' }}
                      >
                        {player.name} {player.lastname}
                      </MenuItem>
                    ) : (
                      <MenuItem
                        value={player.id}
                        style={{ backgroundColor: '#ffabc2' }}
                      >
                        {player.name} {player.lastname}
                      </MenuItem>
                    );
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
