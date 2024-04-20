import React from "react";
import { gameGridType } from "../types/gameTypes";
import "./gamegrid.css";
import Robot from "./Robot";
import Target from "./Target";

const GameGrid: React.FC<gameGridType> = ({
  gridSize,
  robotPosition,
  robotDirection,
  targetPosition,
}) => {
  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize; x++) {
        row.push({ x, y });
      }
      grid.push(row);
    }
    return grid;
  };

  return (
    <div
      className="grid_wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridSize}, 50px)`,
        gridTemplateRows: `repeat(${gridSize}, 50px)`,
      }}
    >
      {renderGrid().map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map(({ x, y }) => (
            <div className="single_cell" id={`${x}-${y}`} key={`${x}-${y}`}>
              {robotPosition.x === x && robotPosition.y === y && (
                <Robot direction={robotDirection} img="robot_3" />
              )}
              {targetPosition.x === x && targetPosition.y === y && (
                <Target img="star" />
              )}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default GameGrid;
