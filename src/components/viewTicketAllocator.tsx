import React from "react";
import MinusSvg from "../assets/svgs/minusGray.svg";
import Button from "./button";
import BackSvg from "../assets/svgs/back.svg";
import CrossSvg from "../assets/svgs/crossYellow.svg";
import { connect } from "react-redux";

interface IViewTicketAllocatorProps {
  allocations: any;
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
  onClickFunction?: Function;
  onCloseFunction?: Function;
}

const ViewTicketAllocator: React.FC<IViewTicketAllocatorProps> = ({
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
  onClickFunction = () => {},
  onCloseFunction = () => {},
  allocations,
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
        width: fixedWidth ? 100 : "calc(100% - 50px)",
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
              gap: 20,
              paddingLeft: 20,
              paddingRight: 20,
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
                width: "100%",
              }}
            >
              <Button
                paddingVertical={10}
                borderRadius
                borderRadiusAmount={25}
                color="#06F"
                backgroundColor="white"
                fontSize={20}
                fontWeight="bold"
              >
                View
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                gap: 20,
                width: "100%",
              }}
            >
              <Button
                paddingVertical={10}
                borderRadius
                borderRadiusAmount={25}
                color="#06F"
                backgroundColor="white"
                fontSize={20}
                fontWeight="bold"
                onClick={() => {
                  onClickFunction();
                }}
              >
                Add Ticket Allocation +
              </Button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 20,
                overflowY: "scroll",
                overflowX: "hidden",
                maxHeight: 200,
                padding: 10,
                marginTop: 10,
              }}
            >
              {allocations.map((item: string) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                      width: "100%",
                    }}
                  >
                    <Button
                      paddingVertical={10}
                      borderRadius
                      borderRadiusAmount={25}
                      color="black"
                      backgroundColor="white"
                      fontSize={20}
                      fontWeight="bold"
                    >
                      {item}
                    </Button>
                    <div
                      style={{
                        backgroundColor: linkButtonColor,
                        width: 40,
                        height: 40,
                        borderRadius: 30,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                        marginTop: 5,
                      }}
                    >
                      <img src={MinusSvg} width={40} height={40} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#102F82",
          borderRadius: 10,
          width: 50,
          height: 50,
          minWidth: 50,
          maxWidth: 50,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
          color: "white",
          fontWeight: "bold",
          padding: 0,
          marginRight: 30,
          fontFamily: "Inter",
          marginTop: 9,
          cursor: "pointer",
          position: "absolute",
          border: "2px solid #F0E051",
          right: -30,
          top: 25,
        }}
        onClick={() => {
          onCloseFunction();
        }}
      >
        <img src={CrossSvg} width={40} height={40} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state)
  return {
    allocations: state.TicketAllocationReducer.allocations,
  };
};

export default connect(mapStateToProps)(ViewTicketAllocator);
