import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{
        border: "1px",
        height: "100px",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        border: "2px solid",
      }}
    >
      <h5>{props.value} </h5>
    </div>
  );
};

export default Square;
