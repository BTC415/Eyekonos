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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Scan = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-scan"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-scan__content">
        <div className="page-scan__content__main">
          <div className="page-scan__content__main__buttons">
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
                color: "#F0BB51",
                padding: 5,
                marginRight: 30,
                fontFamily: "Inter",
                cursor: "pointer",
              }}
              onClick={() => {
                history.push("/event-creator/admissions");
              }}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <Button
              border
              borderRadius
              fontWeight={"bold"}
              fontSize={30}
              borderWidth={3}
              color={"white"}
              hoverable={false}
              
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Admit Entry</div>
            </Button>
          </div>
          <div className="page-scan__content__main__qrscanner">
            <QRScanner />
          </div>
          <div className="page-scan__content__main__linkbutton">
            <LinkButton
              border
              borderRadius
              borderWidth={3}
              color="#2F50C2"
              paddingVertical={40}
              inputPaddingVertical={10}
              inputPaddingHorizontal={35}
              linkButtonIconSize={25}
              linkButtonSize={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
