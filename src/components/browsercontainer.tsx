import React from "react";

interface IBrowserContainerProps {
  children?: React.ReactNode;
}

const BrowserContainer: React.FC<IBrowserContainerProps> = ({ children }) => {
  return <div className="browser-container">{children}</div>;
};

export default BrowserContainer;
