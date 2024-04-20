import star from "../assets/star.svg";
import treasure from "../assets/treasure.svg";
import { TargetImg } from "../types/gameTypes";

const Target: React.FC<TargetImg> = ({ img }) => {
  const targetStyle: React.CSSProperties = {
    backgroundImage: `url('../assets/${img}.svg')`,
    width: "50px",
    height: "50px",
    position: "absolute",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imgStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
  };

  return (
    <div style={targetStyle}>
      {img === "star" ? (
        <img src={star} alt="star" style={imgStyle} />
      ) : (
        <img src={treasure} alt="treasure" style={imgStyle} />
      )}
    </div>
  );
};

export default Target;
