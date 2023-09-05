import React from "react";

interface IContainerProps {
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ className, children }) => {
  return <div className={["component-container", className].join(' ')}>{children}</div>;
};

export default Container;
