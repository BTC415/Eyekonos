import React from "react";
import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import useWindowHeight from "../hooks/useWindowHeight";

const NotFound = () => {
  const deviceHeight = useWindowHeight();
  return (
    <>
      <div
        className="molecule-page page-not-found"
        style={{
          height: deviceHeight - 150,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <img src={OwlOnRockSvg} width="15%" />
        <div style={{flexDirection:'column'}}>
          <h1 style={{ fontFamily:"InterBold", fontSize: 35, fontWeight: 'bold', color: 'blue', margin: 10 }}>page not found</h1>
          <a href="/"><h5 style={{ fontFamily:"InterBold",fontSize: 35, fontWeight: 'bold', color: 'blue', margin:10, textDecoration:'underline', display:'grid', placeItems:'center'}}>Go back</h5></a>
        </div>
        
      </div>
    </>
  );
};

export default NotFound;
