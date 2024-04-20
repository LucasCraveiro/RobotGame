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
  targetPosition: TargetPosition;
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
