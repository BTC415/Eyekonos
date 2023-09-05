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
import CollectionTypeTicket from "../components/collectiontypeticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const AddToCollection = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const [stage, setStage] = React.useState<"select" | "ticket" | "upload">(
    "select"
  );

  return (
    <div
      className="molecule-page page-addtocollection"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      {stage === "select" && (
        <div className="page-addtocollection__content">
          <div className="page-addtocollection__content__main">
            <div className="page-addtocollection__content__main__buttons">
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
                  marginTop: 5,
                  fontFamily: "Inter",
                  cursor: "pointer",
                }}
                onClick={() => history.goBack()}
              >
                <img src={BackSvg} width={40} height={40} />
              </div>
              <div className="page-addtocollection__content__main__buttons__right">
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
                  <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Create & Manage NFT’s</div>
                </Button>

                <div className="page-addtocollection__content__main__buttons__right__twobtns">
                  <div
                    id="croba-mint"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Mint" width={260} height={260} />
                  </div>
                  <div
                    id="croba-widthdraw"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Widthdraw" width={260} height={260} />
                  </div>
                  <div
                    id="croba-create"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Create" width={300} height={300} />
                  </div>
                  <div
                    id="croba-import"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Import" width={300} height={300} />
                  </div>
                </div>
              </div>
            </div>
            <div className="page-addtocollection__content__main__svg">
              <img alt="owlonrock" src={OwlOnRockSvg} />
            </div>
          </div>
        </div>
      )}
      {stage === "ticket" && (
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
                onClick={() => {
                  setStage("select");
                }}
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
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Choose Collectible Type</div>
              </Button>
            </div>
            <div className="page-collectiontype__content__main__table">
              <div
                style={{
                  marginTop: 200,
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket title="Standard NFT" subtitle="(ERC-721)">
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- Unique Tradeable Asset</span>
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- Royalties for Creator</span>
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- Compatible with most blockchain wallets</span>
                </CollectionTypeTicket>
              </div>
              <div
                style={{
                  marginTop: -50,
                  paddingLeft: 20,
                  paddingRight: 20,
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket
                  title="NFT Standard"
                  subtitle=""
                  type="bottomfilled"
                  separator={false}
                ></CollectionTypeTicket>
              </div>
              <div
                style={{
                  marginTop: 200,
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket title="eYeKON" subtitle="(COMING SOON)">
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- Social Media Integration</span>
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- Gaming Integration</span>
                  <span style={{fontFamily:"InterLight", fontSize:"22px"}}>- And more...</span>
                </CollectionTypeTicket>
              </div>
            </div>
          </div>
        </div>
      )}
      {stage === "upload" && (
        <div className="page-upload__content">
          <div className="page-upload__content__main">
            <div className="page-upload__content__main__buttons">
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
                  cursor: "pointer"
                }}
                onClick={() => {
                  setStage("ticket");
                }}
              >
                <img src={BackSvg} width={40} height={40} />
              </div>
              <Button
                border
                borderRadius
                color="white"
                fontSize={24}
                fontWeight="bold"
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Create Standard NFT (ERC 721)</div>
              </Button>
            </div>
            <div>
              <ETabView type="standard" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCollection;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
