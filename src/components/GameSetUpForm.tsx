import { GameSetUpProps } from "../types/gameTypes";
import star from "../assets/star.svg";
import treasure from "../assets/treasure.svg";
import Robot_1 from "../assets/robot_1.svg";
import Robot_2 from "../assets/robot_2.svg";
import Robot_3 from "../assets/robot_3.svg";

import "./GameSetUpForm.css";

const GameSetupForm: React.FC<GameSetUpProps> = ({
  username,
  setUsername,
  selectedRobot,
  setSelectedRobot,
  selectedTarget,
  setSelectedTarget,
  handleStartGame,
}) => {
  return (
    <div className="gameSetup_wrapper">
      <h4 className="name_heading">Enter your name</h4>
      <input
        type="text"
        placeholder="Username"
        className="username_input"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <h4>Choose your robot</h4>

      <div className="robot_wrapper">
        <img src={Robot_1} alt="Robot_1" />

        <input
          type="radio"
          id="robot_1"
          name="robot"
          value="robot_1"
          checked={selectedRobot === "robot_1"}
          onChange={() => setSelectedRobot("robot_1")}
        />
        <br />
        <img src={Robot_2} alt="Robot_2" />

        <input
          type="radio"
          id="robot_2"
          name="robot"
          value="robot_2"
          checked={selectedRobot === "robot_2"}
          onChange={() => setSelectedRobot("robot_2")}
        />
        <br />
        <img src={Robot_3} alt="Robot_3" />

        <input
          type="radio"
          id="robot_3"
          name="robot"
          value="robot_3"
          checked={selectedRobot === "robot_3"}
          onChange={() => setSelectedRobot("robot_3")}
        />
      </div>

      <h4>Choose your target</h4>

      <div className="target_wrapper">
        <img src={star} alt="star" />
        <input
          type="radio"
          id="star"
          name="target"
          value="star"
          checked={selectedTarget === "star"}
          onChange={() => setSelectedTarget("star")}
        />
        <br />
        <img src={treasure} alt="treasure" />

        <input
          type="radio"
          id="treasure"
          name="target"
          value="treasure"
          checked={selectedTarget === "treasure"}
          onChange={() => setSelectedTarget("treasure")}
        />
      </div>
      <button
        className="start_game"
        onClick={handleStartGame}
        disabled={!username}
      >
        Start Game
      </button>
    </div>
  );
};

export default GameSetupForm;
