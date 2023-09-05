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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";
import { TextField } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { makeStyles } from "@material-ui/core/styles";
import IOSSwitch from "../components/iosswitch";
import dayjs, { Dayjs } from 'dayjs';

const useStyles = makeStyles((theme) => ({
  datePicker: {
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      borderRadius: "40px",
      borderWidth: 0,
      border: "none",
      fontSize: "16px",
      padding: "0px",
      width: "100%",
      position: "relative",
      color: "#F0E051",
    },
    "& .MuiInputBase-root:hover": {
      border: "none",
    },
    "& .MuiInputBase-root.Mui-focused": {
      border: "none",
    },
    "& .MuiInputAdornment-root button": {
      color: "#F0E051",
    },
    "& .MuiPickersDay-daySelected": {
      backgroundColor: "#F0E051",
      color: "white",
    },
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
      opacity: 0,
    },
    "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "0px 0px 0px 10px",
      width: "85px",
      "&:focused": {
        borderTop: "2px solid #1062FF",
      },
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      display: "none",
    },
    "& .css-1yq5fb3-MuiButtonBase-root-MuiIconButton-root": {
      paddingTop: 0,
    },
    "& .css-i4bv87-MuiSvgIcon-root": {
      fontSize: "1.2rem",
      paddingTop: 10,
      paddingLeft: 5,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none !important",
    },
  },
}));

const Settings = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const classes = useStyles();

  return (
    <div
      className="molecule-page page-settings"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-settings__content">
        <div className="page-settings__content__main">
          <div className="page-settings__content__main__buttons">
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
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Settings</div>
            </Button>
            <div style={{ width: 100 }}></div>
          </div>
          <div className="page-settings__content__main__table">
            <div className="page-settings__content__main__table__description">
              <Button
                border
                borderRadius
                insideBorderDirection="VERTICAL"
                hoverable={false}
                marginOutside={0}
                paddingHorizontal={20}
                paddingVertical={10}
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
                    className="page-settings__content__main__table__description__rows"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      color: "white",
                      padding: 20,
                      gap: 3,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 30,
                        width: "100%",
                        borderBottom: "1px solid white",
                        paddingTop: 10,
                        paddingBottom: 10,
                        fontWeight: "bold",
                      }}
                    >
                      <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>NFT Minting Times</span>
                    </div>
                    <div
                      style={{
                        borderBottom: "1px solid white",
                        width: "100%",
                        paddingBottom: 5,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "grid",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection:'column'
                        }}
                      >
                        <div
                          style={{
                            textAlign: "left",
                            paddingTop: 10,
                            paddingBottom: 8,
                          }}
                        >
                          <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>NFT Mint Start Time</span>
                        </div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DatePicker"]}>
                            <DatePicker
                              label="Basic date picker"
                              className={classes.datePicker}
                              format="DD/MM/YYYY"
                              defaultValue={dayjs(new Date())}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>No</div>
                        <IOSSwitch checkedTrackColor="#F0E051" />
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>Yes</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 30,
                        width: "100%",
                        borderBottom: "1px solid white",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>Ticket Transfers Allowed</span>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>No</div>
                        <IOSSwitch checkedTrackColor="#F0E051" />
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>Yes</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        gap: 30,
                        borderBottom: "1px solid white",
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          gap: 3,
                        }}
                      >
                        <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>Ticket eYeKONs</span>
                        <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>(Allow Ticket to be Minted as NFT?)</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>No</div>
                        <IOSSwitch checkedTrackColor="#F0E051" />
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>Yes</div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        gap: 30,
                        paddingTop: 10,
                        paddingBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          gap: 3,
                        }}
                      >
                        <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>Admission Verification Required?</span>
                        <span style= {{fontFamily:"InterBold", fontSize:"18px"}}>(Only Mint Scanned Tickets)</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>No</div>
                        <IOSSwitch checkedTrackColor="#F0E051" />
                        <div style= {{fontFamily:"InterBold", fontSize:"18px"}}>Yes</div>
                      </div>
                    </div>
                  </div>
                  <div className="page-settings__content__main__table__description__totalprice" style= {{fontFamily:"InterBold", fontSize:"18px"}}>
                    *Change the default properties of tickets*
                  </div>
                </div>
              </Button>
            </div>
            <div className="page-createevent__content__main__table__button">
              <Button
                paddingVertical={12}
                paddingHorizontal={30}
                borderRadius
                borderRadiusAmount={25}
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                <div style= {{fontFamily:"InterBold", fontSize:"20px"}}>SAVE</div>
              </Button>
            </div>
          </div>
          <div className="page-settings__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
