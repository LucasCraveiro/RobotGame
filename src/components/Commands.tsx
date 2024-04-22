import { CommandsProps } from "../types/gameTypes";
import {
  FaArrowRotateLeft,
  FaArrowRotateRight,
  FaArrowUp,
} from "react-icons/fa6";

const Commands: React.FC<CommandsProps> = ({
  handleRotateLeft,
  handleMoveForward,
  handleRotateRight,
}) => {
  return (
    <div className="buttons_wrapper">
      <button onClick={handleRotateLeft}>
        <FaArrowRotateLeft />
      </button>
      <button onClick={handleMoveForward}>
        <FaArrowUp />
      </button>
      <button onClick={handleRotateRight}>
        <FaArrowRotateRight />
      </button>
    </div>
  );
};

export default Commands;
