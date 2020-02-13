
import React from 'react';
import './GridCell.sass'
const GridCell = props => {
  const { x, y, printCoordinates} = props
  const size = !props.size ? 10 : props.size
  const string = printCoordinates ? `${x},${y}` : ""
  const style = {
    height: `${size}px`,
    width: `${size}px`,
    minWidth: `${size}px`,
    borderRight: '1px solid',
    borderBottom: '1px solid',
    borderTop: `${(y === 0 ? "1" : "0")}px solid`,
    borderLeft: `${x === 0 ? "1" : "0"}px solid`
  }

  return <div style={style} className="grid-cell">{string}</div>;
}

export {
  GridCell
}