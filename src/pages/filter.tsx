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

const Filter = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();

  return (
    <div className="molecule-page page-filter" style={{
      height: deviceHeight - 90
    }}>
      <div className="page-filter__content">
        <div className="page-filter__content__main">
          <div className="page-filter__content__main__buttons">
            <Button
              borderRadius
              paddingVertical={15}
              color="white"
              backgroundColor="#102F82"
              borderRadiusAmount={10}
              fontWeight="bold"
            >
              New Event +
            </Button>
            <div
              style={{
                width: 65,
              }}
            ></div>
            <Button
              borderRadius
              paddingVertical={15}
              color="white"
              backgroundColor="#102F82"
              borderRadiusAmount={10}
              fontWeight="bold"
            >
              Collaborations
            </Button>
          </div>
          <div className="page-filter__content__main__event-filter">
            <div className="page-filter__content__main__event-filter__header">
              <div className="page-filter__content__main__event-filter__header__select">
                <ESelectView />
              </div>
              <div className="page-filter__content__main__event-filter__header__title">
                <span>My Events</span>
              </div>
              <div className="page-filter__content__main__event-filter__header__search">
                <ESearchView />
              </div>
            </div>
            <div className="page-filter__content__main__event-filter__content">
              <ETicketView />
              <ETicketView />
              <ETicketView />
              <ETicketView />
            </div>
          </div>
        </div>
        <div className="page-filter__content__svg">
          <img alt="owlonrock" src={OwlOnRockSvg} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
