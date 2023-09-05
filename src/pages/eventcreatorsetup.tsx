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
import SpinButton from "../components/spinbutton";

import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BackSvg from "../assets/svgs/back.svg";

const style = {
  position: "absolute" as "absolute",
  top: "calc(50% + 5vmin)",
  left: "65%",
  transform: "translate(-50%, -50%)",
  width: "600",
  bgcolor: "transparent",
  border: "none",
  p: 4,
  maxHeight: "80vh",
  overflow: "scroll",
};

const EventCreatorSetup = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  return (
    <div
      className="molecule-page page-eventcreatorsetup"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-eventcreatorsetup__content">
        <div className="page-eventcreatorsetup__content__main">
          <div className="page-eventcreatorsetup__content__main__buttons">
            <div className="page-eventcreatorsetup__content__main__buttons__right">
              <div className="page-eventcreatorsetup__content__main__buttons__right__twobtns">
                <div
                  id="croba-collaborators"
                  onClick={() => {
                    history.push("/event-creator/setup/manage-collaborators");
                  }}
                >
                  <Croba text="Collaborators" width={260} height={260} fontSize={20} />
                </div>
                <div
                  id="croba-merch"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Croba text="Merch" width={260} height={260} fontSize={20} />
                </div>
                <div
                  id="croba-media"
                  onClick={() => {
                    history.push("/event-creator/setup/media");
                  }}
                >
                  <Croba text="Media" width={260} height={260} fontSize={20} />
                </div>
              </div>
            </div>
            <div className="page-eventcreatorsetup__content__main__buttons__below">
              <Button
                border
                insideBorderDirection="HORIZONTAL"
                borderRadius
                color="white"
                fontSize={22}
                fontWeight="bold"
                paddingVertical={30}
                borderColor="#F0BB51"
                borderWidth={2}
                borderRadiusAmount={10}
                paddingVerticalOutside={6}
                width={600}
                height={60}
                fixedWidth
                fixedHeight
                hoverable={false}
                onClick={() => {}}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <div
                  style={{
                    width: 50,
                    height:44,
                    borderRadius: 100,
                    zIndex: 1000,
                    backgroundColor: "#0066FF",
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "50"
                  }}
                >
                  <span>+</span>
                </div> */}
                  <SpinButton
                    paddingVertical={12}
                    paddingHorizontal={0}
                    borderRadius
                    borderRadiusAmount={25}
                    backgroundColor="#FFFFFF"
                    color="#061B66"
                    fontSize={22}
                    fontWeight="bold"
                    extraPrice={false}
                    plusVisible
                    pinImgTop={15}
                    merchandiseTop={-32}
                    onClick={() => {
                      history.push("/event-creator/individual-seating");
                    }}
                  >
                    Specific Ticket NFT's
                    <div style={{paddingRight: 30}}></div>
                  </SpinButton>
                </div>
              </Button>
            </div>
          </div>
          <div className="page-eventcreatorsetup__content__main__svg">
            <img alt="owlonrock" src={OwlOnRockSvg} />
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <LinkButton
              border
              borderColor="#F0BB51"
              borderRadius
              borderRadiusAmount={15}
              borderOutside
              borderOutsideColor="#F0BB51"
              placeHolder="Enter URL"
              inputPaddingHorizontal={40}
              inputPaddingVertical={10}
              color="#102F82"
              onLinkButtonClick={() => {
                handleClose();
              }}
            />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default EventCreatorSetup;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
