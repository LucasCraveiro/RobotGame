import { GameOverProps } from "../types/gameTypes";
import "./GameOver.css";

const GameOver: React.FC<GameOverProps> = ({ message, restartGame }) => {
  return (
    <div className="gameover_container">
      <h2>Game Over</h2>
      <h5>{message}</h5>
      <button onClick={restartGame}>Play Again</button>
    </div>
  );
};

export default GameOver;
