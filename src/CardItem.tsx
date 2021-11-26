import * as React from "react";

const CardItem: React.SFC = ({ name, desc, style }) => (
  <div
    style={{
      width: 375,
      height: 208,
      background: "#000",
      color: "#fff",
      borderRadius: 5,
      textAlign: "center",
      ...style
    }}
  >
    <h3>{name}</h3>
    <p>{desc}</p>
  </div>
);

export default CardItem;
