import React from 'react';
import { Link } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { Button, InputLabel } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const navAddresses = [
  { label: 'Players', route: '/players' },
  { label: 'Teams', route: '/teams' },
];

export default function Nav() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <ButtonGroup
            color="secondary"
            aria-label="outlined primary button group"
          >
            {navAddresses.map((ad) => (
              <Button key={ad.label}>
                <InputLabel>
                  <Link to={ad.route}>{ad.label}</Link>
                </InputLabel>
              </Button>
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </>
  );
}
