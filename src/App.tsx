// import reactLogo from "./assets/react.svg";
import GameGrid from "./components/GameGrid";
import LeaderBoard from "./components/LeaderBoard";
import { score } from "./types/gameTypes";

import "./App.css";

function App() {
  const scores: score[] = [{ user: "Lion", score: 2 }];

  const robotPosition = {
    x: 0,
    y: 4,
  };

  return (
    <>
      <div>
        <h1>Robot Game</h1>
        <LeaderBoard scores={scores} />
        <GameGrid
          gridSize={5}
          robotDirection={90}
          robotPosition={robotPosition}
        />
      </div>
    </>
  );
}

export default App;
