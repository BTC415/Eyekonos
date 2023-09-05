import React from "react";
import TicketAllocatorSvg from "../assets/svgs/allocator.svg";

interface ITicketAllocatorProps {
  children?: string;
  backgroundColor?: string;
  onClick?: Function;
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
  thirdPlaceHolder?: string;
  linkButtonColor?: string;
}

const TicketAllocator: React.FC<ITicketAllocatorProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  disabled,
  fixedWidth,
  fontSize = 18,
  oneTimeButton,
  border = false,
  borderRadius = false,
  paddingVertical = 25,
  color = "#F0BB51",
  placeHolder = "Open",
  secondPlaceHolder = "Allocate to tickets",
  thirdPlaceHolder = "Remove Ticket Allocation",
  linkButtonColor = "white",
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
        paddingTop: 8,
        paddingBottom: 8,
        cursor: "pointer",
        borderRadius: borderRadius ? 19 : 0,
        color: color,
      }}
    >
      <div
        style={{
          borderTop: border ? "2px solid #F0BB51" : "0px",
          borderBottom: border ? "2px solid #F0BB51" : "0px",
          paddingTop: paddingVertical + 5,
          paddingBottom: paddingVertical + 5,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: 15,
          marginRight: 15,
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
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
              }}
            >
              <input
                style={{
                  borderRadius: 40,
                  borderWidth: 0,
                  paddingLeft: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 20,
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontWeight: "bold",
                  fontFamily: "InterLight",
                  minWidth: 350,
                  textAlign: "center",
                }}
                placeholder={placeHolder}
              />
              <div
                style={{
                  backgroundColor: linkButtonColor,
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 15,
                  marginTop: 5,
                }}
              >
                <span
                  style={{
                    fontSize: 30,
                    fontFamily: "InterBold",
                    fontWeight: "bold",
                    color: "#0066FF",
                    verticalAlign: "middle",
                    marginTop: -5,
                  }}
                >{`+`}</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
              }}
            >
              <input
                style={{
                  borderRadius: 40,
                  borderWidth: 0,
                  paddingLeft: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 20,
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontWeight: "bold",
                  fontFamily: "InterLight",
                  minWidth: 350,
                  textAlign: "center",
                }}
                placeholder={secondPlaceHolder}
              />
              <div
                style={{
                  backgroundColor: linkButtonColor,
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 15,
                  marginTop: 5,
                }}
              >
                <img src={TicketAllocatorSvg} width={30} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
              }}
            >
              <input
                style={{
                  borderRadius: 40,
                  borderWidth: 0,
                  paddingLeft: 20,
                  paddingTop: 10,
                  paddingBottom: 10,
                  paddingRight: 20,
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontWeight: "bold",
                  fontFamily: "InterLight",
                  minWidth: 350,
                  textAlign: "center",
                }}
                placeholder={thirdPlaceHolder}
              />
              <div
                style={{
                  backgroundColor: linkButtonColor,
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 15,
                  marginTop: 5,
                }}
              >
                <span
                  style={{
                    fontSize: 40,
                    fontFamily: "InterBold",
                    fontWeight: "bold",
                    color: "#0066FF",
                    verticalAlign: "middle",
                    marginTop: -5,
                  }}
                >{`-`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketAllocator;
