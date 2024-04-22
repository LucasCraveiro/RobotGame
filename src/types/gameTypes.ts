export type score = {
  user: string;
  score: number;
};

export type scoresType = {
  scores: score[] | [];
};

export type robotPosition = {
  x: number;
  y: number;
};

export type TargetPosition = {
  x: number;
  y: number;
};

export type gameGridType = {
  gridSize: number;
  robotPosition: robotPosition;
  robotImg: string;
  targetPosition: TargetPosition;
  targetImg: string;
  robotDirection: number;
  onGameOver: () => void;
};

export type RobotProps = {
  direction: number;
  img: string;
};

export type TargetImg = {
  img: string;
};

export type GameOverProps = {
  message: string;
  restartGame: () => void;
};

export type TimerProps = {
  initialTime: number;
  onTimeOver: () => void;
};

export type GameSetUpProps = {
  username: string;
  setUsername: (value: string) => void;
  selectedRobot: string;
  setSelectedRobot: (value: string) => void;
  selectedTarget: string;
  setSelectedTarget: (value: string) => void;
  handleStartGame: () => void;
};

export type CommandsProps = {
  handleRotateLeft: () => void;
  handleMoveForward: () => void;
  handleRotateRight: () => void;
};
