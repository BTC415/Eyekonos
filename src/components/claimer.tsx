import React from "react";
import BothArrowSvg from "../assets/svgs/botharrows.svg";
import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import { useHistory, useLocation } from "react-router-dom";

const Claimer = () => {
  const history = useHistory();
  return (
    <div className="component-claimer" style={{height: "800px"}}>
      <div className="component-claimer__main">
        <div
          className="component-claimer__main__corner-cut-rectangle"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            history.push("/my-events");
          }}
        >
          <h3 className="component-claimer__main__corner-cut-rectangle__title">
            My Events
          </h3>
          <div className="component-claimer__main__corner-cut-rectangle__title-line" />
          <div className="component-claimer__main__corner-cut-rectangle__content">
            <p style={{fontSize:"2.8vmin"}}>
              - Claim NFTs <br /> - Transfer Tickets <br /> - Upload & View
              Media <br /> - View Exclusive Content
            </p>
          </div>
        </div>
        <div className="component-claimer__main__svgs">
          <img src={BothArrowSvg}></img>
        </div>
        <div
          className="component-claimer__main__corner-cut-rectangle"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            history.push("/event-creator");
          }}
        >
          <h3 className="component-claimer__main__corner-cut-rectangle__title">
            Event Creator
          </h3>
          <div className="component-claimer__main__corner-cut-rectangle__title-line" />
          <div className="component-claimer__main__corner-cut-rectangle__content">
            <p style={{fontSize:"2.8vmin"}}>
              - Create Events <br />
              - Customize Tickets & NFT's <br />
              - Setup Event Flyers <br />- Add Collaborators <br />
              (Admins & Ticketing)
            </p>
          </div>
        </div>
      </div>
      <div className="component-claimer__owlimage">
        <img src={OwlOnRockSvg}></img>
      </div>
    </div>
  );
};

export default Claimer;
