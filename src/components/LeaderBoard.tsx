import { scoresType } from "../types/gameTypes";
import "./leaderBoard.css";

const LeaderBoard: React.FC<scoresType> = ({ scores }) => {
  return (
    <div>
      <h2>Leaderboard</h2>
      {scores.length === 0 && <p>No scores yet</p>}
      {scores.length !== 0 && (
        <table className="leaderboard_table">
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <tr key={index}>
                <td>{score.user}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeaderBoard;
