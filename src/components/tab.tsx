import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";
import LinkButton from "./linkbutton";
import Button from "./button";
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import FolderPlusSvg from "../assets/svgs/folderplus.svg";
import NftTicket from "../components/nftticket";
import { Modal, Box } from "@mui/material";
import TicketAllocator from "../components/ticketallocator";
import ESelectView from "../components/eselect";
import ForwardSvg from "../assets/svgs/forward.svg";

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

const CustomTabs = styled(Tabs)({
  backgroundColor: "transparent",
  borderRadius: 5,
});

const CustomTab = styled(Tab)({
  fontWeight: "bold",
  borderWidth: "2px",
  borderColor: "#F0BB51",
  color: "white",
  backgroundColor: "#041348",
  borderTopStyle: "solid",
  borderLeftStyle: "solid",
  borderRightStyle: "solid",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  marginLeft: 10,
  textTransform: "initial",
  zIndex: 10,
  "&.Mui-selected": {
    color: "white",
    backgroundColor: "#061B66 !important",
    borderWidth: 0,
    borderBottom: "none !important",
  },
  "&.MuiButtonBase-root": {
    minHeight: "15px !important",
    paddingTop: 4,
    paddingBottom: 4,
    marginTop: 22,
    //////////////////////////////
    fontWeight: "bold",
    borderWidth: "2px",
    borderColor: "#F0BB51",
    color: "white",
    backgroundColor: "#041348",
    borderTopStyle: "solid",
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 10,
    textTransform: "initial",
    zIndex: 10,
  },
});

interface IETabViewProps {
  type?: "upload" | "standard";
}

const ETabView: React.FC<IETabViewProps> = ({ type = "upload" }) => {
  const [value, setValue] = useState(0); // State to track the active tab

  const handleTabChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    setValue(value);
  };

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [viewOpen, setViewOpen] = React.useState(false);
  const handleViewClose = () => setViewOpen(false);

  return (
    <div className="molecule-tab">
      <div className={["tab-hider0", "tabhider-" + value].join(" ")}></div>
      <div className={["tab-hider1", "tabhider-" + value].join(" ")}></div>
      <div className={["tab-hider2", "tabhider-" + value].join(" ")}></div>
      <CustomTabs value={value} onChange={handleTabChange}>
        <CustomTab label="upload" />
        <CustomTab label="library" />
        <CustomTab label="URL" />
      </CustomTabs>

      {/* Content */}
      <div
        style={{
          backgroundColor: "#061B66",
          borderWidth: 2,
          borderColor: "#F0BB51",
          borderStyle: "solid",
          borderRadius: 5,
          padding: 20,
          minWidth: 505,
          minHeight: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {value === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
            }}
          >
            <Button
              backgroundColor="#F0BB51"
              color="#102F82"
              borderRadius
              paddingVertical={10}
              fontSize={18}
              fontWeight="bold"
              borderRadiusAmount={10}
              paddingHorizontal={20}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"20px"}}>Upload File +</div>
            </Button>
            <Button
              backgroundColor="#F0BB51"
              color="#102F82"
              borderRadius
              paddingVertical={10}
              fontSize={18}
              fontWeight="bold"
              borderRadiusAmount={10}
            >
              <div style= {{fontFamily:"InterBold", fontSize:"20px"}}>Upload Folder</div>
            </Button>
          </div>
        )}
        {value === 1 && (
          <div className="page-nfttotickets__content__main__nfts__nft-filter">
            <div className="page-nfttotickets__content__main__nfts__nft-filter__header">
              {type === "upload" && (
                <div className="page-nfttotickets__content__main__nfts__nft-filter__header__button">
                  <Button
                    paddingVertical={9}
                    borderRadiusAmount={10}
                    borderRadius
                  >
                    <img
                      src={FolderPlusSvg}
                      style={{
                        height: 16,
                      }}
                    />
                  </Button>
                </div>
              )}
              <div className="page-nfttotickets__content__main__nfts__nft-filter__header__select1">
                <ESelectView colorTheme="upload" />
              </div>
              <div className="page-nfttotickets__content__main__nfts__nft-filter__header__select2">
                <ESelectView colorTheme="upload" />
              </div>
              <div className="page-nfttotickets__content__main__nfts__nft-filter__header__search">
                <ESearchView colorTheme="upload" />
              </div>
              {type === "standard" && (
                <div
                  style={{
                    backgroundColor: "#F0BB51",
                    width: 40,
                    height: 40,
                    borderRadius: 30,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 15,
                    cursor: "pointer",
                  }}
                  onClick={() => {}}
                >
                  <img
                    src={ForwardSvg}
                    width={30}
                    height={30}
                    style={{ marginLeft: 4 }}
                  />
                </div>
              )}
            </div>
            <div className="page-nfttotickets__content__main__nfts__nft-filter__content">
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                check
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                check
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                check
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
              <NftTicket
                onClickFunction={() => {
                  setViewOpen(true);
                }}
                type={
                  type === "upload"
                    ? "event-creator-ticket"
                    : "event-standard-ticket"
                }
              />
            </div>
          </div>
        )}
        {value === 2 && (
          <div>
            <div
              style={{
                color: "white",
                fontSize: 48,
              }}
            >
              Enter URL
            </div>
            <LinkButton placeHolder="" linkButtonColor="#F0BB51" backgroundColor="#061B66" />
            <div
              style={{
                width: "100%",
                height: 2,
                backgroundColor: "#F0BB51",
              }}
            />
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "flex-start",
                color: "white",
                flexDirection: "column",
                padding: 30,
                gap: 5,
              }}
            >
              <span>- image (.png, .jpg ...)</span>
              <span>- video (.mp4, .gif ...)</span>
              <span>- audio (.mp3, .wav ...)</span>
              <span>- 3D model (.stl, .fbx ...)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ETabView;
