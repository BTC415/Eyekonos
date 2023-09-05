import React from "react";
import RightAngleSvg from "../assets/svgs/rightangle.svg";
import RightRectangleSvg from "../assets/svgs/rightrectangle.svg";

interface ICrobaProps {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

const Croba: React.FC<ICrobaProps> = ({
  text,
  width = 240,
  height = 240,
  fontSize = 24,
}) => {
  return (
    <div
      className="component-croba"
      style={{
        width: width,
        height: height,
      }}
    >
      <img
        src={RightAngleSvg}
        className="component-croba__angle"
        style={{
          left: 73 + (width - 240) / 2,
          top: 12 + (height - 240) / 5,
        }}
      />
      <span style={{
        fontSize: fontSize,
      }}>{text}</span>
    </div>
  );
};

export default Croba;
