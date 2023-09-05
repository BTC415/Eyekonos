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

const SpecificTicketNFTs = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-specificticketnfts"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-specificticketnfts__content">
        <div className="page-specificticketnfts__content__main">
          <div className="page-specificticketnfts__content__main__buttons">
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
              fontSize={28}
              fontWeight="bold"
              paddingVertical={20}
              paddingHorizontal={40}
              borderColor="#F0BB51"
              borderWidth={3}
              fixedWidth
              width={600}
              hoverable={false}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Preview - Specific Ticket NFT's</div>
            </Button>
            <div style={{ width: 100 }}></div>
          </div>
          <div className="page-specificticketnfts__content__main__table">
            <div className="page-specificticketnfts__content__main__table__description">
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
                    className="page-specificticketnfts__content__main__table__description__rows"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      color: "white",
                      padding: 20,
                      gap: 6,
                    }}
                  >
                    <div>
                      <span style= {{fontFamily:"InterLight", fontSize:"20px"}}>
                        Add the ability to distribute NFT’s to specific
                        individual tickets
                      </span>
                    </div>
                    <div>
                      <span style= {{fontFamily:"InterLight", fontSize:"20px"}}>-Specific Seats - First Ticket</span>
                    </div>
                    <div>
                      <span style= {{fontFamily:"InterLight", fontSize:"20px"}}>-Purchased - First Ticket Admitted</span>
                    </div>
                    <div>
                      <span style= {{fontFamily:"InterLight", fontSize:"20px"}}>-First Ticket Redeemed</span>
                    </div>
                  </div>
                  <div className="page-specificticketnfts__content__main__table__description__totalprice" style= {{fontFamily:"InterBold", fontSize:"20px"}}>
                    Total Price - $99
                  </div>
                </div>
              </Button>
            </div>
            <div className="page-createevent__content__main__table__button">
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
          <div className="page-specificticketnfts__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificTicketNFTs;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
