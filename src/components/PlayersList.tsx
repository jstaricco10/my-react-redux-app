import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import * as playerActions from '../redux/actions/playerActions';
import { useSelector, useDispatch } from 'react-redux';

interface Player {
  id: number;
  name: string;
  lastname: string;
  age: number;
  dateofbirth: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const PlayersList: React.FC = () => {
  const dispatch = useDispatch();
  const players: Player[] = useSelector(
    (state: { players: Player[] }) => state.players
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <Divider />
        {players.map((player: Player) => {
          return (
            <>
              <ListItem button>
                <ListItemText>
                  {player.name} {player.lastname} | {player.age} |{' '}
                  {player.dateofbirth} |
                </ListItemText>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );
};

export default PlayersList;
