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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Organize = () => {
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  return (
    <div
      className="molecule-page page-organize"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-organize__content">
        <div className="page-organize__content__main">
          <span style={{fontSize:"24px"}}>23 Minted</span>
          <span style={{fontSize:"24px"}}>7/23 Claimed</span>
          <div style={{ padding: 5 }}></div>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/manage");
            }}
          ><div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Create & Manage</div>
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/organize");
            }}
          >
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Organize NFTs</div>
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/allocate");
            }}
          >
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Ticket Allocation</div>
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/opensea");
            }}
          >
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>OpenSea Display Page</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Organize;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
