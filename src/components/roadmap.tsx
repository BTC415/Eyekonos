import React from "react";

interface IRoadmap {
  isChecked?: boolean;
}

const RoadMap: React.FC<IRoadmap> = ({ children, isChecked }) => {
  return (
    <div className="component-roadmap">
      {isChecked ? (
        <div className="component-roadmap__img-checked" />
      ) : (
        <div className="component-roadmap__img-unchecked" />
      )}
      <div className="component-roadmap__text">{children}</div>
    </div>
  );
};

export default RoadMap;
