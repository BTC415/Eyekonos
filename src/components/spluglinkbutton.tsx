import React from "react";
import ForwardSvg from "../assets/svgs/forward.svg";
import DownSvg from "../assets/svgs/downBlue.svg";

interface ISlugLinkButtonProps {
  children?: string;
  backgroundColor?: string;
  onClick?: Function;
  onNextButtonClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  oneTimeButton?: boolean;
  border?: boolean;
  fontSize?: number;
  borderRadius?: boolean;
  paddingVertical?: number;
  color?: string;
  placeHolder?: string;
  secondPlaceHolder?: string;
  linkButtonColor?: string;
  urlVisible?: boolean;
  borderColor?: string;
  borderWidth?: number;
  insideBorderDirection?: "HORIZONTAL" | "VERTICAL";
  extraLinkButtonVisible?: boolean;
}

const SlugLinkButton: React.FC<ISlugLinkButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  onNextButtonClick = () => {},
  disabled,
  fixedWidth,
  fontSize = 18,
  oneTimeButton,
  border = false,
  borderRadius = false,
  paddingVertical = 25,
  color = "#F0BB51",
  placeHolder = "Event Name ...",
  secondPlaceHolder = "Page Slug ...",
  linkButtonColor = "white",
  urlVisible = true,
  borderWidth = 1,
  borderColor = "#F0BB51",
  insideBorderDirection = "HORIZONTAL",
  extraLinkButtonVisible = false,
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
        width: fixedWidth ? 100 : "100%",
        backgroundColor: backgroundColor,
        boxShadow: isHover
          ? `0px 0px 20px ${backgroundColor}`
          : "0px 0px 20px transparent",
        textAlign: `center`,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: borderRadius ? 19 : 0,
        color: color,
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
          paddingTop: paddingVertical - 3,
          paddingBottom: paddingVertical - 3,
          paddingLeft: 30,
          paddingRight: 30,
          // marginLeft: 15,
          // marginRight: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <input
              style={{
                borderRadius: 20,
                borderWidth: 0,
                paddingLeft: 20,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 20,
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: 350,
              }}
              placeholder={placeHolder}
            />
            <input
              style={{
                borderRadius: 20,
                borderWidth: 0,
                paddingLeft: 20,
                paddingTop: 5,
                paddingBottom: 5,
                paddingRight: 20,
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: 350,
              }}
              placeholder={secondPlaceHolder}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {extraLinkButtonVisible ? <div
              style={{
                backgroundColor: linkButtonColor,
                width: 34,
                height: 34,
                borderRadius: 34,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                cursor: "pointer",
              }}
              onClick={() => {
                onNextButtonClick();
              }}
            >
              <img
                src={DownSvg}
                width={30}
                height={30}
              />
            </div> : <div></div>}
            <div
              style={{
                backgroundColor: linkButtonColor,
                width: 34,
                height: 34,
                borderRadius: 34,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 15,
                cursor: "pointer",
              }}
              onClick={() => {
                onNextButtonClick();
              }}
            >
              <img
                src={ForwardSvg}
                width={35}
                height={35}
                style={{ marginLeft: 4 }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: 20,
            display: urlVisible ? "block" : "none",
          }}
        >
          <span
            style={{
              color: "#F0BB51",
            }}
          >
            page URL = eYeKONOS.com/
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlugLinkButton;
