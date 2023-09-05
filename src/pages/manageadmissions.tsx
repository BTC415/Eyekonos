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
import ESelectView from "../components/eselect";
import useDeviceType from "../hooks/useDeviceType";
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const ManageAdmissions = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();

  return (
    <div className="molecule-page page-manageadmissions" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-manageadmissions__content">
        <div className="page-manageadmissions__content__main">
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
              history.push("/event-creator/admissions/manage");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Manage Admissions</div>
          </Button>
          <Button borderRadius paddingVertical={20} color="#F0BB51" fontWeight="bold" onClick={() => {
              history.push("/event-creator/admissions/scan");
          }}>
            <div style= {{fontFamily:"InterBold", fontSize:"28px"}}>Scan QR / Entry Code</div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManageAdmissions;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
