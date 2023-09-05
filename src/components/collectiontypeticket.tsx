import React from "react";
import CheckSvg from "../assets/svgs/check.svg";
import FolderSvg from "../assets/svgs/folder.svg";
import CollectionTypeSvg from "../assets/svgs/collectiontype.svg";
import NFTStandardSvg from "../assets/svgs/nftstandard.svg";
import BothDirectionSvg from "../assets/svgs/bothdirection.svg";

interface INftTicketProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  type?: "normal" | "bottomfilled";
  separator?: boolean;
}

const CollectionTypeTicket: React.FC<INftTicketProps> = ({
  title = "",
  subtitle = "",
  children,
  type = "normal",
  separator = true,
}) => {
  return (
    <div className="component-collection-type-ticket">
      {type === "normal" && <img className="component-collection-type-ticket__mainimg" src={CollectionTypeSvg} />}
      {type === "bottomfilled" && <img className="component-collection-type-ticket__mainimg" src={NFTStandardSvg} />}
      {type === "bottomfilled" && <img className="component-collection-type-ticket__subimg" src={BothDirectionSvg} />}
      <span className="component-collection-type-ticket__title">{title}</span>
      <span className="component-collection-type-ticket__subtitle">{subtitle}</span>
      {separator && <div className="component-collection-type-ticket__separator"></div>}
      <div className="component-collection-type-ticket__children">
        {children}
      </div>
    </div>
  );
};

export default CollectionTypeTicket;
