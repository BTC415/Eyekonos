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
import IOSSwitch from "../components/iosswitch";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const PrintPreview = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const [printReady, setPrintReady] = React.useState<boolean>(false);
  const history = useHistory();

  return (
    <div
      className="molecule-page page-printpreview"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-printpreview__content">
        <div className="page-printpreview__content__main">
          <div className="page-printpreview__content__main__buttons">
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
              fontSize={24}
              fontWeight="bold"
              paddingVertical={25}
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>{!printReady ? `Print - Preview` : `Print`}</div>
            </Button>
            <div style={{ width: 100 }}></div>
          </div>
          {!printReady && (
            <div className="page-printpreview__content__main__switch">
              <span style= {{fontFamily:"InterBold", fontSize:"20px"}}>Not Printed</span>
              <IOSSwitch
                uncheckedTrackColor="#102f82"
                checkedTrackColor="#102f82"
                uncheckedThumbColor="#D0D0D0"
                checkedThumbColor="#F0BB51"
              />
              <span style= {{fontFamily:"InterBold", fontSize:"20px"}}>Printed</span>
            </div>
          )}
          <div className="page-printpreview__content__main__table">
            {!printReady && (
              <div className="page-printpreview__content__main__table__body">
                <div className="page-printpreview__content__main__table__body__inside">
                  <ESelectView />
                  <div className="page-printpreview__content__main__table__body__inside__row" style= {{fontFamily:"InterBold", fontSize:"20px"}}>
                    Ticket# ... (printed {`>`} 0 times)
                  </div>
                  <div className="page-printpreview__content__main__table__body__inside__row" style= {{fontFamily:"InterBold", fontSize:"20px"}}>
                    Ticket# ...{" "}
                  </div>
                  <div className="page-printpreview__content__main__table__body__inside__row" style= {{fontFamily:"InterBold", fontSize:"20px"}}>
                    Ticket# ...{" "}
                  </div>
                  <div className="page-printpreview__content__main__table__body__inside__footer" style= {{fontFamily:"InterBold", fontSize:"20px"}}>
                    Total Price - $ ...
                  </div>
                </div>
              </div>
            )}
            <div className="page-printpreview__content__main__table__button">
              {!printReady && (
                <Button
                  paddingVertical={10}
                  borderRadius
                  borderRadiusAmount={25}
                  color="white"
                  fontSize={22}
                  fontWeight="bold"
                  paddingHorizontal={20}
                  onClick={() => {
                    setPrintReady(true);
                  }}
                >
                  <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Continue</div>
                </Button>
              )}
              {printReady && (
                <Button
                  paddingVertical={13}
                  borderRadius
                  borderRadiusAmount={25}
                  color="white"
                  fontSize={20}
                  fontWeight="light"
                  paddingHorizontal={20}
                  fixedWidth
                  width={360}
                  backgroundColor="#253F9A"
                >
                  Print NFT Tickets
                </Button>
              )}
              {printReady && (
                <Button
                  paddingVertical={13}
                  borderRadius
                  borderRadiusAmount={25}
                  color="white"
                  fontSize={20}
                  fontWeight="light"
                  paddingHorizontal={20}
                  fixedWidth
                  width={400}
                  backgroundColor="#253F9A"
                >
                  Print Admission Tickets
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPreview;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
