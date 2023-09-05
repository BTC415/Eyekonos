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

const EventDetails = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-eventdetails"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-eventdetails__content">
        <div className="page-eventdetails__content__main">
          <div className="page-eventdetails__content__main__buttons">
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
                fontFamily: "InterBold",
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
                fontSize={55}
                fontWeight="bold"
                paddingVertical={20}
                borderColor="#F0BB51"
                borderWidth={3}
                fixedWidth
                width={400}
                hoverable={false}
              >
               <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Event Details</div>
              </Button>
            
            <div style={{ width: 100 }}></div>
          </div>
          <div className="page-eventdetails__content__main__table">
            <div className="page-eventdetails__content__main__table__description">
              <SlugLinkButton
                border
                borderRadius
                insideBorderDirection="VERTICAL"
                onNextButtonClick={() => {
                  history.push("/event-creator/create-event");
                }}
              />
            </div>
            <div className="page-eventdetails__content__main__table__button" >
              <SpinButton
                paddingVertical={23}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                color="white"
                fontSize={22}
                fontWeight="bold"
                merchandiseTop={-27}
              >
                Add individual Seating
              </SpinButton>
            </div>
            <div className="page-eventdetails__content__main__table__footer">
              <span>
                *Individual Seating allows NFT's to be given to specific seats*
              </span>
            </div>
          </div>
          <div className="page-eventdetails__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
