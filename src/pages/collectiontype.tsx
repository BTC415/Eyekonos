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
import CollectionTypeTicket from "../components/collectiontypeticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const CollectionType = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-collectiontype"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-collectiontype__content">
        <div className="page-collectiontype__content__main">
          <div className="page-collectiontype__content__main__buttons">
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
              fontSize={22}
              fontWeight="bold"
              paddingVertical={25}
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
              Choose Collectible Type
            </Button>
          </div>
          <div className="page-collectiontype__content__main__table">
            <div style={{
              marginTop: 200,
            }}>
              <CollectionTypeTicket title="Standard NFT" subtitle="(ERC-721)">
                <span>- Unique Tradeable Asset</span>
                <span>- Royalties for Creator</span>
                <span>- Compatible with most blockchain wallets</span>
              </CollectionTypeTicket>
            </div>
            <div style={{
              marginTop: -50,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
              <CollectionTypeTicket
                title="NFT Standard"
                subtitle=""
                type="bottomfilled"
                separator={false}
              ></CollectionTypeTicket>
            </div>
            <div style={{
              marginTop: 200,
            }}>
              <CollectionTypeTicket title="eYeKON" subtitle="(COMING SOON)">
                <span>- Social Media Integration</span>
                <span>- Gaming Integration</span>
                <span>- And more...</span>
              </CollectionTypeTicket>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionType;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
