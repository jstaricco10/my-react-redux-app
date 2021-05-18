import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Player } from '../helpers/interfaces';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PlayersList() {
  const players: Player[] = useSelector(
    (state: { playersData: { players: Player[] } }) => state.playersData.players
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      PLAYERS LIST
      <List>
        <Divider />
        {players.map((player: Player) => {
          return (
            <>
              <ListItem button key={player.id}>
                <ListItemText>
                  {player.name} {player.lastname} | {player.age} |{' '}
                  {format(player.dateofbirth, 'MM/dd/yyyy')} |
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
}
