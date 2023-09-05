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
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useParams } from "react-router-dom";

interface RouteParams {
  noData: string | undefined;
}

const Create = (props: any) => {
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const { noData } = useParams<RouteParams>();
  const [stage, setStage] = React.useState<"create" | "collaboration">(
    "create"
  );

  return (
    <div
      className="molecule-page page-create"
      style={
        {
          // height: deviceHeight - 90,
        }
      }
    >
      <div className="page-create__content">
        {noData === "no" && (
          <div className="page-create__content__main">
            <div className="page-create__content__main__buttons">
              <Button
                borderRadius
                borderRadiusAmount={12}
                paddingVertical={15}
                paddingHorizontal={20}
                color="white"
                hoverable={false}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"16px"}}>New Event +</div>
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
                hoverable={false}
                borderRadiusAmount={12}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"16px"}}>Collaborations</div>
              </Button>
            </div>
            <span
              style={{
                color: "#102F82",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: 32,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "normal",
              }}
            >
              My Events
            </span>
            <div className="page-create__content__main__buttons__link">
              <span style={{ fontWeight: "bold" }}>No Events to Display</span>
              <a
                style={{ fontWeight: "bold" }}
                onClick={() => {
                  history.push("/event-creator/new-event");
                }}
              >
                Create New Event?
              </a>
            </div>
          </div>
        )}
        {noData !== "no" && (
          <div className="page-create__content__main-filter">
            <div className="page-create__content__main-filter__buttons">
              {stage === "create" && (
                <Button
                  borderRadius
                  paddingVertical={15}
                  color="white"
                  backgroundColor="#102F82"
                  borderRadiusAmount={10}
                  fontWeight="bold"
                  fixedWidth
                  width="50%"
                  onClick={() => {
                    history.push("/event-creator/new-event");
                  }}
                >
                  <div style= {{fontFamily:"InterBold", fontSize:"16px"}}>New Event +</div>
                </Button>
              )}
              {stage === "collaboration" && (
                <div
                  className = "collab-div"
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
                    marginRight: "11%",
                    fontFamily: "Inter",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setStage("create");
                  }}
                >
                  <img src={BackSvg} width={40} height={40} />
                </div>
              )}
              <div
                style={{
                  width: 10,
                }}
              ></div>
              <Button
                borderRadius
                paddingVertical={15}
                color="white"
                backgroundColor="#102F82"
                borderRadiusAmount={10}
                fontWeight="bold"                
                fixedWidth
                width="50%"
                onClick={() => {
                  setStage("collaboration");
                }}
              >
                <div style= {{fontFamily:"InterBold", fontSize:"16px"}}>Collaborations</div>
              </Button>
            </div>
            <div className="page-create__content__main-filter__event-filter">
              <div className="page-create__content__main-filter__event-filter__header">
                <div className="page-create__content__main-filter__event-filter__header__select">
                  <ESelectView />
                </div>
                <div className="page-create__content__main-filter__event-filter__header__title">
                  <span>{stage === "create" ? `My Events` : `Events`}</span>
                </div>
                <div className="page-create__content__main-filter__event-filter__header__search">
                  <ESearchView />
                </div>
              </div>
              <div className="page-create__content__main-filter__event-filter__content">
                <ETicketView />
                <ETicketView />
                <ETicketView />
                <ETicketView />
              </div>
            </div>
          </div>
        )}
        <div className="page-create__content__svg">
          <img alt="owlonrock" src={OwlOnRockSvg} />
        </div>
      </div>
    </div>
  );
};

export default Create;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
