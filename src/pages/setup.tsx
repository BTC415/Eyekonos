import React, { useState } from "react";

import Lottie from "react-lottie";

// components
import Header from "../components/header";
import Footer from "../components/footer";
// import VideoPlayer from "../components/video-player";

// animations
import * as animationData from "../assets/animations/top.json";
import SideBar from "../components/sidebar";
import Button from "../components/button";

import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import ESelectView from "../components/eselect";
import useDeviceType from "../hooks/useDeviceType";
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Setup = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-setup" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-setup__content">
        <div className="page-setup__content__main" style={{paddingTop:"120px"}}>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
            history.push("/event-creator/tickets/settings");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Settings</div>
          </Button>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
            history.push("/event-creator/tickets/design");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Design</div>
          </Button>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
            history.push("/event-creator/tickets/manage");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Edit Ticket Info</div>
          </Button>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
            history.push("/event-creator/tickets/print");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Print to PDF</div>
          </Button>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
            history.push("/event-creator/tickets/extratickets");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Create Extra Tickets</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setup;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
