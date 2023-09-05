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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const UploadDataLimits = () => {
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  return (
    <div
      className="molecule-page page-uploaddatalimits"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-uploaddatalimits__content">
        <div className="page-uploaddatalimits__content__main">
          <div className="page-uploaddatalimits__content__main__buttons">
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
                  backgroundColor: "#253F9A",
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
                gap: 20,
              }}
            >
              <Button
                border
                borderRadius
                color="white"
                fontSize={22}
                paddingVertical={20}
                fontWeight="bold"
                backgroundColor="linear-gradient(180deg, #102F82 0%, #142252 100%)" 
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Upload Data Limits</div>
              </Button>
              <Button
                borderRadius
                fontSize={22}
                paddingVertical={20}
                color="white"
                fontWeight="bold"
                backgroundColor="#253F9A"
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>0.8 / 1 GB Used</div>
              </Button>

              <div className="page-uploaddatalimits__content__main__buttons__description">
                <div className="page-uploaddatalimits__content__main__buttons__description__media">
                  <div className="page-uploaddatalimits__content__main__buttons__description__media__inside">
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>User Media</span>
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>(~87.5%)</span>
                  </div>
                </div>
                <div className="page-uploaddatalimits__content__main__buttons__description__detail">
                  <div className="page-uploaddatalimits__content__main__buttons__description__detail__body">
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>~0.7 GB used</span>
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>~0.8 GB max</span>
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>15.3 MB ~ x% / user avg</span>
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>30MB ~ x% / user max</span>
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>~3MB ~ x% / user max</span>
                  </div>
                  <div className="page-uploaddatalimits__content__main__buttons__description__detail__title">
                    <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>= 87.5% = 0.7GB</span>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    backgroundColor: "#0066FF",
                    padding: 10,
                    borderRadius: 5,
                    color: "white",
                  }}
                >
                  <div style= {{fontFamily:"InterLight", fontSize:"18px"}}>GB/User</div>
                </div>
                <input
                  style={{
                    borderRadius: 5,
                    borderWidth: 0,
                    paddingLeft: 20,
                    border: "4px solid #0066FF",
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontWeight: "bold",
                    fontFamily: "InterLight",
                    minWidth: 350,
                  }}
                  placeholder={"0.8GB"}
                />
                <div
                  style={{
                    backgroundColor: "#0066FF",
                    padding: 10,
                    borderRadius: 5,
                    color: "white",
                  }}
                >
                  <div style= {{fontFamily:"InterLight", fontSize:"18px"}}>Uploads/User</div>
                </div>
                <input
                  style={{
                    borderRadius: 5,
                    borderWidth: 0,
                    border: "4px solid #0066FF",
                    paddingLeft: 20,
                    paddingTop: 5,
                    paddingBottom: 5,
                    paddingRight: 20,
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontWeight: "bold",
                    fontFamily: "InterLight",
                    minWidth: 350,
                  }}
                  placeholder={"30MB -> 0.03GB"}
                />
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 20,
                  paddingTop: 30,
                }}
              >
                <Button
                  borderRadius
                  borderRadiusAmount={40}
                  paddingVertical={20}
                  fontSize={22}
                  color="white"
                  fontWeight="bold"
                  backgroundColor="#253F9A"
                >
                  <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>SAVE</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDataLimits;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
