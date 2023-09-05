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
import { Modal, Box } from "@mui/material";
import TicketAllocator from "../components/ticketallocator";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";
import ViewTicketAllocator from "../components/viewTicketAllocator";
import NFTDistributionSelector from "../components/NFTDistributionSelector";
import ETreeView from "../components/etreeview";
import { Collapsed } from "./collapsed";

const style = {
  position: "absolute" as "absolute",
  top: "calc(20% + 10vmin)",
  left: "55%",
  transform: "translate(0%, 0%)",
  width: "40%",
  bgcolor: "transparent",
  border: "2px solid #00000000",
  boxShadow: 0,
  p: 4,
};

const viewStyle = {
  position: "absolute" as "absolute",
  top: "calc(50% + 5vmin)",
  left: "65%",
  transform: "translate(-50%, -50%)",
  width: "700px",
  bgcolor: "transparent",
  border: "none",
  p: 4,
  maxHeight: "80vh",
  overflow: "scroll",
};

const NFTOrganize = () => {
  const deviceType = useDeviceType();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewClose = () => setViewOpen(false);
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const [stage, setStage] = React.useState<
    "allocationplus" | "selectnft" | "randomchance"
  >("allocationplus");

  return (
    <div
      className="molecule-page page-nftorganize"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-nftorganize__content">
        <div className="page-nftorganize__content__main">
          <div className="page-nftorganize__content__main__buttons">
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
              paddingVertical={10}
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
              <div
                style={{
                  fontSize: 24,
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              >
                <span>Organize NFTs</span>
                <br />
                <span>{`>>Premium (100)<<`}</span>
              </div>
            </Button>
          </div>
          <div className="page-nftorganize__content__main__nfts">
            <div className="page-nftorganize__content__main__nfts__treeview">
              <Collapsed />
              <div
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  width: "100%",
                  borderTop: "3px solid #3663CD",
                }}
              >
                <Button
                  paddingVertical={5}
                  borderRadius
                  borderRadiusAmount={15}
                  color="#F0E051"
                  fontSize={22}
                  fontWeight="bold"
                  backgroundColor="#3663CD"
                  fixedHeight
                  height={40}
                >
                  +
                </Button>
              </div>
            </div>
            <div className="page-nftorganize__content__main__nfts__nft-filter">
              <div className="page-nftorganize__content__main__nfts__nft-filter__header">
                <div className="page-nftorganize__content__main__nfts__nft-filter__header__button">
                  <Button
                    paddingVertical={9}
                    borderRadiusAmount={10}
                    borderRadius
                  >
                    <img
                      src={FolderPlusSvg}
                      style={{
                        height: 16,
                      }}
                    />
                  </Button>
                </div>
                <div className="page-nftorganize__content__main__nfts__nft-filter__header__select1">
                  <ESelectView />
                </div>
                <div className="page-nftorganize__content__main__nfts__nft-filter__header__select2">
                  <ESelectView />
                </div>
                <div className="page-nftorganize__content__main__nfts__nft-filter__header__search">
                  <ESearchView />
                </div>
              </div>
              <div className="page-nftorganize__content__main__nfts__nft-filter__content">
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                  check
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                  check
                  group
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                  check
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
                <NftTicket
                  onClickFunction={() => {
                    setViewOpen(true);
                  }}
                />
              </div>
              <div className="page-nftorganize__content__main__nfts__nft-filter__footer">
                <div className="page-nftorganize__content__main__nfts__nft-filter__footer__main">
                  <Button
                    paddingVertical={10}
                    borderRadius
                    borderRadiusAmount={25}
                    color="white"
                    fontSize={22}
                    fontWeight="bold"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <div style={{ fontFamily: "InterBold", fontSize: "20px" }}>Save</div>
                  </Button>
                </div>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <TicketAllocator borderRadius border />
                </Box>
              </Modal>
              <Modal
                open={viewOpen}
                onClose={handleViewClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={viewStyle}>
                  {stage === "allocationplus" && (
                    <ViewTicketAllocator
                      borderRadius
                      border
                      onClickFunction={() => {
                        setStage("selectnft");
                      }}
                      onCloseFunction={() => {
                        handleViewClose();
                      }}
                    />
                  )}
                  {stage === "selectnft" && (
                    <NFTDistributionSelector
                      onRandomChanceBackFunction={() => {
                        setStage("allocationplus");
                      }}
                      onFinalContinueFunction={() => {
                        handleViewClose();
                        setStage("allocationplus");
                      }}
                    />
                  )}
                </Box>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTOrganize;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
