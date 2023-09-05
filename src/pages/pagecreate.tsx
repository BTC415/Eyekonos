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
import QRScanner from "../components/qrscanner";
import LinkButton from "../components/linkbutton";
import useWindowHeight from "../hooks/useWindowHeight";

const PageCreate = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  
  return (
    <div className="molecule-page page-pagecreate" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-pagecreate__content">
        <div className="page-pagecreate__content__main">
          <div className="page-pagecreate__content__main__linkbutton">
          <div style= {{fontFamily:"InterBold", fontSize:"16px"}}><LinkButton border borderRadius placeHolder="Enter URL Page Name @ website.com/..." /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCreate;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
