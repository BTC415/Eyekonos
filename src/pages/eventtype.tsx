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
import ClaimTicket from "../components/claimticket";
import Croba from "../components/croba";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const EventType = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-eventtype" style={{
      // height: deviceHeight - 90
    }}>
      <div className="page-eventtype__content">
        <div className="page-eventtype__content__main">
          <div className="page-eventtype__content__main__buttons">
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
                marginTop: 5,
              }}
              onClick={() => history.goBack()}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <div className="page-eventtype__content__main__buttons__right">
              <Button
                border
                borderRadius
                color="white"
                fontSize={22}
                fontWeight="bold"
                paddingVertical={20}
                borderColor="#F0BB51"
                borderWidth={2}
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Event#1</div>
              </Button>

              <div className="page-eventtype__content__main__buttons__right__twobtns">
                <div id="croba-nft" onClick={() => {
                  history.push("/event/nft");
                }}>
                  <Croba text="NFT" />
                </div>
                <div id="croba-eventmedia" onClick={() => {
                  history.push("/event/exclusives");
                }}>
                  <Croba text="Exclusive Content" />
                </div>
                <div id="croba-merch" onClick={() => {
                  history.push("/event/media");
                }}>
                  <Croba text="Event Media" />
                </div>
                <div id="croba-exclusivecontent" onClick={() => {
                  history.push("/event/merch");
                }}>
                  <Croba text="Merch" />
                </div>
              </div>
            </div>
          </div>
          <div className="page-eventtype__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventType;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
