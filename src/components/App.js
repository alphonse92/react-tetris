import React from 'react';
import TimerComponent from './timer/Timer';
import { GameContainer } from './gameContainer/GameContainer';

import './app.sass'

function App() {

  return (
    <TimerComponent>
      <GameContainer />
    </TimerComponent>
  )
}

export default App;
