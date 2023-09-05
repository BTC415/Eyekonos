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
import CrossSvg from "../assets/svgs/crossBlack.svg";
import useDeviceType from "../hooks/useDeviceType";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  datePicker: {
    "& .MuiInputBase-root": {
      backgroundColor: "white",
      borderRadius: "40px",
      borderWidth: 0,
      border: "none",
      fontSize: "16px",
      padding: "0px",
      width: "100%",
      position: "relative",
    },
    "& .MuiInputBase-root:hover": {
      border: "none",
    },
    "& .MuiInputBase-root.Mui-focused": {
      border: "none",
    },
    "& .MuiInputAdornment-root button": {
      color: "#1062FF",
    },
    "& .MuiPickersDay-daySelected": {
      backgroundColor: "#1062FF",
      color: "white",
    },
    "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root": {
      opacity: 0,
    },
    "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "0px 0px 0px 10px",
      width: "calc(100% - 60px)",
      "&:focused": {
        borderTop: "2px solid #1062FF",
      },
    },
    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
      display: "none",
    },
  },
}));

const TicketDesign = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const [widthValue, setWidthValue] = React.useState<any>(0);
  const [heightValue, setHeightValue] = React.useState<any>(0);
  const classes = useStyles();

  return (
    <div
      className="molecule-page page-ticketdesign"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-ticketdesign__content">
        <div className="page-ticketdesign__content__main">
          <div className="page-ticketdesign__content__main__buttons">
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 5,
                marginRight: 30,
              }}
            >
              <div
                style={{
                  backgroundColor: "#102F82",
                  borderRadius: 10,
                  width: 40,
                  height: 40,
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: 10,
              }}
            >
              <Button
                border
                borderRadius
                color="white"
                fontSize={22}
                paddingVertical={20}
                fontWeight="bold"
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Ticket Design</div>
              </Button>
              <Button
                borderRadius
                fontSize={22}
                paddingVertical={20}
                color="white"
                fontWeight="bold"
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>All Tickets</div>
              </Button>
              <Button
                borderRadius
                fontSize={16}
                paddingVertical={10}
                color="white"
                fontWeight="bold"
                fixedWidth
                width={200}
                marginOutside={20}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"15px"}}>Upload Image +</div>
              </Button>
            </div>
            <div style={{ width: 100 }}></div>
          </div>
          <div className="page-ticketdesign__content__main__table">
            <div className="page-ticketdesign__content__main__table__description">
              <div className="page-ticketdesign__content__main__table__description__inputs">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                  }}
                >
                  <input
                    style={{
                      borderRadius: 5,
                      borderWidth: 0,
                      paddingLeft: 20,
                      border: "4px solid #0066FF",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 20,
                      fontSize: 17,
                      lineHeight: 1.7,
                      fontWeight: "bolder",
                      fontFamily: "InterLight",
                      minWidth: 80,
                      width: 80,
                    }}
                    type="number"
                    max="5000"
                    placeholder={""}
                    value={widthValue}
                    onChange={(event) => {
                      if (Number(event.target.value) < 5000) {
                        setWidthValue(event.target.value);
                      }
                    }}
                  />
                  <span>Width</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                  }}
                >
                  <img
                    src={CrossSvg}
                    width={30}
                    height={30}
                    style={{
                      paddingLeft: 40,
                      paddingRight: 40,
                    }}
                  />
                  <div style={{ height: 15 }}></div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column-reverse",
                  }}
                >
                  <input
                    style={{
                      borderRadius: 5,
                      borderWidth: 0,
                      paddingLeft: 20,
                      border: "4px solid #0066FF",
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingRight: 20,
                      fontSize: 17,
                      lineHeight: 1.7,
                      fontWeight: "bolder",
                      fontFamily: "InterLight",
                      minWidth: 80,
                      width: 80,
                    }}
                    type="number"
                    max="5000"
                    placeholder={""}
                    value={heightValue}
                    onChange={(event) => {
                      if (Number(event.target.value) < 5000) {
                        setHeightValue(event.target.value);
                      }
                    }}
                  />
                  <span>Height</span>
                </div>
              </div>
              <div className="page-ticketdesign__content__main__table__description__additional">
                <div style={{ flex: 1 }}></div>
                <div className="page-ticketdesign__content__main__table__description__additional__overview">
                  <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical">
                    <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__amount">
                      {heightValue + "px"}
                    </div>
                    <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__ruler">
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__ruler__horizontal-bar"></div>
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__ruler__vertical-ruler"></div>
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__ruler__horizontal-bar"></div>
                    </div>
                    <div className="page-ticketdesign__content__main__table__description__additional__overview__vertical__ticket"></div>
                  </div>
                  <div className="page-ticketdesign__content__main__table__description__additional__overview__horizontal">
                    <div className="page-ticketdesign__content__main__table__description__additional__overview__horizontal__ruler">
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__horizontal__ruler__vertical-bar"></div>
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__horizontal__ruler__horizontal-ruler"></div>
                      <div className="page-ticketdesign__content__main__table__description__additional__overview__horizontal__ruler__vertical-bar"></div>
                    </div>
                    <div>{widthValue + "px"}</div>
                  </div>
                </div>
                <div
                  className="page-ticketdesign__content__main__table__description__additional__inputs"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#102F82",
                        padding: 8,
                        borderRadius: 5,
                        color: "white",
                        verticalAlign: "middle",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        width: 100,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ width: 100 }}>Translate X</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        borderRadius: 5,
                        color: "black",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: 30,
                      }}
                    >
                      <input
                        style={{
                          borderRadius: 5,
                          borderWidth: 0,
                          paddingLeft: 20,
                          border: "4px solid #0066FF",
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 20,
                          fontSize: 17,
                          lineHeight: 1.7,
                          fontWeight: "bolder",
                          fontFamily: "InterLight",
                          minWidth: 80,
                          width: 80,
                        }}
                        type="number"
                        max="5000"
                        placeholder={""}
                        value={heightValue}
                        onChange={(event) => {
                          if (Number(event.target.value) < 5000) {
                            setHeightValue(event.target.value);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#102F82",
                        padding: 8,
                        borderRadius: 5,
                        color: "white",
                        verticalAlign: "middle",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        width: 100,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ width: 100 }}>Translate Y</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        borderRadius: 5,
                        color: "black",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: 30,
                      }}
                    >
                      <input
                        style={{
                          borderRadius: 5,
                          borderWidth: 0,
                          paddingLeft: 20,
                          border: "4px solid #0066FF",
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 20,
                          fontSize: 17,
                          lineHeight: 1.7,
                          fontWeight: "bolder",
                          fontFamily: "InterLight",
                          minWidth: 80,
                          width: 80,
                        }}
                        type="number"
                        max="5000"
                        placeholder={""}
                        value={heightValue}
                        onChange={(event) => {
                          if (Number(event.target.value) < 5000) {
                            setHeightValue(event.target.value);
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#102F82",
                        padding: 8,
                        borderRadius: 5,
                        color: "white",
                        verticalAlign: "middle",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 30,
                        width: 100,
                        marginTop: 2,
                      }}
                    >
                      <span style={{ width: 100 }}>Scale %</span>
                    </div>
                    <div
                      style={{
                        backgroundColor: "transparent",
                        padding: 10,
                        borderRadius: 5,
                        color: "black",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        height: 30,
                      }}
                    >
                      <input
                        style={{
                          borderRadius: 5,
                          borderWidth: 0,
                          paddingLeft: 20,
                          border: "4px solid #0066FF",
                          paddingTop: 5,
                          paddingBottom: 5,
                          paddingRight: 20,
                          fontSize: 17,
                          lineHeight: 1.7,
                          fontWeight: "bolder",
                          fontFamily: "InterLight",
                          minWidth: 80,
                          width: 80,
                        }}
                        type="number"
                        max="5000"
                        placeholder={""}
                        value={heightValue}
                        onChange={(event) => {
                          if (Number(event.target.value) < 5000) {
                            setHeightValue(event.target.value);
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Save</div>
              </Button>
            </div>
          </div>
          <div className="page-ticketdesign__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDesign;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
