import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import LeaderBoard from "./components/LeaderBoard";
import { score } from "./types/gameTypes";
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaArrowUp,
} from "react-icons/fa6";

import "./App.css";

function App() {
  const scores: score[] = [{ user: "Lion", score: 2 }];
  const [robotPosition, setRobotPosition] = useState({ x: 2, y: 2 });
  const [targetPosition, setTargetPosition] = useState({ x: 4, y: 1 });
  const [robotDirection, setRobotDirection] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleRotateLeft = () => {
    setRobotDirection((prevDirection) => (prevDirection + 270) % 360);
  };

  const handleRotateRight = () => {
    setRobotDirection((prevDirection) => (prevDirection + 90) % 360);
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleMoveForward = () => {
    let deltaX = 0;
    let deltaY = 0;

    if (robotDirection === 0) {
      deltaY = -1;
    } else if (robotDirection === 90) {
      deltaX = 1;
    } else if (robotDirection === 270) {
      deltaX = -1;
    } else if (robotDirection === 180) {
      deltaY = 1;
    }

    const newX = robotPosition.x + deltaX;
    const newY = robotPosition.y + deltaY;

    if (newX < 0 || newX >= 5 || newY < 0 || newY >= 5) {
      // Trigger game over
      handleGameOver();
      return; // Exit the function early to prevent setting the new position
    }

    setRobotPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));
  };

  const generateRandomPosition = () => ({
    x: Math.floor(Math.random() * 5),
    y: Math.floor(Math.random() * 5),
  });

  const positionsAreEqual = (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ) => pos1.x === pos2.x && pos1.y === pos2.y;

  useEffect(() => {
    let newRobotPosition = generateRandomPosition();
    let newTargetPosition = generateRandomPosition();

    while (positionsAreEqual(newRobotPosition, newTargetPosition)) {
      newRobotPosition = generateRandomPosition();
      newTargetPosition = generateRandomPosition();
    }

    setRobotPosition(newRobotPosition);
    setTargetPosition(newTargetPosition);
  }, []);

  return (
    <>
      <div>
        <h1>Robot Game</h1>
        <LeaderBoard scores={scores} />
        {robotPosition !== null && targetPosition !== null && !gameOver && (
          <div>
            <GameGrid
              gridSize={5}
              robotDirection={robotDirection}
              robotPosition={robotPosition}
              targetPosition={targetPosition}
              onGameOver={handleGameOver}
            />
            <div className="buttons_wrapper">
              <button onClick={handleRotateLeft}>
                <FaArrowRotateLeft />
              </button>
              <button onClick={handleMoveForward}>
                <FaArrowUp />
              </button>
              <button onClick={handleRotateRight}>
                <FaArrowRotateRight />
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Display game over dialog when the game is over */}
      {gameOver && (
        <div className="game-over-dialog">
          <h2>Game Over</h2>
          {/* Add additional content or buttons for restarting the game */}
        </div>
      )}
    </>
  );
}

export default App;
