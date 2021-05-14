import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import * as teamActions from '../redux/actions/teamActions';
import { useSelector, useDispatch } from 'react-redux';

interface Team {
  id: number;
  name: string;
  stadium: string;
  players: [];
  dateofbirth: string;
  numberOfPlayers: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TeamList: React.FC = () => {
  const dispatch = useDispatch();
  const teams: Team[] = useSelector((state: { teams: Team[] }) => state.teams);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <List>
        <Divider />
        {teams.map((team: Team) => {
          return (
            <>
              <ListItem button>
                <ListItemText>
                  {team.name} | {team.stadium} | Number of Players:{' '}
                  {team.numberOfPlayers} | {team.dateofbirth} |
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

export default TeamList;
