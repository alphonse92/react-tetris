
import React from 'react';
import { GridCell } from './GridCell';
import './GridRow.sass'

const GridRow = props => {

  const { y = 0, cols = 30, size = 5, printCoordinates } = props

  return (
    <div className="grid-row">
      {Array.from(Array(cols)).map((val, x) => <GridCell
        key={`${x},${y}`}
        printCoordiantes {...{ x, y, size, printCoordinates }} />)}
    </div>
  )
}

export { GridRow }