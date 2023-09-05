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

const EventMedia = () => {
  const deviceType = useDeviceType();
  const deviceWidth = useWindowWidth();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  const [buttonState, setButtonState] = React.useState<"+" | "-">("+");
  const [eventNFTButtonState, setEventNFTButtonState] = React.useState<
    "+" | "-"
  >("+");

  return (
    <div
      className="molecule-page page-eventmedia"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-eventmedia__content">
        <div className="page-eventmedia__content__main">
          <div className="page-eventmedia__content__main__buttons">
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
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Event#1 - Media</div>
              </Button>
              <div
                className={[
                  "page-eventmedia__content__main__nfts",
                  buttonState === "+" ? "collapse" : "spread",
                ].join(" ")}
              >
                <div className="page-eventmedia__content__main__nfts__nft-filter">
                  <div className="page-eventmedia__content__main__nfts__nft-filter__header">
                    <div className="page-eventmedia__content__main__nfts__nft-filter__header__title" style= {{fontFamily:"InterLight", fontSize:"22px"}}>
                      My Uploads
                    </div>
                    <div className="page-eventmedia__content__main__nfts__nft-filter__header__subscription" style= {{fontFamily:"InterLight", fontSize:"18px"}}>
                      Upload
                    </div>
                    <div
                      className="page-eventmedia__content__main__nfts__nft-filter__header__icon"
                      onClick={() => {
                        setButtonState(buttonState === "+" ? "-" : "+");
                      }}
                    >
                      {buttonState}
                    </div>
                  </div>
                  <div
                    className={[
                      "page-eventmedia__content__main__nfts__nft-filter__content",
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
                  "page-eventmedia__content__main__event-nfts",
                  eventNFTButtonState === "+" ? "collapse" : "spread",
                ].join(" ")}
              >
                <div className="page-eventmedia__content__main__event-nfts__nft-filter">
                  <div className="page-eventmedia__content__main__event-nfts__nft-filter__header">
                    <div className="page-eventmedia__content__main__event-nfts__nft-filter__header__title">
                      <div className="page-eventmedia__content__main__event-nfts__nft-filter__header__title__text" style= {{fontFamily:"InterLight", fontSize:"22px"}}>
                        Event Media
                      </div>
                      <div
                        className="page-eventmedia__content__main__event-nfts__nft-filter__header__title__icon"
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
                      "page-eventmedia__content__main__event-nfts__nft-filter__content",
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
          <div className="page-eventmedia__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventMedia;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
