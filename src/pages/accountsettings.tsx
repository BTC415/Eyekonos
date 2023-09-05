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

const AccountSettings = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-accountsettings"
      style={{
        // height: deviceHeight - 90,
      }}
    >


      <div className="page-accountsettings__content">
        <div className="page-accountsettings__content__main">
          <div className="page-accountsettings__content__main__table">
            <div className="page-accountsettings__content__main__table__description">
              <SlugLinkButton
                border
                borderRadius
                insideBorderDirection="VERTICAL"
                onNextButtonClick={() => {
                }}
              />
            </div>
          </div>
          <div className="page-accountsettings__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AccountSettings;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
