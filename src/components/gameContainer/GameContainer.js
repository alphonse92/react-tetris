import React, { useState, useEffect } from 'react';
import { Grid } from '../grid/Grid';
import { LeftSide } from './LeftSide';

import './GameContainer.sass'

function GameContainerComponent(props) {

  const { cols = 10, rows = 30 } = props
  const containerRef = React.createRef()
  const [cellSize, setCellSize] = useState(null)
  const updateCellSize = () =>    setCellSize(Math.floor(containerRef.current.offsetHeight / rows))
  useEffect(updateCellSize, [containerRef.current])
  return (
    <div ref={containerRef} className="game-container">
      <LeftSide />
      <Grid size={cellSize} cols={cols} rows={rows} />
      <LeftSide />
    </div>
  )
}

export {
  GameContainerComponent as GameContainer
}