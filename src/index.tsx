import * as React from "react";
import { render } from "react-dom";
import CardSlider from "./CardSlider";
import CardItem from "./CardItem";

import "./App.css";

const styles = {
  margin: 30,
  textAlign: "center"
};

const list = [
  { name: "1", desc: "hahhah" },
  { name: "2", desc: "wawawa" },
  { name: "3", desc: "ohhhhh" },
  { name: "4", desc: "wawawa" },
  { name: "5", desc: "ohhhhh" },
  { name: "6", desc: "wawawa" },
  { name: "7", desc: "ohhhhh" }
];

const App = () => (
  <div>
    <h1 style={styles}>REACT-CARD-SLIDER</h1>
    <CardSlider
      list={list}
      renderItem={CardItem}
      width={375}
      boxWidth={500}
      opacity={0.75}
      scale={0.9}
      disableNext={false}
      disablePrev={false}
      index={3}
      onChange={(index: number, data: any) => {
        console.log(index, data);
      }}
    />
  </div>
);

render(<App />, document.getElementById("root"));
