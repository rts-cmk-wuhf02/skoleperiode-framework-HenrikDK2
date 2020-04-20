const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
