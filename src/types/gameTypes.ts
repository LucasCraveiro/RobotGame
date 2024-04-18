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

export type gameGridType = {
  gridSize: number;
  robotPosition: robotPosition;
  robotDirection: number;
};

export type RobotProps = {
  direction: number;
};
