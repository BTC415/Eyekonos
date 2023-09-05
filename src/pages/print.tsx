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
import BackSvg from "../assets/svgs/back.svg";
import ESelectView from "../components/eselect";
import useDeviceType from "../hooks/useDeviceType";
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import Claimer from "../components/claimer";
import QRScanner from "../components/qrscanner";
import LinkButton from "../components/linkbutton";
import ETabView from "../components/tab";
import RadioTable from "../components/radiotable";
import Editabletable from "../components/editabletable";
import IOSSwitch from "../components/iosswitch";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Print = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-print"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-print__content">
        <div className="page-print__content__main">
          <div className="page-print__content__main__buttons">
            <div
              style={{
                backgroundColor: "#102F82",
                borderRadius: 10,
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                color: "white",
                padding: 5,
                marginRight: 30,
                fontFamily: "Inter",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/event-creator/tickets");
              }}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <Button
              border
              borderRadius
              color="white"
              fontSize={24}
              fontWeight="bold"
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Print to PDF</div>
            </Button>
          </div>
          <div className="page-print__content__main__options">
            <ESelectView />
            <ESelectView />
            <Button
              borderRadius
              color="white"
              paddingVertical={10}
              borderRadiusAmount={10}
              minWidth={180}
              width={180}
              fixedWidth
            >
              <div style= {{fontFamily:"InterBold", fontSize:"16px"}}>New +</div>
            </Button>
            <ESearchView />
          </div>
          <div className="page-print__content__main__table">
            <Editabletable />
          </div>
        </div>
        <div className="page-print__content__extra">
          {/* <Button>Select All</Button>
          <Button>Print</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Print;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
