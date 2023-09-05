import React from "react";
import CheckSvg from "../assets/svgs/check.svg";
import FolderSvg from "../assets/svgs/folder.svg";

interface INftTicketProps {
  check?: boolean;
  text?: string;
  group?: boolean;
  type?: "event-ticket" | "event-creator-ticket" | "event-gradient" | "event-standard-ticket";
  status?: "known" | "unknown";
  onClickFunction?: Function;
}

const NftTicket: React.FC<INftTicketProps> = ({
  check = false,
  text = "#1 - #30",
  group = false,
  type = "event-creator-ticket",
  status = "known",
  onClickFunction = () => {}
}) => {
  return status === "known" ? (
    <div className={["nft-ticket", type].join(" ")} onClick={() => {
      onClickFunction()
    }} style={{width:'auto'}}>
      <div className="nft-ticket__name">
        <div className="nft-ticket__name__inside">
          <span>Event Name</span>
        </div>
      </div>
      {!group && <div className="nft-ticket__image"></div>}
      {group && (
        <div className="nft-ticket__group">
          <img src={FolderSvg} />
        </div>
      )}
      {check && (
        <div className="nft-ticket__checkmark">
          <img src={CheckSvg} width={40} />
        </div>
      )}
      {!check && (
        <div className="nft-ticket__text">
          <span>{text}</span>
        </div>
      )}
    </div>
  ) : (
    <div className="nft-ticket-unknown">?</div>
  );
};

export default NftTicket;
