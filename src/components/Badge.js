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
  };

  return <span style={style[props.type]}>{props.content}</span>;
};

export default Badge;
