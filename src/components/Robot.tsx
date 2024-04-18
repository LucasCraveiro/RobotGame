import React from "react";
import { RobotProps } from "../types/gameTypes";

const Robot: React.FC<RobotProps> = ({ direction }) => {
  const robotStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "blue",
    position: "absolute",
    transform: `rotate(${direction}deg)`,
    transition: "left 0.5s, top 0.5s, transform 0.5s",
  };

  return <div style={robotStyle}></div>;
};

export default Robot;
