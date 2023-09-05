import React from "react";
import LeftBottomSvg from "../assets/svgs/leftbottom.svg";
import TopRightSvg from "../assets/svgs/topright.svg";
import AddCollaboratorSvg from "../assets/svgs/addcollaborator.png";
import OpenAdmissionsPortalLinkSvg from "../assets/svgs/openadmissionsportallink.svg";

const QRScanner = () => {
  return (
    <div className="component-qrscanner">
      <div className="component-qrscanner__scanner">
        <div className="component-qrscanner__scanner__leftbottom">
          <img src={LeftBottomSvg} style={{ width: 60, height: 60 }} />
        </div>
        <div className="component-qrscanner__scanner__topright">
          <img src={TopRightSvg} style={{ width: 60, height: 60 }} />
        </div>
        <div className="component-qrscanner__scanner__scanner"></div>
      </div>
      <div className="component-qrscanner__buttons">
        <div className="component-qrscanner__buttons__addcollaborator">
          <img src={AddCollaboratorSvg} style={{ width: 40 }} />
          <span style= {{fontFamily:"InterBold", fontSize:"20px"}}>Collaborators</span>
        </div>
        <div className="component-qrscanner__buttons__openadmissionsportallink">
          <img src={OpenAdmissionsPortalLinkSvg} style={{ width: 40 }} />
          <span style= {{fontFamily:"InterBold", fontSize:"20px"}}>Scanner Link</span>
        </div>
      </div>
    </div>
  );
};

export default QRScanner;
