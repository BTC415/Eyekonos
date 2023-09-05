import React from "react";
import ButtonPinSvg from "../assets/svgs/buttonpin.svg";
import PlusSvg from "../assets/svgs/plus.svg";

interface ISpinButtonProps {
  children: string | React.ReactNode;
  backgroundColor?: string;
  onClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  oneTimeButton?: boolean;
  border?: boolean;
  fontSize?: number;
  fontWeight?: string;
  borderRadius?: boolean;
  borderRadiusAmount?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  extraPrice?: boolean;
  plusVisible?: boolean;
  pinImgTop?: number;
  merchandiseTop?: number;
  hoverable?: boolean;
}

const SpinButton: React.FC<ISpinButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => { },
  disabled,
  fixedWidth,
  fontSize = 18,
  fontWeight = "normal",
  oneTimeButton,
  border = false,
  borderRadius = false,
  borderRadiusAmount = 19,
  paddingVertical = 30,
  paddingHorizontal = "initial",
  color = "#F0BB51",
  borderColor = "#F0BB51",
  borderWidth = 1,
  extraPrice = true,
  plusVisible = false,
  pinImgTop = 5,
  merchandiseTop = -7,
  hoverable = true,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const [localDisabled, setLocalDisabled] = React.useState(false);
  return (
    <div
      className={[
        "molecule-spinbutton",
        (disabled || localDisabled) && "molecule-spinbutton-disabled",
      ].join(" ")}
      onClick={() => {
        if (disabled !== true && localDisabled !== true) {
          onClick();
          if (oneTimeButton) {
            setLocalDisabled(true);
          }
        }
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{
        width: fixedWidth ? 100 : "100%",
        backgroundColor: backgroundColor,
        boxShadow:
          isHover && hoverable
            ? "0 0 2px 2px #0066FFFF, 0 0 6px 6px #F0BB51FF"
            : "0px 0px 20px transparent",
        textAlign: `center`,
        paddingTop: 3,
        paddingBottom: 3,
        cursor: "pointer",
        borderRadius: borderRadius ? borderRadiusAmount : 0,
        color: color,
      }}
    >
      <div
        style={{
          borderTop: border ? `${borderWidth}px solid ${borderColor}` : "0px",
          borderBottom: border
            ? `${borderWidth}px solid ${borderColor}`
            : "0px",
          paddingTop: paddingVertical - 3,
          paddingBottom: paddingVertical - 3,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          marginLeft: 15,
          marginRight: 15,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 15,
        }}
      >
        {plusVisible && (
          <div
            style={{
              backgroundColor: "#0066FF",
              width: 40,
              height: 40,
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={PlusSvg} width={25} height={25} />
          </div>
        )}
        <span
          style={{
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            display: "flex",
          }}
        >
          {children}
        </span>
      </div>
      <div
        className="molecule-spinbutton__pinimg"
        style={{
          top: pinImgTop,
        }}
      >
        <img src={ButtonPinSvg} width={110} />
      </div>
      {!extraPrice && (<div
        className="molecule-spinbutton__dot"
        style={{
          marginTop: merchandiseTop ,
        }}
      />)}
      {!extraPrice && (
        <div
          className="molecule-spinbutton__pricenot"
          style={{
            marginTop: merchandiseTop - 10,
            right: -45,
            fontSize: 24,
          }}
        >
          $99
        </div>
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__dot"
          style={{
            marginTop: merchandiseTop - 20,
          }}
        />
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__price"
          style={{
            marginTop: merchandiseTop - 25,
            fontSize: 22,
          }}
        >
          $99
        </div>
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__extraprice"
          style={{
            marginTop: merchandiseTop - 35,
          }}
        >
          $235
        </div>
      )}
    </div>
  );
};

export default SpinButton;
