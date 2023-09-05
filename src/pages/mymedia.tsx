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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const MyMedia = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-mymedia" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-mymedia__content">
        <div className="page-mymedia__content__main">
          <div className="page-mymedia__content__main__buttons">
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
              >
                Event#1 - NFT's
              </Button>
              <div className="page-mymedia__content__main__nfts">
                <div className="page-mymedia__content__main__nfts__nft-filter">
                  <div className="page-mymedia__content__main__nfts__nft-filter__header">
                    <div className="page-mymedia__content__main__nfts__nft-filter__header__title">
                      My Media
                    </div>
                    <div className="page-mymedia__content__main__nfts__nft-filter__header__subscription">
                      Upload
                    </div>
                    <div className="page-mymedia__content__main__nfts__nft-filter__header__icon">
                      +
                    </div>
                  </div>
                  <div className="page-mymedia__content__main__nfts__nft-filter__content">
                    <NftTicket check />
                    <NftTicket check group />
                    <NftTicket />
                    <NftTicket check />
                    <NftTicket />
                    <NftTicket />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-mymedia__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyMedia;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
