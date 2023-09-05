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
import PlugSvg from "../assets/svgs/plus.svg";
import ClaimTicket from "../components/claimticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const SectionSeating = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-sectionseating"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-sectionseating__content">
        <div className="page-sectionseating__content__main">
          <div className="page-sectionseating__content__main__buttons">
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
            <div className="page-sectionseating__content__main__buttons__right">
              <span style={{
                color: "#000",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}>Section Seating</span>

              <div className="page-sectionseating__content__main__buttons__right__twobtns">
                <span style={{
                  color: "#06F",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                }}>Section</span>
                <input
                  style={{
                    borderRadius: 5,
                    borderWidth: 0,
                    paddingLeft: 20,
                    border: "4px solid #0066FF",
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    fontSize: 32,
                    lineHeight: 1.7,
                    fontWeight: "bold",
                    fontFamily: "InterLight",
                    minWidth: 112,
                    width: 112,
                    height: 62,
                    textAlign: "center"
                  }}
                  placeholder={"0"}
                />
                <input
                  style={{
                    borderRadius: 5,
                    borderWidth: 0,
                    paddingLeft: 20,
                    border: "4px solid #0066FF",
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    fontSize: 32,
                    lineHeight: 1.7,
                    fontWeight: "bold",
                    fontFamily: "InterLight",
                    minWidth: 112,
                    width: 112,
                    height: 62,
                    textAlign: "center"
                  }}
                  placeholder={"0"}
                />
                <Button
                  backgroundColor="white"
                  color="#0066FF"
                  borderRadius
                  borderColor="#0066FF"
                  borderWidth={4}
                  paddingVertical={0}
                  fontSize={30}
                  fontWeight="bold"
                  borderRadiusAmount={100}
                  paddingHorizontal={0}
                  fixedWidth
                  width={60}
                  height={60}
                  borderOutside
                >
                  <img src={PlugSvg} style={{marginTop: 8}} />
                </Button>
              </div>
              <div className="page-sectionseating__content__main__buttons__right__table">
              </div>
            </div>
          </div>
          <div className="page-sectionseating__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSeating;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
