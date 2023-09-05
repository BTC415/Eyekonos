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
import Claimer from "../components/claimer";
import useWindowHeight from "../hooks/useWindowHeight";

const Claim = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();

  return (
    <div className="page-claim" style={{
      paddingLeft: "20vmin",
      // height: deviceHeight - 90
    }}>
      <Claimer />
    </div>
  );
};

export default Claim;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
