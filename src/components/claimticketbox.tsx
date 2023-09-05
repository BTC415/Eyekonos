import React from "react";
import BothArrowSvg from "../assets/svgs/botharrows.svg";
import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import ClaimTicket from "./claimticket";

interface IClaimTicketBoxProps {
  onClickFunction?: Function;
}

const ClaimTicketBox: React.FC<IClaimTicketBoxProps> = ({
  onClickFunction = () => {},
}) => {
  return (
    <div
      className="component-claimticketbox"
      onClick={() => {
        onClickFunction();
      }}
      style={{
        position: "relative",
      }}
    >
        <ClaimTicket onClickFunction={() => {}} />
        <div style={{
            position: "absolute",
            top: 10,
            left: 10,
        }}>
            <ClaimTicket onClickFunction={() => {}} />
        </div>
    </div>
  );
};

export default ClaimTicketBox;
