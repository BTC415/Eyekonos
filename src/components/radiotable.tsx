import React from "react";
import PencilSvg from "../assets/svgs/pencil.svg";
import { styled } from "@mui/material/styles";
import IOSSwitch from "./iosswitch";
import ESelectView from "./eselect";

const RadioTable = () => {
  return (
    <div className="component-radiotable">
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
          Settings Applied to...
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>All Tickets</span>
          <img src={PencilSvg} style={{ width: 20, paddingLeft: 20 }} />
        </div>
      </div>

      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Ticket Supply/Classes
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Event Flyer 
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Ticket Design
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Ticket NFT’s
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Ticket NFT’s
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            Manage Ticket Admissions?
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
          {`*Add Collaborators*`}
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>
            {`(not more permissions than this user)`}
          </span>
        </div>
        <div className="component-radiotable__row__options">
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Yes</span>
        </div>
      </div>
    </div>
  );
};

export default RadioTable;
