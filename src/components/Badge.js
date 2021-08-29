import React from "react";

const Badge = (props) => {
  const style = {
    complete: {
      backgroundColor: "#FF6060",
      fontSize: "0.6rem",
      fontWeight: "normal",
      color: "white",
      padding: "3px 7px",
      borderRadius: "15px",
      marginLeft: "5px",
    },
    progress: {
      backgroundColor: "#5EA824",
      fontSize: "0.6rem",
      fontWeight: "normal",
      color: "white",
      padding: "3px 7px",
      borderRadius: "15px",
      marginLeft: "5px",
    },
    tag: {
      backgroundColor: "#E9ECF3",
      fontSize: "0.7rem",
      fontWeight: "bolder",
      color: "#44576C",
      padding: "0.1875rem 0.5rem",
      borderRadius: "5px",
      margin: "3px 5px 3px 0px",
      display:"inline-block"
    },
  };

  return <div style={style[props.type]}>{props.content}</div>;
};

export default Badge;
