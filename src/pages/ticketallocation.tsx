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
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TicketAllocator from "../components/ticketallocator";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "30%",
  transform: "translate(0%, 0%)",
  width: "40%",
  bgcolor: "transparent",
  border: "2px solid #00000000",
  boxShadow: 0,
  p: 4,
};

const TicketAllocation = () => {
  const deviceType = useDeviceType();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (itemIndex: string) => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-ticketallocation" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-ticketallocation__content">
        <div className="page-ticketallocation__content__main">
          <div className="page-ticketallocation__content__main__buttons">
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
              fontSize={23}
              fontWeight="bold"
              paddingVertical={20}
              borderColor="#F0BB51"
              borderWidth={2}
            >
              <span>Event Details</span>
            </Button>
          </div>
          <div className="page-ticketallocation__content__main__table">
            <div className="page-ticketallocation__content__main__table__button">
              <SpinButton
                paddingVertical={12}
                paddingHorizontal={20}
                borderRadius
                borderRadiusAmount={25}
                color="white"
                fontSize={22}
                fontWeight="bold"
                pinImgTop={50}
                onClick={() => {
                  setOpen(true)
                }}
              >
                Add individual Seating
              </SpinButton>
            </div>
            <span>*Individual Seating allows NFT's to be given to specific seats*</span>
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
        </div>
      </div>
    </div>
  );
};

export default TicketAllocation;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
