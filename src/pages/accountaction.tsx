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
import EventMediaNftSvg from "../assets/svgs/eventmedianft.svg";
import LinkButton from "../components/linkbutton";
import ETabView from "../components/tab";
import RadioTable from "../components/radiotable";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const AccountAction = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-accountaction" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-accountaction__content">
        <div className="page-accountaction__content__main">
          <div className="page-accountaction__content__main__buttons">
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
              onClick={() => history.goBack()}
            >
              <img src={BackSvg} />
            </div>
            <Button
              border
              borderRadius
              color="white"
              fontSize={24}
              fontWeight="bold"
              paddingVertical={20}
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
               <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Account Action Required</div>
            </Button>
          </div>
          <div className="page-accountaction__content__main__table">
            <div className="page-accountaction__content__main__table__description">
              <div className="page-accountaction__content__main__table__description__content">
              <p style= {{fontFamily:"InterLight", fontSize:"20px"}}>In order to maintain the integrity of the platform, we require that event creators take responsibility for the events which they create. You must first verify your identity to use our platfom</p>
              </div>
            </div>
            <div className="page-accountaction__content__main__table__button">
              <Button
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Continue</div>
              </Button>
            </div>
          </div>
          <div className="page-accountaction__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountAction;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
