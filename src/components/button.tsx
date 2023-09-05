import React from "react";

interface IButtonProps {
  children: string | React.ReactNode;
  backgroundColor?: string;
  onClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  fixedHeight?: boolean;
  width?: number | string;
  height?: number;
  minWidth?: number | string;
  oneTimeButton?: boolean;
  border?: boolean;
  insideBorderDirection?: "HORIZONTAL" | "VERTICAL";
  fontSize?: number | string;
  fontWeight?: string;
  borderRadius?: boolean;
  borderRadiusAmount?: number;
  paddingVertical?: number;
  paddingVerticalOutside?: number;
  paddingHorizontal?: number;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  borderOutside?: boolean;
  borderOutsideColor?: string;
  hoverable?: boolean;
  marginOutside?: number;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  disabled,
  fixedWidth = false,
  fixedHeight = false,
  width = 160,
  height = 120,
  minWidth = "initial",
  fontSize = 18,
  fontWeight = "normal",
  oneTimeButton,
  border = false,
  insideBorderDirection = "HORIZONTAL",
  borderRadius = false,
  borderRadiusAmount = 19,
  paddingVertical = 30,
  paddingVerticalOutside = 3,
  paddingHorizontal = 20,
  color = "#F0BB51",
  borderColor = "#F0BB51",
  borderWidth = 1,
  borderOutside = false,
  borderOutsideColor = "#F0BB51",
  hoverable = true,
  marginOutside = 15,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const [localDisabled, setLocalDisabled] = React.useState(false);
  return (
    <div
      className={[
        "molecule-button",
        (disabled || localDisabled) && "molecule-button-disabled",
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
        width: fixedWidth ? width : "100%",
        // height: fixedHeight ? height : "100%",
        background: backgroundColor,
        boxShadow:
          isHover && !borderOutside && hoverable
            ? `0 0 2px 2px ${backgroundColor}, 0 0 6px 6px #F0BB51FF`
            : "0px 0px 20px transparent",
        textAlign: `center`,
        paddingTop: borderOutside ? 0 : paddingVerticalOutside,
        paddingBottom: borderOutside ? 0 : paddingVerticalOutside,
        cursor: hoverable ? "pointer" : "auto",
        borderRadius: borderRadius ? borderRadiusAmount : 0,
        color: color,
        border: borderOutside ? "4px solid " + borderColor : "",
        display: borderOutside ? "flex" : "block",
        justifyContent: borderOutside ? "center" : "initial",
        alignItems: borderOutside ? "center" : "initial",
        minWidth: minWidth,
        fontFamily : "InterBold"
      }}
    >
      <div
        style={{
          borderTop:
            border && insideBorderDirection === "HORIZONTAL"
              ? `${borderWidth}px solid ${borderColor}`
              : "0px",
          borderBottom:
            border && insideBorderDirection === "HORIZONTAL"
              ? `${borderWidth}px solid ${borderColor}`
              : "0px",
          borderLeft:
            border && insideBorderDirection === "VERTICAL"
              ? `${borderWidth}px solid ${borderColor}`
              : "0px",
          borderRight:
            border && insideBorderDirection === "VERTICAL"
              ? `${borderWidth}px solid ${borderColor}`
              : "0px",
          paddingTop: borderOutside ? 0 : paddingVertical - 3,
          paddingBottom: borderOutside ? 0 : paddingVertical - 3,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          marginLeft: marginOutside,
          marginRight: marginOutside,
          height: fixedHeight ? height : "initial",
          background: backgroundColor,
          borderRadius: !border && borderRadius ? borderRadiusAmount : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {typeof children === "string" && (
          <span
            style={{
              color: color,
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontFamily: "Inter",
            }}
          >
            {children}
          </span>
        )}
        {typeof children !== "string" && children}
      </div>
    </div>
  );
};

export default Button;
