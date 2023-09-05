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
import Editabletable from "../components/editabletable";
import IOSSwitch from "../components/iosswitch";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const ManageCollaborators = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div
      className="molecule-page page-managecollaborators"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-managecollaborators__content">
        <div className="page-managecollaborators__content__main">
          <div className="page-managecollaborators__content__main__buttons">
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
                history.push("/event-creator/setup");
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
              borderColor="#F0BB51"
              borderWidth={2}
              hoverable={false}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Manage Collaborators</div>
            </Button>
          </div>
          <div className="page-managecollaborators__content__main__options">
            <ESelectView />
            <Button
                borderRadius
                color="white"
                paddingVertical={9}
                borderRadiusAmount={7}
                minWidth={100}
                width={180}
                fixedWidth
              >
                <div style= {{fontFamily:"InterLight", fontSize:"18px"}}>New +</div>
              </Button>
            <ESearchView />
          </div>
          <div className="page-managecollaborators__content__main__table">
            <Editabletable colorTheme={"light"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCollaborators;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
