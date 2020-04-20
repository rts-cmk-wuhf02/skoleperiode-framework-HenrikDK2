import React from "react";
import { render } from "react-dom";
import Pet from "./components/Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Basse",
      animal: "Dog",
      breed: "Blanding",
    }),
    React.createElement(Pet, {
      name: "Angelo",
      animal: "Bird",
      breed: "Undulat",
    }),
    React.createElement(Pet, {
      name: "Frederik",
      animal: "Bird",
      breed: "Undulat",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
