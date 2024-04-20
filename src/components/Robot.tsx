import Robot_1 from "../assets/robot_1.svg";
import Robot_2 from "../assets/robot_2.svg";
import Robot_3 from "../assets/robot_3.svg";

import { RobotProps } from "../types/gameTypes";

const Robot: React.FC<RobotProps> = ({ direction, img }) => {
  const robotStyle: React.CSSProperties = {
    display: "flex",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    transform: `rotate(${direction}deg)`,
    transition: "left 0.5s, top 0.5s, transform 0.5s",
  };

  if (img === "robot_1") {
    return (
      <div style={robotStyle}>
        <img src={Robot_1} alt="Robot" />
      </div>
    );
  } else if (img === "robot_2") {
    return (
      <div style={robotStyle}>
        <img src={Robot_2} alt="Robot" />
      </div>
    );
  } else if (img === "robot_3") {
    return (
      <div style={robotStyle}>
        <img src={Robot_3} alt="Robot" />
      </div>
    );
  }
};

export default Robot;
