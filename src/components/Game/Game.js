import React from 'react';

function Game(props) {
  const { game } = props;
  console.log(game);
  return <div>This is {game.name}</div>;
}

export default Game;
