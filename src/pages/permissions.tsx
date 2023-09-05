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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Permissions = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-permissions" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-permissions__content">
        <div className="page-permissions__content__main">
          <div className="page-permissions__content__main__buttons">
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
              color="#F0BB51"
              fontSize={22}
              fontWeight="bold"
              paddingVertical={5}
              borderColor="white"
              borderWidth={2}
            >
              <div>
                <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>Permissions</span>
                <br />
                <span style= {{fontFamily:"InterLight", fontSize:"18px"}}>- email@website.com</span>
              </div>
            </Button>
          </div>
          <div className="page-permissions__content__main__table">
            <RadioTable />
            <div className="page-permissions__content__main__table__button">
              <Button
                paddingVertical={10}
                borderRadius
                borderRadiusAmount={25}
                color="white"
                fontSize={22}
                fontWeight="bold"
              >
                <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>SAVE</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
