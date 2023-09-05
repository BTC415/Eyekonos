import React from "react";
import BothArrowSvg from "../assets/svgs/botharrows.svg";
import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";

interface IClaimTicketProps {
  onClickFunction?: Function;
}

const ClaimTicket: React.FC<IClaimTicketProps> = ({
  onClickFunction = () => {},
}) => {
  return (
    <div
      className="component-claimticket"
      onClick={() => {
        onClickFunction();
      }}
    >
      {/* <div className="component-claimticket__corner-cut-rectangle-behind">
      </div> */}
      <div className="component-claimticket__corner-cut-rectangle">
        <div className="component-claimticket__corner-cut-rectangle__content">
          <span>Event#1</span>
          <span>1 Ticket</span>
          <span className="component-claimticket__corner-cut-rectangle__content__date">
            3/21/2023
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClaimTicket;
