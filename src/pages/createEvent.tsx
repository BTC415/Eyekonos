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

const CreateEvent = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  const [stage, setStage] = useState<"input" | "summary" | "checkout">("input");

  return (
    <div
      className="molecule-page page-createevent"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-createevent__content">
        <div className="page-createevent__content__main">
          <div className="page-createevent__content__main__buttons">
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
            {stage === "input" && (
              <Button
                border
                borderRadius
                color="white"
                fontSize={28}
                fontWeight="bold"
                paddingVertical={20}
                borderColor="#F0BB51"
                borderWidth={3}
                fixedWidth
                width={400}
                hoverable={false}
              >
                <div style={{fontFamily:"InterBold", fontSize:'28px'}}>Event Details</div>
              </Button>
            )}
            {stage === "summary" && (
              <Button
                border
                borderRadius
                color="white"
                fontSize={28}
                fontWeight="bold"
                paddingVertical={20}
                borderColor="#F0BB51"
                borderWidth={3}
                fixedWidth
                width={600}
                hoverable={false}
              >
                Preview - Event Summary
              </Button>
            )}
            {stage === "checkout" && (
              <Button
                border
                borderRadius
                color="white"
                fontSize={28}
                fontWeight="bold"
                paddingVertical={20}
                borderColor="white"
                borderWidth={3}
                fixedWidth
                width={600}
                hoverable={false}
              >
                Checkout
              </Button>
            )}
            <div style={{ width: 100 }}></div>
          </div>
          <div className="page-createevent__content__main__table">
            {stage === "input" && (
              <div className="page-createevent__content__main__table__description">
                <SlugLinkButton
                  border
                  borderRadius
                  placeHolder="Event Platform"
                  secondPlaceHolder="API Key"
                  urlVisible={false}
                  insideBorderDirection="VERTICAL"
                  extraLinkButtonVisible
                  onNextButtonClick={() => {
                    setStage("summary");
                  }}
                />
              </div>
            )}
            {stage === "summary" && (
              <div className="page-createevent__content__main__table__description">
                <Button
                  border
                  borderRadius
                  insideBorderDirection="VERTICAL"
                  hoverable={false}
                  marginOutside={0}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="page-createevent__content__main__table__description__rows"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "white",
                        padding: 20,
                        gap: 10,
                      }}
                    >
                      <div>
                        <span>Event Name- ...</span>
                      </div>
                      <div>
                        <span>Complimentary Storage - 10.0GB</span>
                      </div>
                      <div>
                        <span>
                          API Integration - None (Fandango/Eventbrite...)
                        </span>
                      </div>
                    </div>
                    <div className="page-createevent__content__main__table__description__totalprice">
                      Total Price - $
                    </div>
                  </div>
                </Button>
              </div>
            )}
            {stage === "summary" && (
              <div className="page-createevent__content__main__table__button">
                <Button
                  paddingVertical={12}
                  paddingHorizontal={20}
                  borderRadius
                  borderRadiusAmount={25}
                  color="white"
                  fontSize={22}
                  fontWeight="bold"
                  onClick={() => {
                    setStage("checkout");
                  }}
                >
                  Continue
                </Button>
              </div>
            )}
            {stage === "checkout" && (
              <div className="page-createevent__content__main__table__description__checkout">
                <div style={{ cursor: "pointer" }}>Paypal</div>
                <div style={{ cursor: "pointer" }}>Apple Pay</div>
                <div style={{ cursor: "pointer" }}>Google Pay</div>
                <div style={{ cursor: "pointer" }}>Credit / Debit Card</div>
                <div style={{ cursor: "pointer" }}>Coinbase</div>
                <div style={{ cursor: "pointer" }}>
                  cryptomus <span>(cryptocurrency payments)</span>
                </div>
              </div>
            )}
          </div>
          <div className="page-createevent__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
