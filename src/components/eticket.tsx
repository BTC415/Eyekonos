import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const ETicketView = () => {
  const history = useHistory();

  return (
    <div className="eticket-view" onClick={() => {
      history.push("/event-creator/setup");
    }}>
        <div className="eticket-view__event-name">
            <div style={{fontFamily:"InterLight"}}>Event Name</div>
        </div>
        <div className="eticket-view__event-location">
        <div style={{fontFamily:"InterLight"}}>@Location</div>
        </div>
        <div className="eticket-view__event-date">
        <div style={{fontFamily:"InterLight"}}>Date</div>
        </div>
    </div>
  );
};

export default ETicketView;