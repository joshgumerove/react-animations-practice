import React from "react";

import "./Backdrop.css";

const backdrop = (props) => {
  const cssClasses = [
    "Backdrop",
    props.show ? "BackdropOpen" : "BackdropClosed",
  ];
  return <div className={cssClasses.join(" ")}></div>;
};

// interesting pattern

export default backdrop;
