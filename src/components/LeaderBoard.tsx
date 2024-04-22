import { scoresType } from "../types/gameTypes";
import "./LeaderBoard.css";

const LeaderBoard: React.FC<scoresType> = ({ scores }) => {
  const scoreList = Array.isArray(scores) ? scores : [];

  return (
    <div>
      <h2>Leaderboard</h2>
      {scoreList.length === 0 && <p>No scores yet</p>}
      {scoreList.length !== 0 && (
        <table className="leaderboard_table">
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {scoreList.map((score, index) => (
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
