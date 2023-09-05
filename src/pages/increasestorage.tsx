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
import SpinButton from "../components/spinbutton";
import SlugLinkButton from "../components/spluglinkbutton";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const IncreaseStorage = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-increasestorage" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-increasestorage__content">
        <div className="page-increasestorage__content__main">
          <div className="page-increasestorage__content__main__buttons">
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
              <img src={BackSvg} width={40} height={40} />
            </div>
            <Button
              border
              borderRadius
              color="white"
              fontSize={23}
              fontWeight="bold"
              paddingVertical={20}
              borderColor="#F0BB51"
              borderWidth={2}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Increase Storage</div>
            </Button>
          </div>
          <div className="page-increasestorage__content__main__table">
            <div className="page-increasestorage__content__main__table__button">
              <SpinButton
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                backgroundColor="#253F9A"
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                + 1GB
              </SpinButton>
              <SpinButton
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                backgroundColor="#253F9A"
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                + 5GB
              </SpinButton>
              <SpinButton
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                backgroundColor="#253F9A"
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                + 10GB
              </SpinButton>
              <Button
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                backgroundColor="#253F9A"
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                Custom Amount
              </Button>
            </div>
          </div>
          <div className="page-increasestorage__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncreaseStorage;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
