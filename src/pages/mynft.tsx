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
import FolderPlusSvg from "../assets/svgs/folderplus.svg";
import NftTicket from "../components/nftticket";
import useWindowWidth from "../hooks/useWindowWidth";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const MyNFT = () => {
  const deviceType = useDeviceType();
  const deviceWidth = useWindowWidth();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  const [buttonState, setButtonState] = React.useState<"+" | "-">("+");
  const [eventNFTButtonState, setEventNFTButtonState] = React.useState<
    "+" | "-"
  >("+");
  interface INftTicketProps {
    type: string;
    status: string;
    check?: boolean;
    className?: string; // Define the className prop here
    // ...
  }

  return (
    <div
      className="molecule-page page-mynft"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-mynft__content">
        <div className="page-mynft__content__main">
          <div className="page-mynft__content__main__buttons">
            <div
              style={{
                backgroundColor: "#102F82",
                borderRadius: 10,
                width: 50,
                height: 50,
                minWidth: 50,
                maxWidth: 50,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                color: "white",
                fontWeight: "bold",
                padding: 5,
                marginRight: 30,
                fontFamily: "Inter",
                marginTop: 5,
                cursor: "pointer",
              }}
              onClick={() => history.goBack()}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: 30,
              }}
            >
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
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Event#1 - NFT's</div>
              </Button>
              <a
                style={{
                  color: "#0066FF",
                  fontWeight: "bolder",
                  fontSize: 22,
                  textDecoration: "underline",
                }}
                title="https://opensea.com/link/0x00000000000000000000000000000000000000000"
              >
                {Number(deviceWidth) > 1600 ? `View on Open Sea (0x00000000000000000000000000000000000000000)` : `View on Open Sea (0x0000...000)`}
              </a>
              <div
                className={[
                  "page-mynft__content__main__nfts",
                  buttonState === "+" ? "collapse" : "spread",
                ].join(" ")}
              >
                <div className="page-mynft__content__main__nfts__nft-filter">
                  <div className="page-mynft__content__main__nfts__nft-filter__header">
                    <div className="page-mynft__content__main__nfts__nft-filter__header__title" style= {{fontFamily:"InterLight", fontSize:"22px"}}>
                      My NFT's
                    </div>
                    <div className="page-mynft__content__main__nfts__nft-filter__header__subscription" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
                      Mint & Claim (8/10)
                    </div>
                    <div
                      className="page-mynft__content__main__nfts__nft-filter__header__icon"
                      onClick={() => {
                        setButtonState(buttonState === "+" ? "-" : "+");
                      }}
                    >
                      {buttonState}
                    </div>
                  </div>
                  <div
                    className={[
                      "page-mynft__content__main__nfts__nft-filter__content",
                      buttonState === "-" ? "spread" : "collapse",
                    ].join(" ")}
                  >

                    <NftTicket type="event-ticket" status="unknown" check />
                    <NftTicket type="event-ticket" check group />
                    <NftTicket type="event-ticket" />
                    <NftTicket type="event-ticket" check />
                    <NftTicket type="event-ticket" />
                    <NftTicket type="event-ticket" />
                  </div>
                </div>
              </div>
              <div
                className={[
                  "page-mynft__content__main__event-nfts",
                  eventNFTButtonState === "+" ? "collapse" : "spread",
                ].join(" ")}
              >
                <div className="page-mynft__content__main__event-nfts__nft-filter">
                  <div className="page-mynft__content__main__event-nfts__nft-filter__header">
                    <div className="page-mynft__content__main__event-nfts__nft-filter__header__title">
                      <div className="page-mynft__content__main__event-nfts__nft-filter__header__title__text" style= {{fontFamily:"InterLight", fontSize:"22px"}}>
                        Event NFT's
                      </div>
                      <div
                        className="page-mynft__content__main__event-nfts__nft-filter__header__title__icon"
                        onClick={() => {
                          setEventNFTButtonState(
                            eventNFTButtonState === "+" ? "-" : "+"
                          );
                        }}
                      >
                        {eventNFTButtonState}
                      </div>
                    </div>
                  </div>
                  <div
                    className={[
                      "page-mynft__content__main__event-nfts__nft-filter__content",
                      eventNFTButtonState === "-" ? "spread" : "collapse",
                    ].join(" ")}
                  >
                    <NftTicket type="event-ticket" check />
                    <NftTicket type="event-ticket" check group />
                    <NftTicket type="event-ticket" />
                    <NftTicket type="event-ticket" check />
                    <NftTicket type="event-ticket" />
                    <NftTicket type="event-ticket" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-mynft__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNFT;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
