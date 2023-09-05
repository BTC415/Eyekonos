import React from "react";
import ForwardSvg from "../assets/svgs/forward.svg";

interface ILinkButtonProps {
  children?: string;
  backgroundColor?: string;
  onClick?: Function;
  onLinkButtonClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  oneTimeButton?: boolean;
  border?: boolean;
  borderColor?: string;
  fontSize?: number;
  borderRadius?: boolean;
  paddingVertical?: number;
  color?: string;
  placeHolder?: string;
  linkButtonColor?: string;
  borderRadiusAmount?: number;
  borderOutside?: boolean;
  borderOutsideColor?: string;
  borderWidth?: number;
  inputPaddingVertical?: number;
  inputPaddingHorizontal?: number;
  linkButtonIconSize?: number;
  linkButtonSize?: number;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  onLinkButtonClick = () => {},
  disabled,
  fixedWidth,
  fontSize = 18,
  oneTimeButton,
  border = false,
  borderRadius = false,
  borderColor = "white",
  borderRadiusAmount = 19,
  paddingVertical = 25,
  color = "#F0BB51",
  placeHolder = "Admission Code (bottom of ticket) ...",
  linkButtonColor = "white",
  borderOutside = false,
  borderOutsideColor = "#F0BB51",
  borderWidth = 1,
  inputPaddingVertical = 5,
  inputPaddingHorizontal = 20,
  linkButtonIconSize = 40,
  linkButtonSize = 50,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const [localDisabled, setLocalDisabled] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
        width: fixedWidth ? 100 : "100%",
        backgroundColor: backgroundColor,
        boxShadow: isHover
          ? `0px 0px 20px ${backgroundColor}`
          : "0px 0px 20px transparent",
        textAlign: `center`,
        paddingTop: 3,
        paddingBottom: 3,
        cursor: "pointer",
        borderRadius: borderRadius ? borderRadiusAmount : 0,
        color: color,
        border: !borderOutside
          ? "none"
          : `${borderWidth}}px solid ` + borderOutsideColor,
      }}
    >
      <div
        style={{
          borderTop: border ? `${borderWidth}px solid ` + borderColor : "0px",
          borderBottom: border
            ? `${borderWidth}px solid ` + borderColor
            : "0px",
          paddingTop: paddingVertical - 3,
          paddingBottom: paddingVertical - 3,
          marginLeft: 15,
          marginRight: 15,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <input
          style={{
            borderRadius: 30,
            borderWidth: 0,
            paddingTop: inputPaddingVertical,
            paddingBottom: inputPaddingVertical,
            paddingLeft: inputPaddingHorizontal,
            paddingRight: inputPaddingHorizontal,
            fontSize: fontSize,
            lineHeight: 1.7,
            fontWeight: "bold",
            fontFamily: "InterLight",
            minWidth: 350,
            color: color,
          }}
          placeholder={placeHolder}
          ref={inputRef}
        />
        <div
          style={{
            backgroundColor: linkButtonColor,
            width: linkButtonSize,
            height: linkButtonSize,
            borderRadius: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 15,
          }}
          onClick={() => {
            onLinkButtonClick();
          }}
        >
          <img
            src={ForwardSvg}
            width={linkButtonIconSize}
            height={linkButtonIconSize}
            style={{ marginLeft: 4 }}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkButton;
