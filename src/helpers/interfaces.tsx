export interface Player {
  id: string;
  name: string;
  lastname: string;
  age: number;
  dateofbirth: Date;
}

export interface Team {
  id: string;
  name: string;
  stadium: string;
  players: Player[];
  dateofbirth: Date;
  numberOfPlayers: number;
}
