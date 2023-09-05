import React from "react";
import MinusSvg from "../assets/svgs/minusGray.svg";
import Button from "./button";
import ESelectView from "./eselect";
import IOSSwitch from "./iosswitch";
import BackSvg from "../assets/svgs/backYellow.svg";
import CrossSvg from "../assets/svgs/cross.svg";
import { connect } from "react-redux";
import { addTicketAllocation } from "../redux/actions/ticketAllocation";

interface INFTDistributionSelectorProps {
  children?: string;
  onRandomChanceBackFunction?: Function;
  onFinalContinueFunction?: Function;
  allocations: any;
  addTicketAllocation: any;
}

const NFTDistributionSelector: React.FC<INFTDistributionSelectorProps> = ({
  children,
  onRandomChanceBackFunction = () => {},
  onFinalContinueFunction = () => {},
  allocations,
  addTicketAllocation,
}) => {
  const [stage, setStage] = React.useState<
    "randomchance" | "specifictickets" | "showtable" | "indicate"
  >("randomchance");
  return (
    <Button
      border
      borderRadius
      insideBorderDirection="VERTICAL"
      hoverable={false}
      marginOutside={10}
      paddingHorizontal={10}
      paddingVerticalOutside={20}
      paddingVertical={20}
      fixedWidth
      width={"calc(100% - 50px)"}
    >
      {stage === "randomchance" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <ESelectView
            colorTheme="dark"
            data={[
              "Random chance %",
              "Specific seats",
              "First ticket purchased",
              "First ticket admitted",
              "First ticket claimed",
            ]}
          />
          <ESelectView
            colorTheme="dark"
            data={["Gernal", "Premium", "Front-Row", "Sky-Box"]}
          />
          <span
            style={{
              color: "white",
              fontFamily: "Inter",
            }}
          >
            Odds of getting an NFT for each ticket
          </span>
          <input
            style={{
              borderRadius: 10,
              borderWidth: 0,
              paddingLeft: 20,
              paddingTop: 7,
              paddingBottom: 7,
              paddingRight: 20,
              fontSize: 14,
              lineHeight: 1.7,
              fontWeight: "bold",
              fontFamily: "InterLight",
              minWidth: 100,
              width: 120,
              textAlign: "center",
            }}
            placeholder={"0%"}
          />
          <Button
            paddingVertical={10}
            borderRadius
            borderRadiusAmount={25}
            color="white"
            fontSize={15}
            fontWeight="bold"
            backgroundColor="rgb(5, 14, 39)"
            fixedWidth
            width={150}
            onClick={() => {
              setStage("specifictickets");
            }}
          >
            Continue
          </Button>
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
              color: "#F0E051",
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
              onRandomChanceBackFunction();
            }}
          >
            <img src={BackSvg} width={40} height={40} />
          </div>
        </div>
      )}
      {stage === "specifictickets" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <ESelectView
            colorTheme="dark"
            data={[
              "Random chance %",
              "Specific seats",
              "First ticket purchased",
              "First ticket admitted",
              "First ticket claimed",
            ]}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              fontFamily: "Inter",
            }}
          >
            <span>Single</span>
            <IOSSwitch
              checkedTrackColor="#F0E051"
              uncheckedTrackColor="#000000BA"
              uncheckedThumbColor="#F0E051"
            />
            <span>Multiple</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
              marginLeft: -60,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                fontFamily: "Inter",
              }}
            >
              Tickets #
            </span>
            <input
              style={{
                borderRadius: 10,
                borderWidth: 0,
                paddingLeft: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingRight: 20,
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: 100,
                width: 120,
                textAlign: "center",
              }}
              placeholder={"Min"}
            />
            <span
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                fontFamily: "Inter",
              }}
            >
              to
            </span>
            <input
              style={{
                borderRadius: 10,
                borderWidth: 0,
                paddingLeft: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingRight: 20,
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: 100,
                width: 120,
                textAlign: "center",
              }}
              placeholder={"Max"}
            />
          </div>
          <span
            style={{
              color: "#F0E051",
              fontFamily: "Inter",
            }}
          >
            Error: Overlaps existing allocation to #*range-start* - #*range end*{" "}
            <br />
            Error: Overlaps existing allocation to #*ticket-number*
          </span>
          <Button
            paddingVertical={10}
            borderRadius
            borderRadiusAmount={25}
            color="white"
            fontSize={15}
            fontWeight="bold"
            backgroundColor="rgb(5, 14, 39)"
            fixedWidth
            width={150}
            onClick={() => {
              setStage("showtable");
            }}
          >
            Continue
          </Button>
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
              color: "#F0E051",
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
              setStage("randomchance");
            }}
          >
            <img src={BackSvg} width={40} height={40} />
          </div>
        </div>
      )}
      {stage === "showtable" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <ESelectView
            colorTheme="dark"
            data={[
              "Random chance %",
              "Specific seats",
              "First ticket purchased",
              "First ticket admitted",
              "First ticket claimed",
            ]}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              fontFamily: "Inter",
              minHeight: 200,
            }}
          >
            <span>A Table should be placed here. Need to discuss</span>
          </div>
          <Button
            paddingVertical={10}
            borderRadius
            borderRadiusAmount={25}
            color="white"
            fontSize={15}
            fontWeight="bold"
            backgroundColor="rgb(5, 14, 39)"
            fixedWidth
            width={150}
            onClick={() => {
              setStage("indicate");
            }}
          >
            Continue
          </Button>
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
              color: "#F0E051",
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
              setStage("specifictickets");
            }}
          >
            <img src={BackSvg} width={40} height={40} />
          </div>
        </div>
      )}
      {stage === "indicate" && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <ESelectView
            colorTheme="dark"
            data={[
              "Random chance %",
              "Specific seats",
              "First ticket purchased",
              "First ticket admitted",
              "First ticket claimed",
            ]}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
              fontWeight: "bold",
              fontSize: 18,
              color: "white",
              fontFamily: "Inter",
            }}
          >
            <span>Single</span>
            <IOSSwitch
              checkedTrackColor="#F0E051"
              uncheckedTrackColor="#000000BA"
              uncheckedThumbColor="#F0E051"
            />
            <span>Multiple</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
              marginLeft: -60,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "white",
                fontFamily: "Inter",
              }}
            >
              Tickets #
            </span>
            <input
              style={{
                borderRadius: 10,
                borderWidth: 0,
                paddingLeft: 20,
                paddingTop: 7,
                paddingBottom: 7,
                paddingRight: 20,
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: 100,
                width: 120,
                textAlign: "center",
              }}
              placeholder={"Min"}
            />
          </div>
          <span
            style={{
              color: "#F0E051",
              fontFamily: "Inter",
            }}
          >
            Error: Overlaps existing allocation to #*range-start* - #*range end*{" "}
            <br />
            Error: Overlaps existing allocation to #*ticket-number*
          </span>
          <Button
            paddingVertical={10}
            borderRadius
            borderRadiusAmount={25}
            color="white"
            fontSize={15}
            fontWeight="bold"
            backgroundColor="rgb(5, 14, 39)"
            fixedWidth
            width={150}
            onClick={() => {
              addTicketAllocation("AAA");
              setStage("randomchance");
              onFinalContinueFunction();
            }}
          >
            Continue
          </Button>
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
              color: "#F0E051",
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
              setStage("showtable");
            }}
          >
            <img src={BackSvg} width={40} height={40} />
          </div>
        </div>
      )}
    </Button>
  );
};

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    allocations: state.TicketAllocationReducer.allocations,
  };
};

export default connect(mapStateToProps, { addTicketAllocation })(
  NFTDistributionSelector
);
