
import React from 'react';
import './Grid.sass'
import { GridRow } from './GridRow';


const Grid = (props) => {
  const { cols = 10, rows = 30, size = 5, printCoordinates } = props
  const matrix = Array.from(Array(rows)).map((val, y) => <GridRow size={size}{...{ cols, rows, size, printCoordinates }} />)
  const component = (
    <div className="grid-game">
      {matrix}
    </div>
  );

  return component

}



export { Grid }