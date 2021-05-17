// eslint-disable-next-line import/no-anonymous-default-export
export default {
  players: [
    {
      id: '1',
      name: 'Jope',
      lastname: 'Algorta',
      age: 21,
      dateofbirth: new Date(1999, 6, 16),
    },
    {
      id: '2',
      name: 'Juan',
      lastname: 'Perez',
      age: 22,
      dateofbirth: new Date(1998, 6, 16),
    },
    {
      id: '3',
      name: 'Joaquin',
      lastname: 'Fernandez',
      age: 21,
      dateofbirth: new Date(1999, 6, 16),
    },
  ],
  teams: [
    {
      id: '1',
      name: 'Manya',
      stadium: 'CDS',
      dateofbirth: new Date(1891, 8, 16),
      players: [
        {
          id: '1',
          name: 'Jope',
          lastname: 'Algorta',
          age: 21,
          dateofbirth: new Date(1999, 6, 16),
        },
      ],
      numberOfPlayers: 1,
    },
    {
      id: '2',
      name: 'Nacional',
      stadium: 'GPC',
      dateofbirth: new Date(1910, 8, 16),
      players: [],
      numberOfPlayers: 0,
    },
  ],
};
