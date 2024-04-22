import { useEffect, useState } from "react";
import GameGrid from "./components/GameGrid";
import LeaderBoard from "./components/LeaderBoard";
import GameOver from "./components/GameOver";
import Timer from "./components/Timer";
import GameSetupForm from "./components/GameSetUpForm";
import Commands from "./components/Commands";

import { score } from "./types/gameTypes";

import "./App.css";

function App() {
  const [scores, setScores] = useState<score[]>([]);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [selectedRobot, setSelectedRobot] = useState<string>("robot_1");
  const [selectedTarget, setSelectedTarget] = useState<string>("star");
  const [robotPosition, setRobotPosition] = useState({ x: 2, y: 2 });
  const [targetPosition, setTargetPosition] = useState({ x: 4, y: 1 });
  const [robotDirection, setRobotDirection] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameOverMessage, setGameOverMessage] = useState<string>("");

  const handleReachTarget = () => {
    setScore((prevScore) => prevScore + 1);
    let newTargetPosition = generateRandomPosition();

    while (positionsAreEqual(newTargetPosition, robotPosition)) {
      newTargetPosition = generateRandomPosition();
    }
    setTargetPosition(newTargetPosition);
  };

  const handleRotateLeft = () => {
    setRobotDirection((prevDirection) => (prevDirection + 270) % 360);
  };

  const handleRotateRight = () => {
    setRobotDirection((prevDirection) => (prevDirection + 90) % 360);
  };

  const handleGameOver = () => {
    setGameOverMessage("Opps!! You crossed the border!!");
    setGameOver(true);
    setScore(0);
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
      handleGameOver();
      return;
    }

    setRobotPosition((prevPosition) => ({
      x: prevPosition.x + deltaX,
      y: prevPosition.y + deltaY,
    }));

    if (newX === targetPosition.x && newY === targetPosition.y) {
      handleReachTarget();
    }
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const generateRandomPosition = () => ({
    x: Math.floor(Math.random() * 5),
    y: Math.floor(Math.random() * 5),
  });

  const positionsAreEqual = (
    pos1: { x: number; y: number },
    pos2: { x: number; y: number }
  ) => pos1.x === pos2.x && pos1.y === pos2.y;

  const restartGame = () => {
    setGameOverMessage("");
    setScore(0);
    setGameOver(false);

    let newRobotPosition = generateRandomPosition();
    let newTargetPosition = generateRandomPosition();

    while (positionsAreEqual(newRobotPosition, newTargetPosition)) {
      newRobotPosition = generateRandomPosition();
      newTargetPosition = generateRandomPosition();
    }
    setRobotDirection(0);
    setRobotPosition(newRobotPosition);
    setTargetPosition(newTargetPosition);
  };

  const handleTimeOver = () => {
    setGameOverMessage("Time's Up");
    const finalScore = { user: username, score: score };

    setScores([{ ...finalScore }, ...scores]);
    setGameOver(true);
  };

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
      <h1>Robot Game</h1>
      <div className="main_wrapper">
        {robotPosition !== null && targetPosition !== null && !gameOver && (
          <>
            <div>
              {!gameStarted && (
                <GameSetupForm
                  username={username}
                  setUsername={setUsername}
                  selectedRobot={selectedRobot}
                  setSelectedRobot={setSelectedRobot}
                  selectedTarget={selectedTarget}
                  setSelectedTarget={setSelectedTarget}
                  handleStartGame={handleStartGame}
                />
              )}

              {!gameOver && gameStarted && (
                <>
                  <h3>Score: {score}</h3>
                  <Timer initialTime={60} onTimeOver={handleTimeOver} />
                </>
              )}
              {gameStarted && (
                <>
                  <GameGrid
                    gridSize={5}
                    robotDirection={robotDirection}
                    robotPosition={robotPosition}
                    targetPosition={targetPosition}
                    onGameOver={handleGameOver}
                    targetImg={selectedTarget}
                    robotImg={selectedRobot}
                  />
                  <Commands
                    handleRotateLeft={handleRotateLeft}
                    handleRotateRight={handleRotateRight}
                    handleMoveForward={handleMoveForward}
                  />
                </>
              )}
            </div>
            <LeaderBoard scores={scores} />
          </>
        )}
        {gameOver && (
          <GameOver message={gameOverMessage} restartGame={restartGame} />
        )}
      </div>
    </>
  );
}

export default App;
