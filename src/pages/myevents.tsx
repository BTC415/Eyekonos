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
import CrossSvg from "../assets/svgs/cross.svg";
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
import useWindowHeight from "../hooks/useWindowHeight";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as MUIButton from "@mui/material/Button";
import { useHistory, useLocation } from "react-router-dom";
import ClaimTicketBox from "../components/claimticketbox";

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

const MyEvents = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const handleDetailsClose = () => setDetailsOpen(false);

  const [selectTicketOpen, setSelectedTicketOpen] = React.useState(false);
  const handleSelectTicketClose = () => setSelectedTicketOpen(false);

  const [selectEventShow, setSelectEventShow] = React.useState<boolean>(false);

  const [myEventTitle, setMyEventTitle] = React.useState("My Events");

  const [ticketSelected, setTicketSelected] = React.useState<boolean>(false);
  const history = useHistory();

  return (
    <div
      className="molecule-page page-myevents"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-myevents__content">
        <div className="page-myevents__content__main">
          <div className="page-myevents__content__main__buttons">
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
                marginTop: 9,
                cursor: "pointer",
              }}
              onClick={() => history.goBack()}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <div className="page-myevents__content__main__buttons__right">
              <Button
                border
                borderRadius
                color="white"
                // fontSize={25}
                fontSize="clamp(25px, 2vmin, 30px)"
                fontWeight="bold"
                paddingVertical={20}
                borderColor="#F0BB51"
                borderWidth={2}
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>{myEventTitle}</div>
              </Button>

              {!selectEventShow && (
                <div className="page-myevents__content__main__buttons__right__twobtns">
                  <Button
                    borderRadius
                    paddingVertical={20}
                    fontSize={24}
                    color="white"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <div style= {{fontFamily:"InterLight", fontSize:"24px"}}>{open ? `Claim Ticket` : `Redeem Ticket`}</div>
                  </Button>
                  <Button
                    borderRadius
                    paddingVertical={20}
                    fontSize={24}
                    color="white"
                    onClick={() => {
                      setSelectEventShow(true);
                      setMyEventTitle("My Events - Transfer Ticket");
                    }}
                  >
                    <div style= {{fontFamily:"InterLight", fontSize:"24px"}}>Transfer Ticket</div>
                  </Button>
                </div>
              )}
              {selectEventShow && (
                <div className="page-myevents__content__main__buttons__right__twobtns">
                  <Button
                    borderRadius
                    paddingVertical={20}
                    color="white"
                    fontSize={25}
                    fixedWidth
                    width={"50%"}
                  >
                    <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Select Event</div>
                  </Button>
                  <Button
                    borderRadius
                    fixedWidth
                    width={60}
                    fixedHeight
                    height={60}
                    paddingVertical={0}
                    fontSize={25}
                    color="white"
                    onClick={() => {
                      setSelectEventShow(false);
                      setMyEventTitle("My Events");
                    }}
                  >
                    <img src={CrossSvg} width={40} height={40} />
                  </Button>
                </div>
              )}
              <div className="page-myevents__content__main__buttons__right__table">
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
                <ClaimTicket
                  onClickFunction={() => {
                    if (selectEventShow) setSelectedTicketOpen(true);
                    else history.push("/event");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="page-myevents__content__main__svg">
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
            <div
              style={{
                backgroundColor: "#102F82",
                borderRadius: 10,
                width: 30,
                height: 30,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 30,
                color: "white",
                padding: 5,
                marginRight: 30,
                fontFamily: "Inter",
                border: "1px solid #F0BB51",
                marginBottom: 20,
                cursor: "pointer",
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <img src={BackSvg} width={40} height={40} />
            </div>
            <LinkButton
              border
              borderColor="#F0BB51"
              borderRadius
              borderRadiusAmount={5}
              borderOutside
              borderOutsideColor="#F0BB51"
              placeHolder="Enter ticket claim code ..."
              color="#102F82"
              onLinkButtonClick={() => {
                handleClose();
                setDetailsOpen(true);
              }}
            />
          </Box>
        </Modal>
        <Modal
          open={detailsOpen}
          onClose={handleDetailsClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingBottom: 40,
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#102F82",
                      borderRadius: 10,
                      width: 30,
                      height: 30,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontSize: 30,
                      color: "white",
                      padding: 5,
                      marginRight: 30,
                      fontFamily: "Inter",
                      border: "1px solid #F0BB51",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setDetailsOpen(false);
                    }}
                  >
                    <img src={BackSvg} width={40} height={40} />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 40,
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
                    borderRadiusAmount={10}
                    paddingVerticalOutside={6}
                    width={600}
                    fixedWidth
                    insideBorderDirection="HORIZONTAL"
                    hoverable={false}
                  >
                    <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Ticket Details</div>
                  </Button>
                  <Button
                    border
                    borderRadius
                    color="white"
                    fontSize={24}
                    fontWeight="bold"
                    paddingVertical={20}
                    borderColor="#F0BB51"
                    borderWidth={2}
                    borderRadiusAmount={10}
                    paddingVerticalOutside={6}
                    width={480}
                    height={240}
                    fixedWidth
                    fixedHeight
                    insideBorderDirection="VERTICAL"
                    hoverable={false}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                      }}
                    >
                      Event - <br />
                      Ticket # - 12345
                      <br />
                      Ticket Class - Basic Entry
                      <br />
                      NFT’s Claimed - (0)
                    </p>
                  </Button>
                  <Button
                    borderRadius
                    color="white"
                    fontSize={22}
                    fontWeight="bold"
                    paddingVertical={0}
                    borderColor="#F0BB51"
                    borderWidth={1}
                    borderRadiusAmount={30}
                    paddingVerticalOutside={6}
                    width={240}
                    height={60}
                    fixedWidth
                    fixedHeight
                    borderOutside
                    borderOutsideColor="#F0BB51"
                    backgroundColor="linear-gradient(180deg, #102F82 0%, #253F9A 100%)"
                  >
                    Redeem
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <Modal
          open={selectTicketOpen}
          onClose={handleSelectTicketClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  paddingBottom: 40,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 40,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 40,
                    }}
                  >
                    <div
                      style={{
                        width: 60,
                        height: 60,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#102F82",
                          borderRadius: 10,
                          width: 30,
                          height: 30,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 30,
                          color: "white",
                          padding: 5,
                          marginRight: 30,
                          fontFamily: "Inter",
                          border: "1px solid #F0BB51",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setSelectedTicketOpen(false);
                        }}
                      >
                        <img src={BackSvg} width={40} height={40} />
                      </div>
                    </div>
                    <Button
                      borderRadius
                      color="white"
                      fontSize={22}
                      fontWeight="bold"
                      paddingVertical={20}
                      borderColor="#F0BB51"
                      borderWidth={2}
                      borderRadiusAmount={10}
                      paddingVerticalOutside={6}
                      width={300}
                      height={60}
                      fixedWidth
                      fixedHeight
                      borderOutside
                      borderOutsideColor="#F0BB51"
                    >
                      <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Select Ticket</div>
                    </Button>
                  </div>
                  {!ticketSelected &&
                    [0, 1, 2, 3].map((item, index) => {
                      return (
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
                          onClick={() => {
                            setTicketSelected(true);
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <div
                              style={{
                                width: "40%",
                                height: "80%",
                                backgroundColor: "white",
                                color: "#102F82",
                                borderTopLeftRadius: 40,
                                borderBottomLeftRadius: 40,
                                fontSize: 20,
                                padding: 10,
                                borderRight: "1px solid #102F82",
                                fontFamily: "Inter",
                              }}
                            >
                              <div style= {{fontFamily:"InterLight", fontSize:"18px"}}>(#123-ticket-number) ticket-class-name</div>
                            </div>
                            <div
                              style={{
                                width: "40%",
                                height: "80%",
                                backgroundColor: "white",
                                color: "#102F82",
                                borderTopRightRadius: 40,
                                borderBottomRightRadius: 40,
                                fontSize: 20,
                                padding: 10,
                                borderLeft: "1px solid #102F82",
                                fontFamily: "Inter",
                              }}
                            >
                              <div style= {{fontFamily:"InterLight", fontSize:"18px"}}>(#123-ticket-number) ticket-class-name</div>
                            </div>
                          </div>
                        </Button>
                      );
                    })}
                  {ticketSelected && (
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
                      onClick={() => {}}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "40%",
                            height: "80%",
                            backgroundColor: "white",
                            color: "#102F82",
                            borderTopLeftRadius: 40,
                            borderBottomLeftRadius: 40,
                            fontSize: 20,
                            padding: 10,
                            borderRight: "1px solid #102F82",
                            fontFamily: "Inter",
                          }}
                        >
                          (#123-ticket-number) ticket-class-name
                        </div>
                        <div
                          style={{
                            width: "40%",
                            height: "80%",
                            backgroundColor: "white",
                            color: "#102F82",
                            borderTopRightRadius: 40,
                            borderBottomRightRadius: 40,
                            fontSize: 20,
                            padding: 10,
                            borderLeft: "1px solid #102F82",
                            fontFamily: "Inter",
                          }}
                        >
                          (#123-ticket-number) ticket-class-name
                        </div>
                      </div>
                    </Button>
                  )}
                  {ticketSelected && (
                    <LinkButton
                      border
                      borderColor="#F0BB51"
                      borderRadius
                      borderRadiusAmount={5}
                      borderOutside
                      borderOutsideColor="#F0BB51"
                      placeHolder="Enter recipient email..."
                      color="#102F82"
                      paddingVertical={20}
                      fontSize={20}
                      onLinkButtonClick={() => {}}
                    />
                  )}
                  {ticketSelected && (
                    <Button
                      borderRadius
                      color="white"
                      fontSize={22}
                      fontWeight="bold"
                      paddingVertical={0}
                      borderColor="#F0BB51"
                      borderWidth={1}
                      borderRadiusAmount={30}
                      paddingVerticalOutside={6}
                      width={240}
                      height={60}
                      fixedWidth
                      fixedHeight
                      borderOutside
                      borderOutsideColor="#F0BB51"
                      onClick={() => {
                        setTicketSelected(false);
                        setSelectedTicketOpen(false);
                      }}
                    >
                      Confirm
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default MyEvents;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
